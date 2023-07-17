import React, { Component } from "react";
import { ReactiveBase, SearchBox, SelectedFilters, ReactiveList, AIAnswer } from "@appbaseio/reactivesearch";

import { booksList as BooksList } from "./resultViews";

export default class AIAnswerxDefault extends Component {
	render() {
		return (
			<ReactiveBase
				key={this.props.themePreset}
				app="good-books-ds"
				url="https://a03a1cb71321:75b6603d-9456-4a5a-af6b-a487b309eb61@appbase-demo-ansible-abxiydt-arc.searchbase.io"
				enableAppbase
				appbaseConfig={{
					recordAnalytics: !!this.props.enableRecentSuggestions,
					enableQueryRules: false
				}}
				{...(this.props.themePreset ? {themePreset: this.props.themePreset} : {})}
			>
				<SearchBox
					dataField={[{field:"original_title", weight:3}, {field:"original_title.search", weight:1}]}
					componentId="BookSensor"
					defaultValue={"It Ends with Us"}
				/>
				<SelectedFilters componentId="BookSensor" />
				<div className="row">

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
					<div className="col">
						<AIAnswer
							componentId="ai-answer"
							react={{ and: "BookSensor" }}
							{...this.props}
						/>
					</div>
				</div>
			</ReactiveBase>
		);
	}
}
