import React, { Component } from "react";
import { ReactiveBase, NumberBox, ResultList } from "@appbaseio/reactivesearch";

import { booksList } from "./resultViews";

export default class NumberBoxDefault extends Component {
	render() {
		return (
			<ReactiveBase
				app="good-books-ds"
				credentials="nY6NNTZZ6:27b76b9f-18ea-456c-bc5e-3a5263ebc63d"
			>
				<div className="row reverse-labels">
					<div className="col">
						<NumberBox
							componentId="BookSensor"
							dataField="average_rating_rounded"
							{...this.props}
						/>
					</div>
					<div className="col" style={{backgroundColor: "#fafafa"}}>
						<ResultList
							componentId="SearchResult"
							dataField="original_title"
							from={0}
							size={3}
							renderItem={booksList}
							className="result-list-container"
							pagination
							react={{
								and: "BookSensor"
							}}
						/>
					</div>
				</div>
			</ReactiveBase>
		);
	}
}
