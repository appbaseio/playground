import React, { Component } from "react";
import { ReactiveBase, TagCloud, SingleDataList, MultiDataList, ToggleButton, ResultList, SelectedFilters } from "@appbaseio/reactivesearch";

import { meetupList } from "./resultViews";

export default class TagCloudDefault extends Component {
	render() {
		return (
			<ReactiveBase
				app="meetup_demo"
				credentials="LPpISlEBe:2a8935f5-0f63-4084-bc3e-2b2b4d1a8e02"
				type="meetupdata1"
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
								and: ["CitySensor", "CitySensor2", "CitySensor3", "CitySensor4"]
							}}
						/>
					</div>
				</div>
			</ReactiveBase>
		);
	}
}
