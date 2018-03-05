import React, { Component } from "react";
import {
	ReactiveBase,
	SingleList,
} from "@appbaseio/reactivesearch";

import { ReactiveMap } from '@appbaseio/reactivemaps';

import { Img } from "./Img.js";
import historyPin from "./placeholder.png";

export default class ReactiveMapDefault extends Component {
	constructor(props) {
		super(props);
		this.onPopoverTrigger = this.onPopoverTrigger.bind(this);
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
				mapKey="AIzaSyBQdVcKCe0q_vOBDUvJYpzwGpt_d_uTj4Q"
			>
				<div className="row reverse-labels">
					<div className="col">
						<div>
							<SingleList
								componentId="CitySensor"
								dataField="place.raw"
								showCount
								size={10}
								title="Input Filter"
							/>
						</div>
					</div>
					<div className="col">
						<ReactiveMap
							componentId="map"
							dataField="location"
							mapPin={historyPin}
							onPopoverTrigger={this.onPopoverTrigger}
							defaultZoom={13}
							showSearchAsMove
							defaultCenter={{
								lat: -23.944,
								lng: -70.093,
							}}
							react={{
								and: ["CitySensor", "VenueSensor"]
							}}
							{...this.props}
						/>
					</div>
				</div>
			</ReactiveBase>
		);
	}
}
