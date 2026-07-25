import React, { Component } from "react";
import { ReactiveBase, ToggleButton, ReactiveList, SelectedFilters } from "@appbaseio/reactivesearch";

import { booksReactiveList } from "./resultViews";

export default class ToggleButtonDefault extends Component {
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
						<ToggleButton
							componentId="LanguageSensor"
							dataField="language_code.keyword"
							data={[
								{ label: 'English', value: 'eng' },
								{ label: 'French', value: 'fre' },
								{ label: 'Spanish', value: 'spa' },
							]}
							{...this.props}
						/>
					</div>
					<div className="col">
						<SelectedFilters componentId="LanguageSensor" />
						<ReactiveList
							componentId="SearchResult"
							dataField="original_title.keyword"
							title="Results"
							sortBy="asc"
							className="result-list-container"
							from={0}
							size={5}
							pagination
							react={{
								and: ["LanguageSensor"]
							}}
							renderItem={booksReactiveList}
							{...this.props}
						/>
					</div>
				</div>
			</ReactiveBase>
		);
	}
}
