import React, { Component } from "react";
import { ReactiveBase, SelectedFilters, MultiList, ReactiveList } from "@appbaseio/reactivesearch";

import { booksReactiveList } from "./resultViews";

export default class MultiListDefault extends Component {
	render() {
		return (
			<ReactiveBase
				app="good-books-ds"
				url="https://reactivesearch-api-9-4-0.onrender.com"
			credentials="d03e6f5f33d5:49124674-554e-4343-9ab2-006b2932f5c0"
				enableAppbase
			>
				<div className="row">
					<div className="col">
						<MultiList
							componentId="BookSensor"
							dataField="original_series.keyword"
							size={100}
							react={{
								and: 'BookSensorSEARCH',
							}}
							{...this.props}
						/>
					</div>

					<div className="col">
						<SelectedFilters />
						<ReactiveList
							componentId="SearchResult"
							dataField="original_title.keyword"
							className="result-list-container"
							from={0}
							size={5}
							renderItem={booksReactiveList}
							react={{
								and: ["BookSensor", "BookSensorSEARCH"]
							}}
						/>
					</div>
				</div>
			</ReactiveBase>
		);
	}
}
