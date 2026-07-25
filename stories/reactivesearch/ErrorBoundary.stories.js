import React, { Component } from "react";
import {
	ReactiveBase,
	DynamicRangeSlider,
	SelectedFilters,
	ReactiveList,
	ErrorBoundary
} from "@appbaseio/reactivesearch";

import { booksList as BooksList } from "./resultViews";

export default class ErrorBoundaryDefault extends Component {
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
					<ErrorBoundary renderError={this.props.renderError}>
						<DynamicRangeSlider
							dataField="books_cout" //Intentional error
							componentId="BookSensor"
						/>
					</ErrorBoundary>
					</div>

					<div className="col">
						<SelectedFilters />
						<ReactiveList
							componentId="SearchResult"
							dataField="original_title"
							from={0}
							size={3}
							className="result-list-container"
							pagination
							react={{
								and: "BookSensor"
							}}
						>
							{({ data }) => (
								<ReactiveList.ResultListWrapper>
									{
										data.map(item => <BooksList {...item} />)
									}
								</ReactiveList.ResultListWrapper>
							)}
						</ReactiveList>
					</div>
				</div>
			</ReactiveBase>
		);
	}
}
