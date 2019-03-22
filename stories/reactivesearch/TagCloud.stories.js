import React, { Component } from "react";
import { ReactiveBase, TagCloud, ResultList, SelectedFilters } from "@appbaseio/reactivesearch";

import { meetupList } from "./resultViews";

export default class TagCloudDefault extends Component {
	render() {
		return (
			<ReactiveBase
				app="meetup_app"
				credentials="lW70IgSjr:87c5ae16-73fb-4559-a29e-0a02760d2181"
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
						<ResultList
							componentId="SearchResult"
							dataField="group.group_topics.topic_name_raw"
							title="Results"
							sortBy="asc"
							className="result-list-container"
							from={0}
							size={5}
							onData={meetupList}
							innerClass={{
								image: 'meetup-list-image'
							}}
							pagination
							react={{
								and: ["CitySensor"]
							}}
						/>
					</div>
				</div>
			</ReactiveBase>
		);
	}
}
