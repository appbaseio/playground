import React, { Component } from "react";
import { ReactiveBase, TreeList, SelectedFilters, ReactiveList } from "@appbaseio/reactivesearch";

import { booksList as BooksList } from "./resultViews";
const recLookup = (obj, path) => {
	try {
		const parts = path.split('.');
		if (parts.length === 1) {
			return obj[parts[0]];
		}
		return recLookup(obj[parts[0]], parts.slice(1).join('.'));
	} catch (e) {
		return false;
	}
};
export default class TreeListCustomRenderer extends Component {
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

		renderListItems(listItem, parentPath, selectedValues, handleListItemClick) {
		if (!(listItem instanceof Object) || Object.keys(listItem).length === 0) {
			return null;
		}
		const listItemLabel = listItem.key;
		const listItemCount = listItem.count;
		const isLeafNode = !(Array.isArray(listItem.list) && listItem.list.length > 0);

		let newParentPath = listItemLabel;
		if (parentPath) {
			newParentPath = `${parentPath}.${listItemLabel}`;
		}
		const isSelected = recLookup(selectedValues, newParentPath);

		return (
			<li key={newParentPath}>
				{/* eslint-disable jsx-a11y/click-events-have-key-events */}
				{/* eslint-disable jsx-a11y/no-static-element-interactions */}
				<span
					style={isSelected ? { background: 'green', margin: '5px 0' } : {}}
					onClick={() => handleListItemClick(listItemLabel, parentPath)}
				>
					<React.Fragment>
						<span>{listItemLabel}</span>

						<span>{listItemCount}</span>
					</React.Fragment>
				</span>
				{isLeafNode === false && (
					<div className="--list-child">
						{/* eslint-disable-next-line no-use-before-define */}
						{this.renderLists(
							listItem.list,
							newParentPath,
							isSelected,
							selectedValues,
							handleListItemClick,
						)}
					</div>
				)}
			</li>
		);
	}

	renderLists(transformedData, parentPath, isExpanded, selectedValues, handleClick) {
		return (
			<ul style={isExpanded ? { fontWeight: 600 } : {}}>
				{transformedData.map(listItem =>
					this.renderListItems(listItem, parentPath, selectedValues, handleClick),
				)}
			</ul>
		);
	}

	render() {
		return (
			<ReactiveBase
				app="best-buy-dataset"
				url="https://a03a1cb71321:75b6603d-9456-4a5a-af6b-a487b309eb61@appbase-demo-ansible-abxiydt-arc.searchbase.io"
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
							showSwitcherIcon={true}
							showIcon={true}
							showLeafIcon={true}
							render={(propData) => {
								const {
									/* eslint-disable no-unused-vars */
									data,
									rawData,
									error,
									handleClick,
									value,
									loading,
								} = propData;
								return this.renderLists(data, '', true, value, handleClick);
							}}
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
