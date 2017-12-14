import React, { Component } from "react";
import moment from "moment";
import {
	ReactiveBase,
	DatePicker,
	ResultCard,
	SelectedFilters
} from "@appbaseio/reactivesearch";
import ResponsiveStory from "./ResponsiveStory";

export default class DatePickerRSDefault extends Component {
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
							"lte": moment(value).format("YYYYMMDD")
						}
					}
				}
			];
		}
		return query;
	}

	onData({ _source: res }) {
		return {
			image: res.image,
			title: res.name,
			desc: (
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
				app="housing"
				credentials="0aL1X5Vts:1ee67be1-9195-4f4b-bd4f-a91cd1b5e4b5"
				type="listing"
			>
				<div className="row">
					<div className="col">
						<SelectedFilters componentId="DateSensor" />
						<DatePicker
							componentId="DateSensor"
							dataField="date_from"
							title="Housing available from"
							customQuery={this.dateQuery}
							initialMonth={new Date("2017-05-05")}
							{...this.props}
						/>
					</div>

					<div className="col">
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
