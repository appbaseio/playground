import React, { Component } from "react";
import { ReactiveBase, NumberBox, RangeInput, SelectedFilters, SingleDropdownRange, MultiDropdownRange, ResultCard } from "@appbaseio/reactivesearch";

import { booksCard } from "./resultViews";

export default class ResultCardDefault extends Component {
	render() {
		return (
			<ReactiveBase
				app="good-books-ds"
				credentials="nY6NNTZZ6:27b76b9f-18ea-456c-bc5e-3a5263ebc63d"
				{...this.props}
			>
				<div className={`row reverse-labels ${this.props.themePreset}`}>
					<div className="col">
						<SelectedFilters />
						<br />
						<NumberBox
							componentId="BookSensor3"
							dataField="average_rating_rounded"
							data={{
								label: "Book Rating",
								start: 2,
								end: 5
							}}
							title="NumberBox"
						/>
						<br />
						<RangeInput
							dataField="ratings_count"
							componentId="BookSensor4"
							title="RangeInput"
							range={{
								start: 3000,
								end: 50000
							}}
							rangeLabels={{
								start: '3K',
								end: '50K'
							}}
						/>
						<br />
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
						<br />
						<MultiDropdownRange
							componentId="BookSensor2"
							dataField="average_rating"
							title="MultiDropdownRange"
							data={
								[{ "start": 0, "end": 3, "label": "Rating < 3" },
									{ "start": 3, "end": 4, "label": "Rating 3 to 4" },
									{ "start": 4, "end": 5, "label": "Rating > 4" }]
							}
						/>
					</div>
					<div
						className="col"
						style={{
							backgroundColor: this.props.themePreset === 'dark' ? '#303030' : '#fafafa'
						}}
					>
						<ResultCard
							componentId="SearchResult"
							dataField="original_title.raw"
							from={0}
							size={10}
							renderData={booksCard}
							react={{
								and: ["BookSensor", "BookSensor2", "BookSensor3", "BookSensor4"]
							}}
							pagination
						/>
					</div>
				</div>
			</ReactiveBase>
		);
	}
}
