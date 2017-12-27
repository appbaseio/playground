import React, { Component } from "react";
import {
	ReactiveBase,
	RangeSlider,
	ResultList
} from "@appbaseio/reactivesearch";

import { booksList } from "./resultViews";

export default class RangeSliderDefault extends Component {
	render() {
		return (
			<ReactiveBase
				app="good-books-live"
				credentials="sHZWU7AYJ:d1e2922c-035c-429f-bfe4-62aa38b1c395"
			>
				<div className="row">
					<div className="col">
						<RangeSlider
							dataField="ratings_count"
							componentId="BookSensor"
							range={{
								start: 3000,
								end: 50000
							}}
							rangeLabels={{
								start: '3K',
								end: '50K'
							}}
							{...this.props}
						/>
					</div>

					<div className="col">
						<ResultList
							componentId="SearchResult"
							dataField="original_title"
							from={0}
							size={3}
							className="result-list-container"
							onData={booksList}
							pagination
							react={{
								and: "BookSensor"
							}}
						/>
					</div>
				</div>
			</ReactiveBase>
		);
	}
}
