import React, { Component } from "react";
import { ReactiveBase, MultiList, ReactiveList } from "@appbaseio/reactivesearch";

export default class ReactiveListDefault extends Component {
	constructor(props) {
		super(props);
		this.onData = this.onData.bind(this);
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
						<MultiList
							componentId="CitySensor"
							dataField="group.group_city.raw"
							title="MultiList"
							size={100}
						/>
					</div>

					<div className="col">
						<ReactiveList
							componentId="SearchResult"
							dataField="group.group_city.raw"
							from={0}
							size={20}
							onData={this.onData}
							pagination
							react={{
								and: ["CitySensor"]
							}}
							{...this.props}
						/>
					</div>
				</div>
			</ReactiveBase>
		);
	}
}
