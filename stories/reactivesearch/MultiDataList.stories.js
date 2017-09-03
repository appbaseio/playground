import React, { Component } from "react";
import {
	ReactiveBase,
	MultiDataList,
	ResultList,
	SelectedFilters
} from "@appbaseio/reactivesearch";
import ResponsiveStory from './ResponsiveStory';

export default class MultiDataListDefault extends Component {
	constructor(props) {
		super(props);

		this.data = [{
			label: "Social",
			value: "Social"
		}, {
			label: "Travel",
			value: "Travel"
		}, {
			label: "Outdoors",
			value: "Outdoors"
		}];

		this.DEFAULT_IMAGE = "http://www.avidog.com/wp-content/uploads/2015/01/BellaHead082712_11-50x65.jpg";
	}

	componentDidMount() {
		ResponsiveStory();
	}

	onData(res) {
		return ({
			image: res.member ? res.member.photo : this.DEFAULT_IMAGE,
			title: res.member.member_name,
			desc: (
				<div>
					<p>is going to {res.event.event_name} at {res.venue_name_ngrams}</p>
					<p>{res.group_city_ngram}</p>
				</div>
			),
			url: res.event.event_url
		});
	}

	render() {
		return (
			<ReactiveBase
				app="meetup_demo"
				credentials="LPpISlEBe:2a8935f5-0f63-4084-bc3e-2b2b4d1a8e02"
			>
				<div className="row">
					<div className="col s6 col-xs-6">
						<SelectedFilters componentId="SelectedFilters" />
						<MultiDataList
							dataField={this.props.mapping.topic}
							componentId="MeetupTops"
							title="MultiDataList"
							data={this.data}
							{...this.props}
						/>
					</div>

					<div className="col s6 col-xs-6">
						<ResultList
							componentId="SearchResult"
							dataField="group.group_topics.topic_name_raw"
							title="Results"
							sortBy="asc"
							from={0}
							size={20}
							onData={this.onData}
							showPagination
							react={{
								and: "MeetupTops"
							}}
						/>
					</div>
				</div>
			</ReactiveBase>
		);
	}
}

MultiDataListDefault.defaultProps = {
	mapping: {
		topic: "group.group_topics.topic_name_raw.raw"
	}
};
