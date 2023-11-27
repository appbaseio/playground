import React, { Component } from "react";
import { ReactiveBase, SelectedFilters, MultiList, ReactiveList } from "@appbaseio/reactivesearch";

import { booksReactiveList } from "./resultViews";

export default class MultiListDefault extends Component {
	render() {
		return (
			<ReactiveBase
				app="good-books-ds"
				url="https://a03a1cb71321:75b6603d-9456-4a5a-af6b-a487b309eb61@appbase-demo-ansible-abxiydt-arc.searchbase.io"
				enableAppbase
			>
				<div className="row">
					<div className="col">
						<div className="row" style={{height: '50vh'}}>
							{/* all queries triggereing from this component will be tragetted to the 'good-books-clone' index in the BE as it is specified
							through the index prop */}
							<MultiList
								title="Search index 'good-books-clone'"
								componentId="BookSensor"
								dataField="original_series.keyword"
								aggregationSize={5}
								react={{
									and: 'AuthorSensor',
								}}
								showSearch
								placeholder="Search Series"
								loader="Loading..."
								index="good-books-clone"
							/>
						</div>
						<div className="row" style={{height: '50vh'}}>
							{/* as no index is specified in this component, by default all the queries made will be targetted to the
							index provided in seachbase component */}
							<MultiList
								title="Search index 'good-books-ds'"
								componentId="AuthorSensor"
								dataField="authors.keyword"
								aggregationSize={5}
								react={{
									and: 'BookSensor',
								}}
								showSearch
								placeholder="Search Authors"
								loader="Loading..."
							/>
						</div>
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
								and: ["BookSensor", "AuthorSensor"]
							}}
						/>
					</div>
				</div>
			</ReactiveBase>
		);
	}
}
