import React, { Component } from "react";
import { ReactiveBase, MultiRange, SelectedFilters, ReactiveList } from "@appbaseio/reactivesearch";

import { booksCard as BooksCard } from "./resultViews";

export default class MultiRangeDefault extends Component {
	render() {
		return (
			<ReactiveBase
				app="good-books-ds"
				url="https://reactivesearch-api-9-4-0.onrender.com"
			credentials="d03e6f5f33d5:49124674-554e-4343-9ab2-006b2932f5c0"
				enableAppbase
			>
				<div className="row reverse-labels">
					<div className="col">
						<MultiRange
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
							dataField="original_title.keyword"
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
