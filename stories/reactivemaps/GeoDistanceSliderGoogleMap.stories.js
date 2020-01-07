import React, { Component } from "react";
import {
	ReactiveBase,
	SelectedFilters,
} from '@appbaseio/reactivesearch';
import {
	ReactiveGoogleMap,
	GeoDistanceSlider,
} from "@appbaseio/reactivemaps";

import { Img } from "./Img.js";
import historyPin from "./placeholder.png";

export default class GeoDistanceSliderDefault extends Component {
	constructor(props) {
		super(props);
		// this.onPopoverTrigger = this.onPopoverTrigger.bind(this);
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
				app="meetup_app"
				credentials="lW70IgSjr:87c5ae16-73fb-4559-a29e-0a02760d2181"
				type="meetupdata1"
				mapKey="AIzaSyAKz3UhgSuP872fb-Aw27oPRI7M0eXkA9U"
			>
				<div className="row">
					<div className="col">
						<SelectedFilters />
						<GeoDistanceSlider
							componentId="GeoDistanceSlider"
							dataField="location"
							range={{
								start: 1,
								end: 60
							}}
							{...this.props}
						/>
					</div>
					<div className="col">
						<ReactiveGoogleMap
							componentId="map"
							dataField="location"
							defaultMapStyle="Light Monochrome"
							autoCenter={false}
							title="Reactive Maps"
							defaultPin={historyPin}
							// onPopoverTrigger={this.onPopoverTrigger}
							defaultZoom={13}
							defaultCenter={{ lat: 37.74, lng: -122.45 }}
							react={{
								and: "GeoDistanceSlider"
							}}
						/>
					</div>
				</div>
			</ReactiveBase>
		);
	}
}
