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
						<SelectedFilters />
						<ReactiveComponent
							componentId="AuthorSensor"
							defaultQuery={() => ({
								aggs: {
									'authors.keyword': {
										terms: {
											field: 'authors.keyword',
											order: {
												_count: 'desc',
											},
											size: 1,
										},
									},
								},
							})}
							distinctField="authors.keyword"
							distinctFieldConfig={{
								inner_hits: {
									name: 'most_recent',
									size: 5,
									sort: [{ original_publication_year: 'desc' }],
								},
								max_concurrent_group_searches: 4,
							}}
							size={10}
							{...this.props}
						>
							{({ data, setQuery }) => <CustomComponent data={data} setQuery={setQuery} />}
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
								and: 'AuthorSensor',
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
					'authors.keyword': value,
				},
			},
			value,
		});
	}

	render() {
		if (this.props.data) {
			return this.props.data.map(item => (
				<div key={item._id} onClick={() => this.setValue(item.authors)}>{item.authors}</div>
			));
		}
		return null;
	}
}
