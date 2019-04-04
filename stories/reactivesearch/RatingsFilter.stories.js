import React, { Component } from "react";
import { ReactiveBase, RatingsFilter, ResultCard, SelectedFilters } from "@appbaseio/reactivesearch";
import ResponsiveStory from "./ResponsiveStory";

export default class RatingsFilterDefault extends Component {
	constructor(props) {
		super(props);
		this.onData = this.onData.bind(this);
	}

	componentDidMount() {
		ResponsiveStory();
	}

	onData(res) {
		const result = {
			image: res.image,
			title: res.model,
			rating: res.rating,
			description: res.brand,
		};
		return result;
	}

	render() {
		return (
			<ReactiveBase
				app="carstore-dataset"
				credentials="4HWI27QmA:58c731f7-79ab-4f55-a590-7e15c7e36721"
			>
				<div className="row">
					<div className="col">
						<SelectedFilters />
						<RatingsFilter
							componentId="RatingsSensor"
							dataField="rating"
							title="RatingsFilter"
							data={[
								{ start: 4, end: 5, label: "4 stars and up" },
								{ start: 3, end: 5, label: "3 stars and up" },
								{ start: 2, end: 5, label: "2 stars and up" },
								{ start: 1, end: 5, label: "> 1 stars" }
							]}
							{...this.props}
						/>
					</div>

					<div className="col">
						<ResultCard
							componentId="SearchResult"
							dataField="model"
							title="Results"
							from={0}
							size={20}
							onData={this.onData}
							react={{
								and: "RatingsSensor"
							}}
						/>
					</div>
				</div>
			</ReactiveBase>
		);
	}
}
