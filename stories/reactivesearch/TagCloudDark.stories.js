import React, { Component } from "react";
import { ReactiveBase, TagCloud, SingleDataList, MultiDataList, ToggleButton, ReactiveList, SelectedFilters } from "@appbaseio/reactivesearch";

import { booksList as BooksList } from "./resultViews";

const languageOptions = [
	{ label: 'English', value: 'eng' },
	{ label: 'French', value: 'fre' },
	{ label: 'Spanish', value: 'spa' },
];

export default class TagCloudDefault extends Component {
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
						<ToggleButton
							componentId="LanguageSensor"
							title="ToggleButton"
							dataField="language_code"
							data={languageOptions}
						/>
						<br />
						<SingleDataList
							componentId="LanguageSensor3"
							title="SingleDataList"
							dataField="language_code"
							data={languageOptions}
						/>
						<br />
						<MultiDataList
							componentId="LanguageSensor4"
							title="MultiDataList"
							dataField="language_code"
							data={languageOptions}
						/>
						<br />
						<TagCloud
							componentId="LanguageSensor2"
							title="TagCloud"
							dataField="language_code"
							size={50}
						/>
					</div>
					<div className="col">
						<SelectedFilters componentId="LanguageSensor" />
						<ReactiveList
							componentId="SearchResult"
							dataField="original_title.keyword"
							title="Results"
							sortBy="asc"
							className="result-list-container"
							from={0}
							size={5}
							pagination
							react={{
								and: ["LanguageSensor", "LanguageSensor2", "LanguageSensor3", "LanguageSensor4"]
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
