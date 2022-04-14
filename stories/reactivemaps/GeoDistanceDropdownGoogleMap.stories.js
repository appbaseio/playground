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
				url="https://a03a1cb71321:75b6603d-9456-4a5a-af6b-a487b309eb61@appbase-demo-ansible-abxiydt-arc.searchbase.io"
				enableAppbase
				mapKey="AIzaSyA9JzjtHeXg_C_hh_GdTBdLxREWdj3nsOU"
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
