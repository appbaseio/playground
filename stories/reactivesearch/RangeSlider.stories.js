import React, { Component } from "react";
import {
	ReactiveBase,
	RangeSlider,
	ResultCard
} from "@appbaseio/reactivesearch";
import ResponsiveStory from './ResponsiveStory';

export default class RangeSliderRSDefault extends Component {
	constructor(props) {
		super(props);
		this.onData = this.onData.bind(this);
	}

	componentDidMount() {
		ResponsiveStory();
	}

	onData(res) {
		return {
			image: res.image,
			title: res.name,
			desc: (
				<div>
					<div className="price">${res.price}</div>
					<span className="host" style={{"backgroundImage": `url(${res.host_image})`}}></span>
					<p>{res.room_type} · {res.accommodates} guests</p>
				</div>
			),
			url: res.listing_url
		};
	}

	render() {
		return (
			<ReactiveBase
				app="housing"
				credentials="0aL1X5Vts:1ee67be1-9195-4f4b-bd4f-a91cd1b5e4b5"
				type="listing"
			>
				<div className="row">
					<div className="col s6 col-xs-6">
						<RangeSlider
							componentId="PriceSensor"
							dataField="price"
							title="Price Range"
							stepValue={10}
							range={{
								start: 10,
								end: 250
							}}
							{...this.props}
						/>
					</div>

					<div className="col s6 col-xs-6">
						<ResultCard
							componentId="SearchResult"
							dataField="name"
							from={0}
							size={40}
							onData={this.onData}
							showPagination={true}
							react={{
								and: ["PriceSensor"]
							}}
						/>
					</div>
				</div>
			</ReactiveBase>
		);
	}
}
