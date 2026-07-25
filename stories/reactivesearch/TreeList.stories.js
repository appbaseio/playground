import React, { Component } from "react";
import { ReactiveBase, TreeList, SelectedFilters, ReactiveList } from "@appbaseio/reactivesearch";

import { booksList as BooksList } from "./resultViews";

export default class TreeListDefault extends Component {
	booksReactiveList(data) {
		return (
			<div className="flex book-content" key={data._id}>
				<img src={data.image} alt="Book Cover" className="book-image" />
				<div className="flex column justify-center" style={{ marginLeft: 20 }}>
					<div className="book-header">{data.name}</div>
					<div className="flex column justify-space-between">
						<div>
							<div>
								{data.class} > {data.subclass}
							</div>
							<div className="ratings-list flex align-center">
								Sale price: <span className="">{data.salePrice}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	render() {
		return (
			<ReactiveBase
				app="best-buy-dataset"
				url="https://reactivesearch-api-9-4-0.onrender.com"
			credentials="d03e6f5f33d5:49124674-554e-4343-9ab2-006b2932f5c0"
				enableAppbase
			>
				<div className="row">
					<div className="col">
						<SelectedFilters componentId="BookSensor" />
						<TreeList
							componentId="BookSensor"
							dataField={[
								'class.keyword',
								'subclass.keyword',
								'categoryPath.name.keyword',
							]}
							showSwitcherIcon={false}
							showIcon={false}
							showLeafIcon={false}
							{...this.props}
						/>
					</div>
					<div className="col">
						<ReactiveList
							componentId="SearchResult"
							dataField="original_title"
							className="result-list-container"
							from={0}
							size={5}
							renderItem={this.booksReactiveList}
							react={{
								and: ['BookSensor'],
							}}
							includeFields={[
								'class',
								'subclass',
								'name',
								'image',
								'salePrice',
								'categoryPath',
							]}
						/>
					</div>
				</div>
			</ReactiveBase>
		);
	}

}
