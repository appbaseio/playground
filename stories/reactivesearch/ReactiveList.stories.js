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
				url="https://xe6N9nDRV:51ea7a8a-6354-4b5f-83e1-12dce3b7ec47@arc-cluster-appbase-demo-ps1pgt.searchbase.io"
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
