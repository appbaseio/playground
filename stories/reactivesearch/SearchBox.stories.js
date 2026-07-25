import React, { Component } from "react";
import { ReactiveBase, SearchBox, SelectedFilters, ReactiveList } from "@appbaseio/reactivesearch";

import { booksList as BooksList } from "./resultViews";

export default class SearchBoxDefault extends Component {
	render() {
		return (
			<ReactiveBase
				app="good-books-ds"
				url="https://reactivesearch-api-9-4-0.onrender.com"
			credentials="d03e6f5f33d5:49124674-554e-4343-9ab2-006b2932f5c0"
				reactivesearchAPIConfig={{
					recordAnalytics: false,
					"userId": "test",
				}}
				key={this.props.themePreset || "light"}
				themePreset={this.props.themePreset || "light"}
			>
				<div className="row">
					<div className="col">
						<SearchBox
							dataField={[{ field: "original_title", weight: 3 }, { field: "original_title.search", weight: 1 }]}
							componentId="BookSensor"
							showDistinctSuggestions
							{...this.props}
						/>
						<SelectedFilters componentId="BookSensor" />
					</div>
					<div className="col">
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
