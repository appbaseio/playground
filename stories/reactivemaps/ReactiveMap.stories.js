import React, { Component } from "react";
import {
	ReactiveBase,
	DataSearch,
	SingleList,
	ReactiveMap,
	PlacesSearch
} from "@appbaseio/reactivemaps";
import ResponsiveStory from "../reactivesearch/ResponsiveStory";

import { Img } from "./Img.js";
const historyPin = require("./placeholder.svg");

export default class ReactiveMapDefault extends Component {
	constructor(props) {
		super(props);
		this.onPopoverTrigger = this.onPopoverTrigger.bind(this);
	}

	componentDidMount() {
		ResponsiveStory();
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
				app="reactivemap-demo"
				credentials="qMzzgez0t:a9138c3f-f246-4cd8-ba3d-0b99f9550c05"
				type="meetupdata1"
				theme="rbc-blue"
			>
				<div className="row reverse-labels">
					<div className="col">
						<ReactiveMap
							dataField={this.props.mapping.location}
							historicalData
							setMarkerCluster={false}
							defaultMapStyle={this.props.mapStyle}
							autoCenter
							searchAsMoveComponent
							MapStylesComponent
							historicPin={historyPin}
							onPopoverTrigger={this.onPopoverTrigger}
							defaultZoom={13}
							defaultCenter={{ lat: 37.74, lng: -122.45 }}
							react={{
								and: ["CitySensor", "VenueSensor"]
							}}
							{...this.props}
						/>
					</div>
					<div className="col">
						<div>
							<DataSearch
								dataField={this.props.mapping.venue}
								componentId="VenueSensor"
								placeholder="Search Venue"
							/>
						</div>
						<div>
							<SingleList
								componentId="CitySensor"
								dataField={this.props.mapping.city}
								showCount
								size={10}
								title="Input Filter"
								searchPlaceholder="Search City"
								includeSelectAll
							/>
						</div>
					</div>
				</div>
			</ReactiveBase>
		);
	}
}

ReactiveMapDefault.defaultProps = {
	mapStyle: "Light Monochrome",
	mapping: {
		location: "location",
		venue: "venue_name_ngrams",
		city: "group.group_city.raw"
	}
};
