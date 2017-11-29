import React, { Component } from "react";
import {
	ReactiveBase,
	SingleDropdownList,
	ReactiveList,
	SelectedFilters
} from "@appbaseio/reactivesearch";
import ResponsiveStory from "./ResponsiveStory";

export default class SingleDropdownListRSDefault extends Component {
	constructor(props) {
		super(props);
		this.onData = this.onData.bind(this);
	}

	componentDidMount() {
		ResponsiveStory();
	}

	onData(res) {
		const data = res._source;
		return (<div key={res._id}>
			<h2>{data.member.member_name}</h2>
			<p>is going to {data.event.event_name} at {data.venue_name_ngrams}</p>
			<p>{data.group_city_ngram}</p>
		</div>);
	}

	render() {
		return (
			<ReactiveBase
				app="reactivemap-demo"
				credentials="qMzzgez0t:a9138c3f-f246-4cd8-ba3d-0b99f9550c05"
				type="meetupdata1"
			>
				<div className="row">
					<div className="col">
						<SingleDropdownList
							componentId="CitySensor"
							dataField="group.group_city.raw"
							title="SingleDropdownList"
							size={100}
							{...this.props}
						/>
					</div>

					<div className="col">
						<SelectedFilters />
						<ReactiveList
							componentId="SearchResult"
							dataField="name"
							title="ReactiveList"
							from={0}
							size={20}
							onData={this.onData}
							pagination
							react={{
								and: "CitySensor"
							}}
						/>
					</div>
				</div>
			</ReactiveBase>
		);
	}
}
