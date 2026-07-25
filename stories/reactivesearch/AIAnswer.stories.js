import React, { Component } from "react";
import { ReactiveBase, SearchBox, SelectedFilters, ReactiveList, AIAnswer } from "@appbaseio/reactivesearch";

import { booksList as BooksList } from "./resultViews";

export default class AIAnswerxDefault extends Component {
	render() {
		return (
			<ReactiveBase
				key={this.props.themePreset}
				app="good-books-ds"
				url="https://reactivesearch-api-9-4-0.onrender.com"
			credentials="d03e6f5f33d5:49124674-554e-4343-9ab2-006b2932f5c0"
				enableAppbase
				appbaseConfig={{
					recordAnalytics: false,
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
							showSourceDocuments={false}
							{...this.props}
						/>
					</div>
				</div>
			</ReactiveBase>
		);
	}
}
