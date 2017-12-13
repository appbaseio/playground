import React, { Component } from "react";
import {
	ReactiveBase,
	RangeInput,
	ReactiveList
} from "@appbaseio/reactivesearch";
import ResponsiveStory from "./ResponsiveStory";

export default class RangeSliderRSDefault extends Component {
	onData = (res) => {
		const data = res._source;
		return (<div key={res._id}>
			<h2>{data.name}</h2>
			<p>{data.price} - {data.rating} stars rated</p>
		</div>);
	}

	render() {
		return (
			<ReactiveBase
				app="car-store"
				credentials="cf7QByt5e:d2d60548-82a9-43cc-8b40-93cbbe75c34c"
			>
				<div className="row">
					<div className="col">
						<RangeInput
							dataField="rating"
							componentId="CarSensor"
							range={{
								start: 0,
								end: 6
							}}
							rangeLabels={{
								start: "0",
								end: "6"
							}}
							{...this.props}
						/>
					</div>

					<div className="col">
						<ReactiveList
							componentId="SearchResult"
							dataField="name"
							title="ReactiveList"
							from={0}
							size={20}
							onData={this.onData}
							pagination
							react={{
								and: "CarSensor"
							}}
						/>
					</div>
				</div>
			</ReactiveBase>
		);
	}
}
