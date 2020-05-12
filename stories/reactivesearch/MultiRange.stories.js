import React, { Component } from "react";
import { ReactiveBase, MultiRange, SelectedFilters, ReactiveList } from "@appbaseio/reactivesearch";

import { booksCard as BooksCard } from "./resultViews";

export default class MultiRangeDefault extends Component {
	render() {
		return (
			<ReactiveBase
				app="good-books-ds"
				url="https://1e47b838a035:767b5a1a-03cb-4c5f-a536-4f399c24134b@arc-cluster-appbase-tryout-k8dsnj.searchbase.io"
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
