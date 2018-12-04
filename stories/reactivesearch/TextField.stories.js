import React, { Component } from "react";
import { ReactiveBase, TextField, ResultList, SelectedFilters } from "@appbaseio/reactivesearch";

import { booksList } from "./resultViews";

export default class DataSearchDefault extends Component {
	render() {
		return (
			<ReactiveBase
				app="good-books-ds"
				credentials="nY6NNTZZ6:27b76b9f-18ea-456c-bc5e-3a5263ebc63d"
			>
				<div className="row">
					<div className="col">
						<TextField
							dataField="original_title.search"
							componentId="BookSensor"
							{...this.props}
						/>
					</div>

					<div className="col">
						<SelectedFilters componentId="BookSensor" />
						<ResultList
							componentId="SearchResult"
							dataField="original_title"
							from={0}
							size={3}
							renderData={booksList}
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
