import React, { Component } from "react";
import { ReactiveBase, DataSearch, SelectedFilters, ReactiveList } from "@appbaseio/reactivesearch";

import { booksList as BooksList } from "./resultViews";

export default class DataSearchDefault extends Component {
	render() {
		return (
			<ReactiveBase
				app="good-books-ds"
				url="https://1e47b838a035:767b5a1a-03cb-4c5f-a536-4f399c24134b@arc-cluster-appbase-tryout-k8dsnj.searchbase.io"
				enableAppbase
			>
				<div className="row">
					<div className="col">
						<DataSearch
							dataField={["original_title", "original_title.search"]}
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
