import React, { Component } from "react";
import { ReactiveBase, ToggleButton, ReactiveList, AppbaseSensorHelper as helper } from "@appbaseio/reactivesearch";
import { Img } from "./Img.js";

export default class ToggleButtonDefault extends Component {
	constructor(props) {
		super(props);

		this.toggleData = [{
			"label": "Social",
			"value": "Social"
		}, {
			"label": "Travel",
			"value": "Travel"
		}, {
			"label": "Outdoors",
			"value": "Outdoors"
		}];

		this.onData = this.onData.bind(this);
		this.DEFAULT_IMAGE = "http://www.avidog.com/wp-content/uploads/2015/01/BellaHead082712_11-50x65.jpg";
	}

	componentDidMount() {
		helper.ResponsiveStory();
	}

	onData(res, err) {
		let result = null;
		if(res) {
			let combineData = res.currentData;
			if(res.mode === "historic") {
				combineData = res.currentData.concat(res.newData);
			}
			else if(res.mode === "streaming") {
				combineData = helper.combineStreamData(res.currentData, res.newData);
			}
			if (combineData) {
				result = combineData.map((markerData, index) => {
					let marker = markerData._source;
					return this.itemMarkup(marker, markerData);
				});
			}
		}
		return result;
	}

	itemMarkup(marker, markerData) {
		return (
			<a className="full_row single-record single_record_for_clone"
				href={marker.event ? marker.event.event_url : ""}
				target="_blank"
				key={markerData._id}>
				<div className="img-container">
					<Img key={markerData._id} src={marker.member ? marker.member.photo : this.DEFAULT_IMAGE} />
				</div>
				<div className="text-container full_row">
					<div className="text-head text-overflow full_row">
						<span className="text-head-info text-overflow">
							{marker.member ? marker.member.member_name : ""} is going to {marker.event ? marker.event.event_name : ""}
						</span>
						<span className="text-head-city">{marker.group ? marker.group.group_city : ""}</span>
					</div>
					<div className="text-description text-overflow full_row">
						<ul className="highlight_tags">
							{
								marker.group.group_topics.map(function(tag,i){
									return (<li key={i}>{tag.topic_name}</li>)
								})
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
				app="meetup_demo"
				credentials="LPpISlEBe:2a8935f5-0f63-4084-bc3e-2b2b4d1a8e02"
			>
				<div className="row">
					<div className="col s6 col-xs-6">
						<ToggleButton
							appbaseField={this.props.mapping.topic}
							componentId="MeetupTops"
							title="ToggleButton"
							data={this.toggleData}
							{...this.props}
						/>
					</div>

					<div className="col s6 col-xs-6">
						<ReactiveList
							componentId="SearchResult"
							appbaseField="group.group_topics.topic_name_raw"
							title="Results"
							sortBy="asc"
							from={0}
							size={20}
							onData={this.onData}
							react={{
								"and": "MeetupTops"
							}}
						/>
					</div>
				</div>
			</ReactiveBase>
		);
	}
}

ToggleButtonDefault.defaultProps = {
	mapping: {
		topic: "group.group_topics.topic_name_raw.raw"
	}
};
