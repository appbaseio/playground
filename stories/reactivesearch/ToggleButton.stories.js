import React, { Component } from "react";
import { ReactiveBase, ToggleButton, ReactiveList, SelectedFilters } from "@appbaseio/reactivesearch";

import { meetupList as MeetupList } from "./resultViews";

export default class ToggleButtonDefault extends Component {
	render() {
		return (
			<ReactiveBase
				app="meetup_app"
				credentials="lW70IgSjr:87c5ae16-73fb-4559-a29e-0a02760d2181"
			>
				<div className="row">
					<div className="col">
						<ToggleButton
							componentId="CitySensor"
							dataField="group.group_topics.topic_name_raw.raw"
							data={[
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
