import React, { Component } from "react";
import { ReactiveBase, SingleDropdownRange, ResultList, ReactiveList } from "@appbaseio/reactivesearch";

import { booksList as BooksList } from "./resultViews";

export default class ResultListDefault extends Component {
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
						<ReactiveList
							componentId="SearchResult"
							dataField="original_title"
							from={0}
							size={3}
							className="result-list-container"
							pagination
							react={{
								and: "BookSensor"
							}}
							{...this.props}
						>
							{({ data }) => (
								<ReactiveList.ResultListWrapper>
									{
										data.map(item => <BooksList {...item} />)
									}
								</ReactiveList.ResultListWrapper>
							)}
						</ReactiveList>
					</div>
				</div>
			</ReactiveBase>
		);
	}
}
