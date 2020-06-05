import React, { Component } from "react";
import { ReactiveBase, NumberBox, RangeInput, SelectedFilters, SingleDropdownRange, MultiDropdownRange, ReactiveList } from "@appbaseio/reactivesearch";

import { booksCard as BooksCard } from "./resultViews";

export default class ResultCardDefault extends Component {
	render() {
		return (
			<ReactiveBase
				app="good-books-ds"
				url="https://a03a1cb71321:75b6603d-9456-4a5a-af6b-a487b309eb61@arc-cluster-appbase-demo-6pjy6z.searchbase.io"
				enableAppbase
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
						<ReactiveList
							componentId="SearchResult"
							dataField="original_title.keyword"
							from={0}
							size={10}
							react={{
								and: ["BookSensor", "BookSensor2", "BookSensor3", "BookSensor4"]
							}}
							pagination
							{...this.props}
						>
							{
								({ data }) => (
									<ReactiveList.ResultCardsWrapper>
									{
										data.map(item => <BooksCard {...item}/>)
									}
									</ReactiveList.ResultCardsWrapper>
								)
							}
						</ReactiveList>
					</div>
				</div>
			</ReactiveBase>
		);
	}
}
