import React, { Component } from "react";
import { ReactiveBase, SingleDataList, ResultList, SelectedFilters } from "@appbaseio/reactivesearch";

import { meetupList } from "./resultViews";

export default class SingleDataListDefault extends Component {
	render() {
		return (
			<ReactiveBase
				app="meetup_demo"
				credentials="LPpISlEBe:2a8935f5-0f63-4084-bc3e-2b2b4d1a8e02"
				type="meetupdata1"
			>
				<div className="row">
					<div className="col">
						<SingleDataList
							componentId="CitySensor"
							dataField="group.group_topics.topic_name_raw.raw"
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
