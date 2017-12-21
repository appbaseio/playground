import React, { Component } from "react";
import { ReactiveBase, MultiList, ReactiveList } from "@appbaseio/reactivesearch";

export default class ReactiveListDefault extends Component {
	constructor(props) {
		super(props);
		this.onData = this.onData.bind(this);
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
				type="cars"
			>
				<div className="row">
					<div className="col">
						<MultiList
							componentId="CarSensor"
							dataField="brand.raw"
							title="MultiList"
							size={100}
						/>
					</div>

					<div className="col">
						<ReactiveList
							componentId="SearchResult"
							dataField="name"
							from={0}
							size={20}
							onData={this.onData}
							pagination
							stream
							react={{
								and: ["CarSensor"]
							}}
							{...this.props}
						/>
					</div>
				</div>
			</ReactiveBase>
		);
	}
}
