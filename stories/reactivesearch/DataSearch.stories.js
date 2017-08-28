import React, { Component } from "react";
import {
	ReactiveBase,
	DataSearch,
	ResultCard,
	SelectedFilters,
	AppbaseSensorHelper as helper
} from "@appbaseio/reactivesearch";

export default class DataSearchRSDefault extends Component {
	constructor(props) {
		super(props);
		this.onData = this.onData.bind(this);
	}

	componentDidMount() {
		helper.ResponsiveStory();
	}

	onData(res) {
		const result = {
			image: "https://www.enterprise.com/content/dam/global-vehicle-images/cars/FORD_FOCU_2012-1.png",
			title: <span dangerouslySetInnerHTML={{ __html: res.name}} />,
			rating: res.rating,
			desc: <span dangerouslySetInnerHTML={{ __html: res.brand }} />,
			url: "#"
		};
		return result;
	}

	render() {
		return (
			<ReactiveBase
				app="car-store"
				credentials="cf7QByt5e:d2d60548-82a9-43cc-8b40-93cbbe75c34c"
			>
				<div className="row">
					<div className="col s6 col-xs-6">
						<SelectedFilters componentId="CarSensor" />
						<DataSearch
							appbaseField={"name", "brand"}
							componentId="CarSensor"
							placeholder="Search Cars"
							{...this.props}
						/>
					</div>

					<div className="col s6 col-xs-6">
						<ResultCard
							componentId="SearchResult"
							appbaseField="name"
							title="Results"
							from={0}
							size={20}
							onData={this.onData}
							react={{
								and: "CarSensor"
							}}
						/>
					</div>
				</div>
			</ReactiveBase>
		);
	}
}
