import React, { Component } from "react";
import {
	ReactiveBase,
	SingleList,
} from "@appbaseio/reactivesearch";

import { ReactiveOpenStreetMap } from '@appbaseio/reactivemaps';

import { Img } from "./Img.js";
import historyPin from "./placeholder.png";

export default class ReactiveOpenStreetMapDefault extends Component {
	constructor(props) {
		super(props);
		this.onPopoverClick = this.onPopoverClick.bind(this);
	}

	onPopoverClick(marker) {
		return (<div style={{ margin: 0, maxWidth: '300px', lineHeight: '18px' }}>
			<p>
				Earthquake (at) <strong>{marker.place}</strong>&nbsp;
				of maginutde: <code>{marker.mag}</code> in the year {marker.time}.
			</p>
		</div>);
	}

	render() {
		return (
			<ReactiveBase
				app="earthquakes"
				credentials="dshr057Nz:e18bbbbe-5d55-4234-a17e-4d64fb2222c7"
				mapKey="AIzaSyAKz3UhgSuP872fb-Aw27oPRI7M0eXkA9U"
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
						<ReactiveOpenStreetMap
							componentId="map"
							dataField="location"
							defaultPin={historyPin}
							onPopoverClick={this.onPopoverClick}
							defaultZoom={6}
							showSearchAsMove
							onData={result => ({
								label: result.mag,
								// icon: 'https://i.imgur.com/NHR2tYL.png',
								// custom: (<div>{result.mag}</div>),
							})}
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
