import React, { Component } from "react";
import { ReactiveBase, MultiDropdownList, ReactiveList } from "@appbaseio/reactivesearch";

import { booksReactiveList } from "./resultViews";

export default class ReactiveListDefault extends Component {
	render() {
		return (
			<ReactiveBase
				app="good-books-live"
				credentials="sHZWU7AYJ:d1e2922c-035c-429f-bfe4-62aa38b1c395"
			>
				<div className="row">
					<div className="col">
						<MultiDropdownList
							componentId="BookSensor"
							dataField="original_series.raw"
							title="MultiList"
							size={100}
						/>
					</div>

					<div className="col">
						<ReactiveList
							componentId="SearchResult"
							dataField="original_title.raw"
							className="result-list-container"
							from={0}
							size={5}
							onData={booksReactiveList}
							react={{
								and: ["BookSensor"]
							}}
							{...this.props}
						/>
					</div>
				</div>
			</ReactiveBase>
		);
	}
}
