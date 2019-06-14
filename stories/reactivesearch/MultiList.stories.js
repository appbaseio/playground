import React, { Component } from "react";
import { ReactiveBase, SelectedFilters, MultiList, ReactiveList, DataSearch } from "@appbaseio/reactivesearch";

import { booksReactiveList } from "./resultViews";

export default class MultiListDefault extends Component {
	render() {
		return (
			<ReactiveBase
				app="good-books-ds"
				credentials="nY6NNTZZ6:27b76b9f-18ea-456c-bc5e-3a5263ebc63d"
			>
				<div className="row">
					<div className="col">
						<MultiList
							componentId="BookSensor"
							dataField="original_series.raw"
							size={100}
							react={{
								and: 'BookSensorSEARCH',
							}}
							{...this.props}
						/>
					</div>

					<div className="col">
						<SelectedFilters />
						<ReactiveList
							componentId="SearchResult"
							dataField="original_title.raw"
							className="result-list-container"
							from={0}
							size={5}
							renderItem={booksReactiveList}
							react={{
								and: ["BookSensor", "BookSensorSEARCH"]
							}}
						/>
					</div>
				</div>
			</ReactiveBase>
		);
	}
}
