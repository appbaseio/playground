import React, { Component } from "react";
import { ReactiveBase, MultiDropdownList, ReactiveList } from "@appbaseio/reactivesearch";

import { booksReactiveList } from "./resultViews";

export default class ReactiveListDefault extends Component {
	render() {
		const {scrollTargetStory, ...otherProps} = this.props;
		const scrollStyle = scrollTargetStory ? ({
			overflow : 'scroll',
			height: '80vh'
		}) : {};
		return (
			<ReactiveBase
				app="good-books-ds"
				url="https://reactivesearch-api-9-4-0.onrender.com"
			credentials="d03e6f5f33d5:49124674-554e-4343-9ab2-006b2932f5c0"
				enableAppbase
			>
				<div className="row">
					<div className="col">
						<MultiDropdownList
							componentId="BookSensor"
							dataField="original_series.keyword"
							title="MultiList"
							size={100}
						/>
					</div>

					<div className="col" style={scrollStyle} id="results">
						<ReactiveList
							componentId="SearchResult"
							dataField="original_title.keyword"
							className="result-list-container"
							from={0}
							size={5}
							renderItem={booksReactiveList}
							react={{
								and: ["BookSensor"]
							}}
							{...otherProps}
						/>
					</div>
				</div>
			</ReactiveBase>
		);
	}
}
