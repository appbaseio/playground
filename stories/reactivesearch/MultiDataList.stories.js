import React, { Component } from "react";
import { ReactiveBase, MultiDataList, ReactiveList, SelectedFilters } from "@appbaseio/reactivesearch";

import { meetupList as MeetupList } from "./resultViews";

export default class MultiDataListDefault extends Component {
	render() {
		return (
			<ReactiveBase
				app="meetup_app"
				url="https://xe6N9nDRV:51ea7a8a-6354-4b5f-83e1-12dce3b7ec47@arc-cluster-appbase-demo-ps1pgt.searchbase.io"
				enableAppbase
			>
				<div className="row">
					<div className="col">
						<MultiDataList
							componentId="CitySensor"
							dataField="group.group_topics.topic_name_raw.keyword"
							data={[
								{ label: 'Open Source', value: 'Open Source' },
								{ label: 'Social', value: 'Social' },
								{ label: 'Adventure', value: 'Adventure' },
								{ label: 'Music', value: 'Music' },
							]}
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
