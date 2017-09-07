import React, { Component } from "react";
import { ReactiveBase, MultiList, ReactiveElement } from "@appbaseio/reactivesearch";
import { AppbaseSensorHelper as helper } from "@appbaseio/reactivesearch";
import ResponsiveStory from "../ResponsiveStory";
import { GetTopTopics } from "./helper";
import { Img } from "../Img.js";

require("../list.css");

export default class WithTheme extends Component {
	constructor(props) {
		super(props);
		this.cityQuery = this.cityQuery.bind(this);
		this.onAllData = this.onAllData.bind(this);
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

	onAllData(res, err) {
		let result = null;
		if (res && res.appliedQuery) {
			let combineData = res.currentData;
			if (res.mode === "historic") {
				combineData = res.currentData.concat(res.newData);
			}			else if (res.mode === "streaming") {
				combineData = helper.combineStreamData(res.currentData, res.newData);
			}
			if (combineData) {
				combineData = GetTopTopics(combineData);
				const resultMarkup = combineData.map((data, index) => {
					if (index < 5) {
						return this.itemMarkup(data, index);
					}
				});
				result = (
					<div className="trendingTopics col s12 col-xs-12" style={{ padding: "10px", paddingBottom: "60px", color: "#eee" }}>
						<table className="table">
							<tbody>
								{resultMarkup}
							</tbody>
						</table>
					</div>
				);
			}
		}
		return result;
	}

	itemMarkup(data, index) {
		return (
			<tr key={index}>
				<th>{data.name}</th>
				<td>{data.value}</td>
			</tr>
		);
	}


	render() {
		return (
			<ReactiveBase
				app="meetup2"
				credentials="qz4ZD8xq1:a0edfc7f-5611-46f6-8fe1-d4db234631f3"
				type="meetup"
				theme="rbc-dark"
			>
				<div className="row reverse-labels">
					<div className="col s6 col-xs-6">
						<ReactiveElement
							componentId="SearchResult"
							from={0}
							size={1000}
							onAllData={this.onAllData}
							placeholder="Select a city from the input filter..."
							title="Reactive Element: Dark Theme"
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
							selectAllLabel="All cities"
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
