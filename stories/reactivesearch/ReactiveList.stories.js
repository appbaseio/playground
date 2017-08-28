import React, { Component } from "react";
import { ReactiveBase, MultiList, ReactiveList } from "@appbaseio/reactivesearch";
import ResponsiveStory from './ResponsiveStory';
import { Img } from "./Img";

require("./list.css");

export default class ReactiveListDefault extends Component {
	constructor(props) {
		super(props);
		this.cityQuery = this.cityQuery.bind(this);
		this.DEFAULT_IMAGE = "http://www.avidog.com/wp-content/uploads/2015/01/BellaHead082712_11-50x65.jpg";
	}

	componentDidMount() {
		ResponsiveStory();
	}

	onData(markerData) {
		const marker = markerData._source;
		return (
			<a
				className={`full_row single-record single_record_for_clone ${markerData.stream ? "animate" : ""}`}
				href={marker.event ? marker.event.event_url : ""}
				target="_blank"
				rel="noreferrer noopener"
				key={markerData._id}
			>
				<div className="img-container">
					<Img key={markerData._id} src={marker.member ? marker.member.photo : this.DEFAULT_IMAGE} />
				</div>
				<div className="text-container full_row">
					<div className="text-head text-overflow full_row">
						<span className="text-head-info text-overflow">
							{marker.member ? marker.member.member_name : ""} is going to {marker.event ? marker.event.event_name : ""}
						</span>
						<span className="text-head-city">{marker.group ? marker.group.group_city : ""}</span>
					</div>
					<div className="text-description text-overflow full_row">
						<ul className="highlight_tags">
							{
								marker.group.group_topics.map(tag => (<li key={tag.topic_name}>{tag.topic_name}</li>))
							}
						</ul>
					</div>
				</div>
			</a>
		);
	}

	cityQuery(value) {
		if (value) {
			const field = "group.group_city.group_city_simple";
			const query = JSON.parse(`{"${field}":${JSON.stringify(value)}}`);
			return { terms: query };
		}
		return null;
	}

	render() {
		const placeholder = (<h6>Select a city to see the results.</h6>);
		return (
			<ReactiveBase
				app="meetup2"
				credentials="qz4ZD8xq1:a0edfc7f-5611-46f6-8fe1-d4db234631f3"
				type="meetup"
			>
				<div className="row reverse-labels">
					<div className="col s6 col-xs-6">
						<ReactiveList
							componentId="SearchResult"
							appbaseField="group.group_topics.topic_name.topic_name_simple"
							title="ReactiveList"
							sortBy="asc"
							from={0}
							size={20}
							onData={this.onData}
							placeholder={placeholder}
							react={{
								and: "CitySensor"
							}}
							{...this.props}
						/>
					</div>

					<div className="col s6 col-xs-6">
						<MultiList
							componentId="CitySensor"
							appbaseField="group.group_city.group_city_simple"
							showCount={true}
							size={10}
							selectAllLabel="All Cities"
							title="Input Filter"
							customQuery={this.cityQuery}
							searchPlaceholder="Search City"
							initialLoader={<p>Loading cities...</p>}
						/>
					</div>
				</div>
			</ReactiveBase>
		);
	}
}
