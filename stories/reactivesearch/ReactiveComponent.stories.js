/* eslint react/prop-types: 0 */
import React, { Component } from 'react';

import {
	ReactiveBase,
	ReactiveComponent,
	ReactiveList,
	SelectedFilters,
} from '@appbaseio/reactivesearch';

export default class ReactiveComponentDefault extends Component {
	renderItem(data) {
		return (
			<div key={data._id}>
				<h2>{data.original_title}</h2>
				<p>{data.average_rating} stars rated</p>
			</div>
		);
	}
	triggerRef = React.createRef(null);
	render() {
		return (
			<ReactiveBase
				app="good-books-ds"
				url="https://reactivesearch-api-9-4-0.onrender.com"
				credentials="d03e6f5f33d5:49124674-554e-4343-9ab2-006b2932f5c0"
				enableAppbase
			>
				{this.test}
				<div className="row">
					<div className="col">
						<SelectedFilters onClear={(props) => {
							if (props === 'LanguageSensor' && this.triggerRef.current) {
								this.triggerRef.current({
									query: {
										"match_all": {}
									},
									value: null
								});
							}
							ref={testRef} // testRef.current would hold the ref of SelectedFitlers

						}} />
						<ReactiveComponent
							componentId="LanguageSensor"
							defaultQuery={() => ({
								aggs: {
									language_code: {
										terms: {
											field: 'language_code.keyword',
											order: {
												_count: 'desc',
											},
											size: 10,
										},
									},
								},
							})}
							{...this.props}
						>
							{({ aggregations, setQuery }) => {
								if (!this.triggerRef.current) {
									this.triggerRef.current = setQuery;
								}
								return <CustomComponent aggregations={aggregations} setQuery={setQuery} />
							}}
						</ReactiveComponent>
					</div>

					<div className="col">
						<ReactiveList
							componentId="SearchResult"
							dataField="original_title.keyword"
							title="ReactiveList"
							from={0}
							size={20}
							renderItem={this.renderItem}
							pagination
							react={{
								and: 'LanguageSensor',
							}}
						/>
					</div>
				</div>
			</ReactiveBase>
		);
	}
}

class CustomComponent extends Component {
	setValue(value) {
		this.props.setQuery({
			query: {
				term: {
					'language_code.keyword': value,
				},
			},
			value,
		});
	}

	render() {
		if (this.props.aggregations) {
			return this.props.aggregations.language_code.buckets.map(item => (
				<div key={item.key} onClick={() => this.setValue(item.key)}>{item.key}</div>
			));
		}
		return null;
	}
}
