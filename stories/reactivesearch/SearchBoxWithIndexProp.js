import React, { Component } from "react";
import { ReactiveBase, SearchBox, SelectedFilters, ReactiveList } from "@appbaseio/reactivesearch";

import { booksList as BooksList } from "./resultViews";

export default class SearchBoxDefault extends Component {
	render() {
		return (
			<ReactiveBase
				app="good-books-ds"
				url="https://a03a1cb71321:75b6603d-9456-4a5a-af6b-a487b309eb61@appbase-demo-ansible-abxiydt-arc.searchbase.io"
				enableAppbase
				appbaseConfig={{
					enableQueryRules: false
				}}
			>
				<div className="row">
					<div className="col">
						<div className="row" style={{height: '50vh'}}>
							{/* as no index is specified in this component, by default all the queries made will be targetted to the
							index provided in seachbase component */}
							<SearchBox
								dataField={["original_title", "original_title.search"]}
								componentId="BookSensor"
								title="Search index 'good-books-ds'"
								react={{
									and: "AuthorSensor"
								}}
								placeholder="Search books.."
								size={5}
							/>
						</div>
						<div className="row" style={{height: '50vh'}}>
							{/* all queries triggereing from this component will be tragetted to the 'good-books-clone' index in the BE as it is specified
							through the index prop */}
							<SearchBox
								dataField={["authors", "authors.search"]}
								componentId="AuthorSensor"
								index="good-books-clone"
								title="Search index 'good-books-clone'"
								react={{
									and: "BookSensor"
								}}
								placeholder="Search authors.."
								size={5}
							/>
						</div>
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
								and: ["BookSensor", "AuthorSensor"]
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
