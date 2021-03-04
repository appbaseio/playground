import React, { Component } from "react";
import { ReactiveBase, TagCloud, SelectedFilters, ReactiveList } from "@appbaseio/reactivesearch";

import { meetupList as MeetupList } from "./resultViews";

export default class TagCloudDefault extends Component {
	render() {
		return (
			<ReactiveBase
				app="meetup_app"
				url="https://a03a1cb71321:75b6603d-9456-4a5a-af6b-a487b309eb61@appbase-demo-ansible-abxiydt-arc.searchbase.io.searchbase.io"
				enableAppbase
			>
				<div className="row">
					<div className="col">
						<TagCloud
							componentId="CitySensor"
							dataField="group.group_city.keyword"
							size={50}
							{...this.props}
						/>
					</div>
					<div className="col">
						<SelectedFilters componentId="CitySensor" />
						<ReactiveList
							componentId="SearchResult"
							dataField="group.group_topics.topic_name_raw.keyword"
							title="Results"
							sortBy="asc"
							className="result-list-container"
							from={0}
							size={5}
							innerClass={{
								image: 'meetup-list-image'
							}}
							pagination
							react={{
								and: ["CitySensor"]
							}}
							{...this.props}
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
			</ReactiveBase>
		);
	}
}
