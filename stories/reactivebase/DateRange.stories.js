import React, { Component } from "react";
import { ReactiveBase, DateRange, ReactiveList, AppbaseSensorHelper as helper } from "@appbaseio/reactivesearch";
import { Img } from "./Img";

const moment = require("moment");

export default class DateRangeDefault extends Component {
	constructor(props) {
		super(props);
		this.onData = this.onData.bind(this);
		this.DEFAULT_IMAGE = "http://www.avidog.com/wp-content/uploads/2015/01/BellaHead082712_11-50x65.jpg";
	}

	componentDidMount() {
		helper.ResponsiveStory();
	}

	onData(res) {
		let result = null;
		if (res) {
			let combineData = res.currentData;
			if (res.mode === "historic") {
				combineData = res.currentData.concat(res.newData);
			} else if (res.mode === "streaming") {
				combineData = helper.combineStreamData(res.currentData, res.newData);
			}
			if (combineData) {
				result = combineData.map((markerData) => {
					const marker = markerData._source;
					return this.itemMarkup(marker, markerData);
				});
			}
		}
		return result;
	}

	itemMarkup(marker, markerData) {
		return (
			<a
				className="full_row single-record single_record_for_clone"
				href={marker.event ? marker.event.event_url : ""}
				target="_blank"
				rel="noopener noreferrer"
				key={markerData._id}
			>
				<div className="img-container">
					<Img key={markerData._id} src={marker.member ? marker.member.photo : this.DEFAULT_IMAGE} />
				</div>
				<div className="text-container full_row">
					<div className="text-head text-overflow full_row">
						<span className="text-head-info text-overflow">
							{marker.member ? marker.member.member_name : ""} is going to {marker.event ? marker.event.event_name : ""}
						</span>
						<span className="text-head-city">
							{marker.group ? marker.group.group_city : ""} ({moment(marker.mtime).format("MM-DD")})
						</span>
					</div>
					<div className="text-description text-overflow full_row">
						<ul className="highlight_tags">
							{
								marker.group.group_topics.map(tag => (<li key={tag.topic_name}>{tag.topic_name}</li>))
							}
						</ul>
					</div>
				</div>
			</a>
		);
	}

	render() {
		return (
			<ReactiveBase
				app="reactivemap-demo"
				credentials="SL8fiQ1fg:71ea4254-49ba-4685-8276-e44da225c141"
			>
				<div className="row">
					<div className="col s6 col-xs-6">
						<DateRange
							componentId="DateRangeSensor"
							appbaseField="mtime"
							title="Date Range"
							{...this.props}
						/>
					</div>

					<div className="col s6 col-xs-6">
						<ReactiveList
							componentId="SearchResult"
							appbaseField="mtime"
							title="Results"
							from={0}
							size={20}
							onData={this.onData}
							requestOnScroll={true}
							react={{
								and: "DateRangeSensor"
							}}
						/>
					</div>
				</div>
			</ReactiveBase>
		);
	}
}
