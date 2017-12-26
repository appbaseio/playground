import React, { Component } from "react";
import {
	ReactiveBase,
	DynamicRangeSlider,
	ResultList
} from "@appbaseio/reactivesearch";

import { booksList } from "./resultViews";

export default class DynamicRangeSliderRSDefault extends Component {
	render() {
		return (
			<ReactiveBase
				app="good-books-live"
				credentials="sHZWU7AYJ:d1e2922c-035c-429f-bfe4-62aa38b1c395"
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
