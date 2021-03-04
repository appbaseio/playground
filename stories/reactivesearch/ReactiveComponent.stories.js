/* eslint react/prop-types: 0 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

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
				<h2>{data.name}</h2>
				<p>{data.price} - {data.rating} stars rated</p>
			</div>
		);
	}
	render() {
		return (
			<ReactiveBase
				app="carstore-dataset"
				url="https://a03a1cb71321:75b6603d-9456-4a5a-af6b-a487b309eb61@appbase-demo-ansible-abxiydt-arc.searchbase.io.searchbase.io"
				enableAppbase
			>
				<div className="row">
					<div className="col">
						<SelectedFilters />
						<ReactiveComponent
							componentId="CarSensor"
							defaultQuery={() => ({
								aggs: {
									'brand.keyword': {
										terms: {
											field: 'brand.keyword',
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
							{({ aggregations, setQuery }) => <CustomComponent aggregations={aggregations} setQuery={setQuery} />}
						</ReactiveComponent>
					</div>

					<div className="col">
						<ReactiveList
							componentId="SearchResult"
							dataField="name"
							title="ReactiveList"
							from={0}
							size={20}
							renderItem={this.renderItem}
							pagination
							react={{
								and: 'CarSensor',
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
					"brand.keyword": value,
				},
			},
			value,
		});
	}

	render() {
		if (this.props.aggregations) {
			return this.props.aggregations['brand.keyword'].buckets.map(item => (
				<div key={item.key} onClick={() => this.setValue(item.key)}>{item.key}</div>
			));
		}
		return null;
	}
}
