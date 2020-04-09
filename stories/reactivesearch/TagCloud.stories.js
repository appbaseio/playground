import React, { Component } from "react";
import { ReactiveBase, TagCloud, SelectedFilters, ReactiveList } from "@appbaseio/reactivesearch";

import { meetupList as MeetupList } from "./resultViews";

export default class TagCloudDefault extends Component {
	render() {
		return (
			<ReactiveBase
				app="meetup_app"
				url="https://xe6N9nDRV:51ea7a8a-6354-4b5f-83e1-12dce3b7ec47@arc-cluster-appbase-demo-ps1pgt.searchbase.io"
				enableAppbase
			>
				<div className="row">
					<div className="col">
						<TagCloud
							componentId="CitySensor"
							dataField="group.group_city.raw"
							size={50}
							{...this.props}
						/>
					</div>
					<div className="col">
						<SelectedFilters componentId="CitySensor" />
						<ReactiveList
							componentId="SearchResult"
							dataField="group.group_topics.topic_name_raw"
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
