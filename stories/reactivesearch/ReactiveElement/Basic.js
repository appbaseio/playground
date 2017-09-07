import React, { Component } from "react";
import { ReactiveBase, MultiList, ReactiveElement } from "@appbaseio/reactivesearch";
import ResponsiveStory from "../ResponsiveStory";
import { Img } from "../Img.js";

require("../list.css");

export default class Basic extends Component {
	constructor(props) {
		super(props);
		this.cityQuery = this.cityQuery.bind(this);
		this.DEFAULT_IMAGE = "http://www.avidog.com/wp-content/uploads/2015/01/BellaHead082712_11-50x65.jpg";
	}

	cityQuery(value) {
		if (value) {
			const field = "group.group_city.group_city_simple";
			const query = JSON.parse(`{"${field}":${JSON.stringify(value)}}`);
			return { terms: query };
		} return null;
	}

	componentDidMount() {
		ResponsiveStory();
	}

	render() {
		return (
			<ReactiveBase
				app="meetup2"
				credentials="qz4ZD8xq1:a0edfc7f-5611-46f6-8fe1-d4db234631f3"
				type="meetup"
			>
				<div className="row reverse-labels">
					<div className="col s6 col-xs-6">
						<ReactiveElement
							componentId="SearchResult"
							title="Reactive Element"
							from={0}
							size={20}
							placeholder="Select a city from the input filter..."
							{...this.props}
							react={{
								and: "CitySensor"
							}}
						/>
					</div>

					<div className="col s6 col-xs-6">
						<MultiList
							componentId="CitySensor"
							dataField="group.group_city.group_city_simple"
							showCount={true}
							size={10}
							title="Input Filter"
							initialLoader="Loading city list.."
							customQuery={this.cityQuery}
							searchPlaceholder="Search City"
							includeSelectAll={true}
						/>
					</div>
				</div>
			</ReactiveBase>
		);
	}
}
