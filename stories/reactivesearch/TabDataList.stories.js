import React, { Component } from "react";
import { ReactiveBase, ReactiveList, SelectedFilters, TabDataList } from "@appbaseio/reactivesearch";

import { booksList as BooksList } from "./resultViews";

const languageOptions = [
	{ label: 'English', value: 'eng' },
	{ label: 'French', value: 'fre' },
	{ label: 'Spanish', value: 'spa' },
];

const HorizontalLayout = (props) =>(
<div className="container">
	<SelectedFilters />
	<TabDataList
		componentId="LanguageSensor"
		dataField="language_code.keyword"
		data={languageOptions}
		{...props}
	/>
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
			and: ["LanguageSensor"]
		}}
		{...props}
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
)

const VerticalLayout = (props)=>(
		<>
			<SelectedFilters />
			<div className="row">
				<div className="col">
							<TabDataList
								componentId="LanguageSensor"
								dataField="language_code.keyword"
								data={languageOptions}
								{...props}
							/>
				</div>
				<div className="col">
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
							and: ["LanguageSensor"]
						}}
						{...props}
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
	</>
)

export default class TabDataListDefault extends Component {
	render() {
		return (
			<ReactiveBase
				app="good-books-ds"
				url="https://reactivesearch-api-9-4-0.onrender.com"
				credentials="d03e6f5f33d5:49124674-554e-4343-9ab2-006b2932f5c0"
				enableAppbase
			>
				{this.props.displayAsVertical ? <VerticalLayout {...this.props}/>: <HorizontalLayout {...this.props}/>}
			</ReactiveBase>
		);
	}
}
