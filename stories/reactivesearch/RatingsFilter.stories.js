import React, { Component } from "react";
import { ReactiveBase, RatingsFilter, ReactiveList, SelectedFilters, ResultCard } from "@appbaseio/reactivesearch";
import ResponsiveStory from "./ResponsiveStory";
import { booksCard as BooksCard } from './resultViews';

export default class RatingsFilterDefault extends Component {

	componentDidMount() {
		ResponsiveStory();
	}

	render() {
		return (
			<ReactiveBase
				app="good-books-ds"
				url="https://a03a1cb71321:75b6603d-9456-4a5a-af6b-a487b309eb61@appbase-demo-ansible-abxiydt-arc.searchbase.io.searchbase.io"
				enableAppbase
			>
				<div className="row">
					<div className="col">
						<SelectedFilters />
						<RatingsFilter
							componentId="RatingsSensor"
							dataField="average_rating_rounded"
							title="RatingsFilter"
							data={[
								{ start: 4, end: 5, label: '4 stars and up' },
								{ start: 3, end: 5, label: '3 stars and up' },
								{ start: 2, end: 5, label: '2 stars and up' },
								{ start: 1, end: 5, label: '> 1 stars' },
							]}
							{...this.props}
						/>
					</div>

					<div className="col">
						<ReactiveList
							componentId="SearchResult"
							dataField="name"
							title="Results"
							from={0}
							size={20}
							react={{
								and: 'RatingsSensor',
							}}
							{...this.props}
						>
							{
								({ data }) => (
									<ReactiveList.ResultCardsWrapper>
									{
										data.map(item => (
											<BooksCard {...item} />
										))
									}
									</ReactiveList.ResultCardsWrapper>
								)
							}
						</ReactiveList>
					</div>
				</div>
			</ReactiveBase>
		);
	}
}
