import React, { Component } from "react";
import { ReactiveBase, MultiDropdownRange, SelectedFilters, ReactiveList } from "@appbaseio/reactivesearch";

import { booksCard as BooksCard } from "./resultViews";

export default class MultiDropdownRangeDefault extends Component {
	render() {
		return (
			<ReactiveBase
				app="good-books-ds"
				url="https://xe6N9nDRV:51ea7a8a-6354-4b5f-83e1-12dce3b7ec47@arc-cluster-appbase-demo-ps1pgt.searchbase.io"
				enableAppbase
			>
				<div className="row reverse-labels">
					<div className="col">
						<MultiDropdownRange
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
