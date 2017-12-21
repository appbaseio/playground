import React, { Component } from "react";
import {
	ReactiveBase,
	DataSearch,
	ReactiveList,
	SelectedFilters
} from "@appbaseio/reactivesearch";
import ResponsiveStory from "./ResponsiveStory";

export default class TextFieldRSDefault extends Component {
	constructor(props) {
		super(props);
		this.onData = this.onData.bind(this);
	}

	componentDidMount() {
		ResponsiveStory();
	}

	onData(data) {
		return (<div key={data._id}>
			<h2 dangerouslySetInnerHTML={{__html: data.name}} />
			<h4 dangerouslySetInnerHTML={{__html: data.brand}} />
			<p>{data.price} - {data.rating} stars rated</p>
		</div>);
	}

	render() {
		return (
			<ReactiveBase
				app="car-store"
				credentials="cf7QByt5e:d2d60548-82a9-43cc-8b40-93cbbe75c34c"
			>
				<div className="row">
					<div className="col">
						<DataSearch
							dataField={["name", "brand"]}
							componentId="CarSensor"
							placeholder="Search Cars"
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
								and: "CarSensor"
							}}
						/>
					</div>
				</div>
			</ReactiveBase>
		);
	}
}
