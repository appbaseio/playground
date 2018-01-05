import React, { Component } from "react";
import { ReactiveBase, CategorySearch, ResultList, SelectedFilters } from "@appbaseio/reactivesearch";

import { booksList } from "./resultViews";

export default class CategorySearchDefault extends Component {
	render() {
		return (
			<ReactiveBase
				app="good-books-ds"
				credentials="nY6NNTZZ6:27b76b9f-18ea-456c-bc5e-3a5263ebc63d"
			>
				<div className="row">
					<div className="col">
						<SelectedFilters componentId="BookSensor" />
						<CategorySearch
							dataField={["original_title", "original_title.search"]}
							categoryField="authors.raw"
							componentId="BookSensor"
							{...this.props}
						/>
					</div>

					<div className="col">
						<ResultList
							componentId="SearchResult"
							dataField="original_title"
							from={0}
							size={3}
							onData={booksList}
							className="result-list-container"
							pagination
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
