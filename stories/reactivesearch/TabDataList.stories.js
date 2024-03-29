import React, { Component } from "react";
import { ReactiveBase, ReactiveList, SelectedFilters, TabDataList } from "@appbaseio/reactivesearch";

import { meetupList as MeetupList } from "./resultViews";

const HorizontalLayout = (props) =>(
<div className="container">
	<SelectedFilters />
	<TabDataList
		componentId="CitySensor"
		dataField="group.group_topics.topic_name_raw.keyword"
		data={[
			{ label: 'Open Source', value: 'Open Source' },
			{ label: 'Social', value: 'Social' },
			{ label: 'Adventure', value: 'Adventure' },
			{ label: 'Music', value: 'Music' },
		]}
		{...props}
	/>
	<ReactiveList
		componentId="SearchResult"
		dataField="group.group_topics.topic_name_raw.keyword"
		title="Results"
		sortBy="asc"
		className="result-list-container"
		from={0}
		size={5}
		pagination
		react={{
			and: ["CitySensor"]
		}}
		{...props}
	>
		{({ data }) => (
			<ReactiveList.ResultListWrapper>
				{
					data.map(item => <MeetupList {...item} />)
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
								componentId="CitySensor"
								dataField="group.group_topics.topic_name_raw.keyword"
								data={[
									{ label: 'Open Source', value: 'Open Source' },
									{ label: 'Social', value: 'Social' },
									{ label: 'Adventure', value: 'Adventure' },
									{ label: 'Music', value: 'Music' },
								]}
								{...props}
							/>
				</div>
				<div className="col">
					<ReactiveList
						componentId="SearchResult"
						dataField="group.group_topics.topic_name_raw.keyword"
						title="Results"
						sortBy="asc"
						className="result-list-container"
						from={0}
						size={5}
						pagination
						react={{
							and: ["CitySensor"]
						}}
						{...props}
					>
						{({ data }) => (
							<ReactiveList.ResultListWrapper>
								{
									data.map(item => <MeetupList {...item} />)
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
				app="meetup_app"
				url="https://a03a1cb71321:75b6603d-9456-4a5a-af6b-a487b309eb61@appbase-demo-ansible-abxiydt-arc.searchbase.io"
				enableAppbase
			>
				{this.props.displayAsVertical ? <VerticalLayout {...this.props}/>: <HorizontalLayout {...this.props}/>}
			</ReactiveBase>
		);
	}
}
