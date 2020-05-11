import React, { Component } from "react";
import { ReactiveBase, NumberBox, ReactiveList } from "@appbaseio/reactivesearch";

import { booksList as BooksList } from "./resultViews";

export default class NumberBoxDefault extends Component {
	render() {
		return (
			<ReactiveBase
				app="good-books-ds"
				url="https://1e47b838a035:767b5a1a-03cb-4c5f-a536-4f399c24134b@arc-cluster-appbase-tryout-k8dsnj.searchbase.io"
				enableAppbase
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
