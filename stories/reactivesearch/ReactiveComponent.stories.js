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
	render() {
		return (
			<ReactiveBase
				app="carstore-dataset"
				credentials="4HWI27QmA:58c731f7-79ab-4f55-a590-7e15c7e36721"
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
						>
							<CustomComponent />
						</ReactiveComponent>
					</div>

					<div className="col">
						<ReactiveList
							componentId="SearchResult"
							dataField="model"
							title="ReactiveList"
							from={0}
							size={20}
							onData={this.onData}
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

	onData(data) {
		return (
			<div key={data._id}>
				<h2>{data.model}</h2>
				<p>{data.price} - {data.rating} stars rated</p>
			</div>
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
