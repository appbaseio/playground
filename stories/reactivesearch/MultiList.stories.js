import React, { Component } from "react";
import { ReactiveBase, SelectedFilters, MultiList, ReactiveList, DataSearch } from "@appbaseio/reactivesearch";

import { booksReactiveList } from "./resultViews";

export default class MultiListDefault extends Component {
	render() {
		return (
			<ReactiveBase
				app="good-books-ds"
				url="https://1e47b838a035:767b5a1a-03cb-4c5f-a536-4f399c24134b@arc-cluster-appbase-tryout-k8dsnj.searchbase.io"
				enableAppbase
			>
				<div className="row">
					<div className="col">
						<MultiList
							componentId="BookSensor"
							dataField="original_series.keyword"
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
							dataField="original_title.keyword"
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
