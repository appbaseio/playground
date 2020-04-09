import React, { Component } from "react";
import { ReactiveBase, TagCloud, SingleDataList, MultiDataList, ToggleButton, ReactiveList, SelectedFilters } from "@appbaseio/reactivesearch";

import { meetupList as MeetupList } from "./resultViews";

export default class TagCloudDefault extends Component {
	render() {
		return (
			<ReactiveBase
				app="meetup_app"
				url="https://xe6N9nDRV:51ea7a8a-6354-4b5f-83e1-12dce3b7ec47@arc-cluster-appbase-demo-ps1pgt.searchbase.io"
				enableAppbase
				{...this.props}
			>
				<div className={`row ${this.props.themePreset}`}>
					<div className="col">
						<ToggleButton
							componentId="CitySensor"
							title="ToggleButton"
							dataField="group.group_topics.topic_name_raw.raw"
							data={[
								{ label: 'Social', value: 'Social' },
								{ label: 'Adventure', value: 'Adventure' },
								{ label: 'Music', value: 'Music' },
							]}
						/>
						<br />
						<SingleDataList
							componentId="CitySensor3"
							title="SingleDataList"
							dataField="group.group_topics.topic_name_raw.raw"
							data={[
								{ label: 'Open Source', value: 'Open Source' },
								{ label: 'Social', value: 'Social' },
								{ label: 'Adventure', value: 'Adventure' },
								{ label: 'Music', value: 'Music' },
							]}
						/>
						<br />
						<MultiDataList
							componentId="CitySensor4"
							title="MultiDataList"
							dataField="group.group_topics.topic_name_raw.raw"
							data={[
								{ label: 'Open Source', value: 'Open Source' },
								{ label: 'Social', value: 'Social' },
								{ label: 'Adventure', value: 'Adventure' },
								{ label: 'Music', value: 'Music' },
							]}
						/>
						<br />
						<TagCloud
							componentId="CitySensor2"
							title="TagCloud"
							dataField="group.group_city.raw"
							size={50}
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
								and: ["CitySensor", "CitySensor2", "CitySensor3", "CitySensor4"]
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
