import React, { Component } from "react";
import {
	ReactiveBase,
	SelectedFilters,
} from '@appbaseio/reactivesearch';
import {
	ReactiveGoogleMap,
	GeoDistanceDropdown,
} from "@appbaseio/reactivemaps";

import { Img } from "./Img.js";
import historyPin from "./placeholder.png";

export default class GeoDistanceDropdownDefault extends Component {
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
				app="meetup_dataset"
				url="https://xe6N9nDRV:51ea7a8a-6354-4b5f-83e1-12dce3b7ec47@arc-cluster-appbase-demo-ps1pgt.searchbase.io"
				enableAppbase
				type="meetupdata1"
				mapKey="AIzaSyAKz3UhgSuP872fb-Aw27oPRI7M0eXkA9U"
			>
				<div className="row">
					<div className="col">
						<SelectedFilters componentId="GeoDistanceDropdown" />
						<GeoDistanceDropdown
							componentId="GeoDistanceDropdown"
							dataField="location"
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
								and: "GeoDistanceDropdown"
							}}
						/>
					</div>
				</div>
			</ReactiveBase>
		);
	}
}
