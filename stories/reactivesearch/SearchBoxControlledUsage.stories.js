import React, { Component, useState } from "react";
import { ReactiveBase, SearchBox, SelectedFilters, ReactiveList } from "@appbaseio/reactivesearch";

import { booksList as BooksList } from "./resultViews";

export default function SearchBoxControlledUsage(props) {
	const [value, setValue] = useState("")
	const {enableRecentSuggestions} = props
	return (
		<ReactiveBase
			app="good-books-ds"
			url="https://reactivesearch-api-9-4-0.onrender.com"
			credentials="d03e6f5f33d5:49124674-554e-4343-9ab2-006b2932f5c0"
			enableAppbase
			appbaseConfig={{
				recordAnalytics: false,
				enableQueryRules: false
			}}
		>
			<div className="row">
				<div className="col">
					<SearchBox
						dataField={[{field:"original_title", weight:3}, {field:"original_title.search", weight:1}]}
						componentId="BookSensor"
						value={value}
						onChange={(v, triggerQuery)=>{
							v?setValue(v): setValue("")
							if(props.shouldTriggerQueryWhileTyping){
								triggerQuery()
							}
						}}
						searchboxId={props.enableFAQSuggestions?"rs_docs":undefined}
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
