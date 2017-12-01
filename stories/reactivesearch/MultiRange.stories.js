import React, { Component } from "react";
import {
	ReactiveBase,
	MultiRange,
	ReactiveList,
	SelectedFilters
} from "@appbaseio/reactivesearch";
import ResponsiveStory from "./ResponsiveStory";

export default class MultiRangeRSDefault extends Component {
	constructor(props) {
		super(props);
		this.onData = this.onData.bind(this);
	}

	componentDidMount() {
		ResponsiveStory();
	}

	onData(res) {
		const data = res._source;
		return (<div key={res._id}>
			<h2 dangerouslySetInnerHTML={{__html: data.name}} />
			<h4 dangerouslySetInnerHTML={{__html: data.brand}} />
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
						<MultiRange
							componentId="PriceSensor"
							dataField="price"
							title="MultiRange"
							data={
								[{ "start": 0, "end": 100, "label": "Cheap" },
									{ "start": 101, "end": 200, "label": "Moderate" },
									{ "start": 201, "end": 500, "label": "Pricey" },
									{ "start": 501, "end": 1000, "label": "First Date" }]
							}
							{...this.props}
						/>
					</div>

					<div className="col">
						<SelectedFilters />
						<ReactiveList
							componentId="SearchResult"
							dataField="name"
							title="ReactiveList"
							from={0}
							size={20}
							onData={this.onData}
							pagination
							react={{
								and: "PriceSensor"
							}}
						/>
					</div>
				</div>
			</ReactiveBase>
		);
	}
}
