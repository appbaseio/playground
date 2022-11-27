import React, { Component } from "react";
import { ReactiveBase, SearchBox, SearchBox, ReactiveList, SelectedFilters } from "@appbaseio/reactivesearch";

import { booksList as BooksList } from "./resultViews";

export default class SearchBoxDefault extends Component {
	render() {
		return (
			<ReactiveBase
				app="good-books-ds"
				url="https://a03a1cb71321:75b6603d-9456-4a5a-af6b-a487b309eb61@appbase-demo-ansible-abxiydt-arc.searchbase.io"
				enableAppbase
				{...this.props}
			>
				<div className={`row ${this.props.themePreset}`}>
					<div className="col">
						<SelectedFilters componentId="BookSensor" />
						<br />
						<SearchBox
							dataField={["original_title", "original_title.search"]}
							componentId="BookSensor"
							title="SearchBox"
						/>
						<br />
						<SearchBox
							dataField={["original_title", "original_title.search"]}
							categoryField="authors.keyword"
							componentId="BookSensor2"
							title="SearchBox"
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
