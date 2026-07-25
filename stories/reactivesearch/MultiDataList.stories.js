import React, { Component } from "react";
import { ReactiveBase, MultiDataList, ReactiveList, SelectedFilters } from "@appbaseio/reactivesearch";

import { meetupList as MeetupList } from "./resultViews";

export default class MultiDataListDefault extends Component {
	render() {
		return (
			<ReactiveBase
				app="meetup_app"
				url="https://reactivesearch-api-9-4-0.onrender.com"
			credentials="d03e6f5f33d5:49124674-554e-4343-9ab2-006b2932f5c0"
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
