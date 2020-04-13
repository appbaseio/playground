import React, { Component } from "react";
import { ReactiveBase, SelectedFilters, MultiDropdownList, ReactiveList } from "@appbaseio/reactivesearch";

import { booksReactiveList } from "./resultViews";

export default class MultiDropdownListDefault extends Component {
	render() {
		return (
			<ReactiveBase
				app="good-books-ds"
				url="https://xe6N9nDRV:51ea7a8a-6354-4b5f-83e1-12dce3b7ec47@arc-cluster-appbase-demo-ps1pgt.searchbase.io"
				enableAppbase
			>
				<div className="row">
					<div className="col">
						<MultiDropdownList
							componentId="BookSensor"
							dataField="original_series.keyword"
							size={100}
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
								and: ["BookSensor"]
							}}
						/>
					</div>
				</div>
			</ReactiveBase>
		);
	}
}
