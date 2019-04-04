import React, { Component } from "react";
import moment from "moment";
import {
	ReactiveBase,
	DateRange,
	ResultCard,
	SelectedFilters
} from "@appbaseio/reactivesearch";
import ResponsiveStory from "./ResponsiveStory";

export default class DateRangeDefault extends Component {
	componentDidMount() {
		ResponsiveStory();
	}

	dateQuery(value) {
		let query = null;
		if (value) {
			query = [
				{
					"range": {
						"date_from": {
							"gte": moment(value.start).format("YYYYMMDD")
						}
					}
				},
				{
					"range": {
						"date_to": {
							"lte": moment(value.end).format("YYYYMMDD")
						}
					}
				}
			];
		}
		return query;
	}

	onData(res) {
		return {
			image: res.image,
			title: res.name,
			description: (
				<div>
					<div>${res.price}</div>
					<span style={{ "backgroundImage": `url(${res.host_image})` }}></span>
					<p>{res.room_type} · {res.accommodates} guests</p>
				</div>
			),
			url: res.listing_url
		};
	}

	render() {
		return (
			<ReactiveBase
				app="airbeds-yj"
				credentials="eRPhaUPwK:22f9279e-3b86-432d-a9b0-ba8a6f07f459"
				type="listing"
				{...this.props}
			>
				<div className={`row ${this.props.themePreset}`}>
					<div className="col">
						<DateRange
							componentId="DateSensor"
							dataField="date_from"
							customQuery={this.dateQuery}
							initialMonth={this.props.defaultSelected ? null : new Date("2017-05-05")}
						/>
					</div>

					<div className="col">
						<SelectedFilters componentId="DateSensor" />
						<ResultCard
							componentId="SearchResult"
							dataField="name"
							from={0}
							size={40}
							onData={this.onData}
							showPagination={true}
							react={{
								and: ["DateSensor"]
							}}
						/>
					</div>
				</div>
			</ReactiveBase>
		);
	}
}
