import React, { Component } from "react";
import { ReactiveBase, ReactiveList, SelectedFilters, SearchBox } from "@appbaseio/reactivesearch";

import { booksList as BooksList } from "./resultViews";

export default class DarkStoriesComponent extends Component {
	render() {
		return (
			<ReactiveBase
				app="good-books-ds"
				url="https://reactivesearch-api-9-4-0.onrender.com"
			credentials="d03e6f5f33d5:49124674-554e-4343-9ab2-006b2932f5c0"
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
							title="DataSearch"
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
