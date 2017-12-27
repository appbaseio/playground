import React, { Component } from "react";
import { ReactiveBase, CategorySearch, ResultList, SelectedFilters } from "@appbaseio/reactivesearch";

import { booksList } from "./resultViews";

export default class CategorySearchDefault extends Component {
	render() {
		return (
			<ReactiveBase
				app="good-books-live"
				credentials="sHZWU7AYJ:d1e2922c-035c-429f-bfe4-62aa38b1c395"
			>
				<div className="row">
					<div className="col">
						<SelectedFilters componentId="BookSensor" />
						<CategorySearch
							dataField={["original_title", "original_title.search"]}
							categoryField="authors.raw"
							componentId="BookSensor"
							title="CategorySearch"
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
