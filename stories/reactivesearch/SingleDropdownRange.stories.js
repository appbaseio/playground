import React, { Component } from "react";
import { ReactiveBase, SingleDropdownRange, SelectedFilters, ReactiveList } from "@appbaseio/reactivesearch";
import { booksCard as BooksCard } from "./resultViews";

export default class SingleDropdownRangeDefault extends Component {
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
						<ReactiveList
							componentId="SearchResult"
							dataField="original_title.raw"
							from={0}
							size={10}
							react={{
								and: "BookSensor"
							}}
							{...this.props}
						>
							{
								({ data }) => (
									<ReactiveList.ResultCardsWrapper>
									{
										data.map(item => <BooksCard key={item._id} {...item}/>)
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
