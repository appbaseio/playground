import React, { Component } from "react";
import {
	ReactiveBase,
	MultiDropdownRange,
	SelectedFilters,
	ResultCard
} from "@appbaseio/reactivesearch";
import ResponsiveStory from "./ResponsiveStory";

export default class MultiDropdownRangeRSDefault extends Component {
	constructor(props) {
		super(props);
		this.onData = this.onData.bind(this);
	}

	componentDidMount() {
		ResponsiveStory();
	}

	onData(res) {
		const result = {
			image: "https://www.enterprise.com/content/dam/global-vehicle-images/cars/FORD_FOCU_2012-1.png",
			title: res.name,
			rating: res.rating,
			desc: (<div>
				{res.brand} - {(res.price === 0) ? "Free Test Drive" : "$" + res.price}
			</div>),
			url: "#"
		};
		return result;
	}

	render() {
		return (
			<ReactiveBase
				app="car-store"
				credentials="cf7QByt5e:d2d60548-82a9-43cc-8b40-93cbbe75c34c"
			>
				<div className="row">
					<div className="col s6 col-xs-6">
						<SelectedFilters />
						<MultiDropdownRange
							componentId="PriceSensor"
							dataField="price"
							title="MultiDropdownRange"
							data={
								[{ "start": 0, "end": 100, "label": "Cheap" },
									{ "start": 101, "end": 200, "label": "Moderate" },
									{ "start": 201, "end": 500, "label": "Pricey" },
									{ "start": 501, "end": 1000, "label": "First Date" }]
							}
							{...this.props}
						/>
					</div>

					<div className="col s6 col-xs-6">
						<ResultCard
							componentId="SearchResult"
							dataField="name"
							title="Results"
							from={0}
							size={20}
							onData={this.onData}
							react={{
								and: "PriceSensor"
							}}
						/>
					</div>
				</div>
			</ReactiveBase>
		);
	}
}
