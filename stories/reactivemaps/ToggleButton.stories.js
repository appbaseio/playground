import React, { Component } from "react";
import {
	ReactiveBase,
	ToggleButton,
	ReactiveMap,
	AppbaseSensorHelper as helper
} from "@appbaseio/reactivesearch";

import { Img } from "../reactivebase/Img.js";
const historyPin = require("./placeholder.svg");

export default class ToggleButtonMapDefault extends Component {
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

		this.onPopoverTrigger = this.onPopoverTrigger.bind(this);
	}

	componentDidMount() {
		helper.ResponsiveStory();
	}

	onPopoverTrigger(marker) {
		return (<div className="popoverComponent row" style={{ margin: "0", maxWidth: "300px" }}>
			<span className="imgContainer col s2" style={{ padding: "0" }}>
				<Img src={marker._source.member.photo} />
			</span>
			<div className="infoContainer col s10">
				<div className="nameContainer">
					<strong>{marker._source.member.member_name}</strong>
				</div>
				<div className="description">
					<p style={{ margin: "5px 0", lineHeight: "18px" }}>is going to&nbsp;
						<a href={marker._source.event.event_url} target="_blank">
							{marker._source.event.event_name}
						</a>
					</p>
				</div>
			</div>
		</div>);
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
						<ReactiveMap
							appbaseField={this.props.mapping.location}
							historicalData
							setMarkerCluster={false}
							defaultMapStyle="Light Monochrome"
							autoCenter
							searchAsMoveComponent
							MapStylesComponent
							title="Reactive Maps"
							showPopoverOn="click"
							historicPin={historyPin}
							onPopoverTrigger={this.onPopoverTrigger}
							defaultZoom={13}
							defaultCenter={{ lat: 37.74, lon: -122.45 }}
							react={{
								and: "MeetupTops"
							}}
						/>
					</div>
				</div>
			</ReactiveBase>
		);
	}
}

ToggleButtonMapDefault.defaultProps = {
	mapping: {
		topic: "group.group_topics.topic_name_raw.raw",
		location: "location"
	}
};
