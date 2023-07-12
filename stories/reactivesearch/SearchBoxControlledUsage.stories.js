import React, { Component, useState } from "react";
import { ReactiveBase, SearchBox, SelectedFilters, ReactiveList } from "@appbaseio/reactivesearch";

import { booksList as BooksList } from "./resultViews";

export default function SearchBoxControlledUsage(props) {
	const [value, setValue] = useState("")
	const {enableRecentSuggestions} = props
	return (
		<ReactiveBase
			app="good-books-ds"
			url="https://a03a1cb71321:75b6603d-9456-4a5a-af6b-a487b309eb61@appbase-demo-ansible-abxiydt-arc.searchbase.io"
			enableAppbase
			appbaseConfig={{
				recordAnalytics: !!enableRecentSuggestions,
				enableQueryRules: false
			}}
		>
			<div className="row">
				<div className="col">
					<SearchBox
						dataField={[{field:"original_title", weight:3}, {field:"original_title.search", weight:1}]}
						componentId="BookSensor"
						value={value}
						onChange={(v)=>v?setValue(v): setValue("")}
						{...props}
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
