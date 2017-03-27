import React, { Component } from "react";
import { ReactiveBase, PoweredBy } from "@appbaseio/reactivesearch";

export default class PoweredByDefault extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ReactiveBase
				app="car-store"
				credentials="cf7QByt5e:d2d60548-82a9-43cc-8b40-93cbbe75c34c"
			>
				<div className="row">
					<div className="col s6 col-xs-6 card thumbnail" style={{"height": "100px"}}>
						<PoweredBy />
					</div>
				</div>
			</ReactiveBase>
		);
	}
}
