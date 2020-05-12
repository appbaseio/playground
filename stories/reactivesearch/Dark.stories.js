import React, { Component } from "react";
import { ReactiveBase, DataSearch, CategorySearch, ReactiveList, SelectedFilters } from "@appbaseio/reactivesearch";

import { booksList as BooksList } from "./resultViews";

export default class CategorySearchDefault extends Component {
	render() {
		return (
			<ReactiveBase
				app="good-books-ds"
				url="https://1e47b838a035:767b5a1a-03cb-4c5f-a536-4f399c24134b@arc-cluster-appbase-tryout-k8dsnj.searchbase.io"
				enableAppbase
				{...this.props}
			>
				<div className={`row ${this.props.themePreset}`}>
					<div className="col">
						<SelectedFilters componentId="BookSensor" />
						<br />
						<DataSearch
							dataField={["original_title", "original_title.search"]}
							componentId="BookSensor"
							title="DataSearch"
						/>
						<br />
						<CategorySearch
							dataField={["original_title", "original_title.search"]}
							categoryField="authors.keyword"
							componentId="BookSensor2"
							title="CategorySearch"
						/>
						<br />
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
								and: ["BookSensor", "BookSensor2", "BookSensor3"]
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
