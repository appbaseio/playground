import React, { Component } from "react";
import {
	ReactiveBase,
	DynamicRangeSlider,
	ResultList
} from "@appbaseio/reactivesearch";

import { booksList } from "./resultViews";

export default class DynamicRangeSliderDefault extends Component {
	render() {
		return (
			<ReactiveBase
				app="good-books-ds"
				credentials="nY6NNTZZ6:27b76b9f-18ea-456c-bc5e-3a5263ebc63d"
			>
				<div className="row">
					<div className="col">
						<DynamicRangeSlider
							dataField="books_count"
							componentId="BookSensor"
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
