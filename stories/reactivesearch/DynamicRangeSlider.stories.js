import React, { Component } from "react";
import {
	ReactiveBase,
	DynamicRangeSlider,
	ReactiveList
} from "@appbaseio/reactivesearch";
import ResponsiveStory from "./ResponsiveStory";

export default class DynamicRangeSliderRSDefault extends Component {
	onData = (data) => {
		return (<div key={data._id}>
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
						<DynamicRangeSlider
							dataField="rating"
							componentId="CarSensor"
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
