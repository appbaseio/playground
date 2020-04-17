import React, { Component } from "react";
import { ReactiveBase, NestedList, ReactiveList, SelectedFilters } from "@appbaseio/reactivesearch";
import ResponsiveStory from "./ResponsiveStory";

export default class NestedListDefault extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		ResponsiveStory();
	}

	onData(markerData) {
		const marker = markerData._source;
		return (
			<a
				className="full_row single-record single_record_for_clone"
				key={markerData._id}
			>
				<div className="text-container full_row" style={{ paddingLeft: "10px" }}>
					<div className="text-head text-overflow full_row">
						<span className="text-head-info text-overflow">
							{marker.name ? marker.name : ""} - {marker.brand ? marker.brand : ""}
						</span>
						<span className="text-head-city">{marker.brand ? marker.brand : ""}</span>
					</div>
					<div className="text-description text-overflow full_row">
						<ul className="highlight_tags">
							{marker.price ? `Priced at $${marker.price}` : "Free Test Drive"}
						</ul>
					</div>
				</div>
			</a>
		);
	}

	render() {
		return (
			<ReactiveBase
				app="carstore-dataset"
				url="https://xe6N9nDRV:51ea7a8a-6354-4b5f-83e1-12dce3b7ec47@arc-cluster-appbase-demo-ps1pgt.searchbase.io"
				enableAppbase
			>
				<div className="row">
					<div className="col">
						<SelectedFilters componentId="CategorySensor" />
						<NestedList
							componentId="CategorySensor"
							dataField={[this.props.mapping.brand, this.props.mapping.model]}
							title="NestedList"
							{...this.props}
						/>
					</div>

					<div className="col">
						<ReactiveList
							componentId="SearchResult"
							dataField={this.props.mapping.brand}
							title="Results"
							from={0}
							size={20}
							renderItem={this.onData}
							react={{
								and: "CategorySensor"
							}}
						/>
					</div>
				</div>
			</ReactiveBase>
		);
	}
}

NestedListDefault.defaultProps = {
	mapping: {
		brand: "brand.keyword",
		model: "model.keyword"
	}
};

NestedListDefault.propTypes = {
	mapping: React.PropTypes.shape({
		brand: React.PropTypes.string,
		model: React.PropTypes.string
	})
};
