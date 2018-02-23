import React, { Component } from "react";
import {
	ReactiveBase,
	SingleList,
	SelectedFilters
} from "@appbaseio/reactivesearch";
import { ReactiveMap } from "@appbaseio/reactivemaps";
import ResponsiveStory from "../reactivesearch/ResponsiveStory";

import { Img } from "./Img.js";
const historyPin = require("./placeholder.svg");

export default class SingleListMapDefault extends Component {
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
				app="earthquake"
				credentials="OrXIHcgHn:d539c6e7-ed14-4407-8214-c227b0600d8e"
				type="places"
			>
				<div className="row">
					<div className="col">
						<SelectedFilters />
						<SingleList
							componentId="PlaceSensor"
							dataField="place.raw"
							title="SingleList"
							size={100}
							{...this.props}
						/>
					</div>

					<div className="col">
						<ReactiveMap
							componentId="map"
							dataField="location"
							defaultMapStyle="Light Monochrome"
							title="Reactive Maps"
							showPopoverOn="click"
							mapPin={historyPin}
							defaultZoom={8}
							defaultCenter={{ lat: 37.74, lng: -122.45 }}
							react={{
								and: ["PlaceSensor"]
							}}
						/>
					</div>
				</div>
			</ReactiveBase>
		);
	}
}

