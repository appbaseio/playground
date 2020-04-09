import React, { Component } from "react";
import { ReactiveBase, DataSearch, SelectedFilters, ReactiveList } from "@appbaseio/reactivesearch";

import { booksList as BooksList } from "./resultViews";

export default class DataSearchDefault extends Component {
	render() {
		return (
			<ReactiveBase
				app="good-books-ds"
				url="https://xe6N9nDRV:51ea7a8a-6354-4b5f-83e1-12dce3b7ec47@arc-cluster-appbase-demo-ps1pgt.searchbase.io"
				enableAppbase
			>
				<div className="row">
					<div className="col">
						<DataSearch
							dataField={["original_title", "original_title.search"]}
							categoryField="authors.raw"
							componentId="BookSensor"
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
