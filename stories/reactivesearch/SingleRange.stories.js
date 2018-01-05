import React, { Component } from "react";
import { ReactiveBase, SingleRange, SelectedFilters, ResultCard } from "@appbaseio/reactivesearch";

import { booksCard } from "./resultViews";

export default class SingleRangeDefault extends Component {
	render() {
		return (
			<ReactiveBase
				app="good-books-ds"
				credentials="nY6NNTZZ6:27b76b9f-18ea-456c-bc5e-3a5263ebc63d"
			>
				<div className="row reverse-labels">
					<div className="col">
						<SingleRange
							componentId="BookSensor"
							dataField="average_rating"
							data={
								[{ "start": 0, "end": 3, "label": "Rating < 3" },
									{ "start": 3, "end": 4, "label": "Rating 3 to 4" },
									{ "start": 4, "end": 5, "label": "Rating > 4" }]
							}
							{...this.props}
						/>
					</div>
					<div className="col" style={{backgroundColor: "#fafafa"}}>
						<SelectedFilters />
						<ResultCard
							componentId="SearchResult"
							dataField="original_title.raw"
							from={0}
							size={10}
							onData={booksCard}
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
