import React, { Component } from "react";
import {
	ReactiveBase,
	SingleList,
	ResultList,
	SelectedFilters
} from "@appbaseio/reactivesearch";
import ResponsiveStory from './ResponsiveStory';

export default class SingleListRSDefault extends Component {
	constructor(props) {
		super(props);
		this.onData = this.onData.bind(this);
	}

	componentDidMount() {
		ResponsiveStory();
	}

	onData(res) {
		return {
			image: res.member.photo,
			title: res.member.member_name,
			desc: (
				<div>
					<p>is going to {res.event.event_name} at {res.venue_name_ngrams}</p>
					<p>{res.group_city_ngram}</p>
				</div>
			),
			url: res.event.event_url
		};
	}

	render() {
		return (
			<ReactiveBase
				app="reactivemap-demo"
				credentials="qMzzgez0t:a9138c3f-f246-4cd8-ba3d-0b99f9550c05"
				type="meetupdata1"
			>
				<div className="row">
					<div className="col s6 col-xs-6">
						<SelectedFilters componentId="CitySensor" />
						<SingleList
							componentId="CitySensor"
							dataField="group.group_city.raw"
							title="SingleList"
							size={100}
							{...this.props}
						/>
					</div>

					<div className="col s6 col-xs-6">
						<ResultList
							componentId="SearchResult"
							dataField="name"
							from={0}
							size={40}
							onData={this.onData}
							showPagination={true}
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
