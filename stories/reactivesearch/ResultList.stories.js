import React, { Component } from "react";
import { ReactiveBase, SingleDropdownRange, ResultList } from "@appbaseio/reactivesearch";

import { booksList } from "./resultViews";

export default class ResultListDefault extends Component {
	render() {
		return (
			<ReactiveBase
				app="good-books-ds"
				credentials="nY6NNTZZ6:27b76b9f-18ea-456c-bc5e-3a5263ebc63d"
			>
				<div className="row reverse-labels">
					<div className="col">
						<SingleDropdownRange
							componentId="BookSensor"
							dataField="average_rating"
							title="SingleDropdownRange"
							data={
								[{ "start": 0, "end": 3, "label": "Rating < 3" },
									{ "start": 3, "end": 4, "label": "Rating 3 to 4" },
									{ "start": 4, "end": 5, "label": "Rating > 4" }]
							}
						/>
					</div>
					<div className="col" style={{backgroundColor: "#fafafa"}}>
						<ResultList
							componentId="SearchResult"
							dataField="original_title"
							from={0}
							size={3}
							renderData={booksList}
							className="result-list-container"
							pagination
							react={{
								and: "BookSensor"
							}}
							{...this.props}
						/>
					</div>
				</div>
			</ReactiveBase>
		);
	}
}
