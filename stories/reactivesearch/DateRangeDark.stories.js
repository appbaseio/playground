import React, { Component } from "react";
import moment from "moment";
import {
	ReactiveBase,
	DateRange,
	ResultCard,
	SelectedFilters,
	ReactiveList
} from "@appbaseio/reactivesearch";
import ResponsiveStory from "./ResponsiveStory";

export default class DateRangeDefault extends Component {
	componentDidMount() {
		ResponsiveStory();
	}

	dateQuery(value) {
		let query = null;
		if (value) {
			query = [
				{
					range: {
						date_from: {
							gte: moment(value.start).format('YYYYMMDD'),
						},
					},
				},
				{
					range: {
						date_to: {
							lte: moment(value.end).format('YYYYMMDD'),
						},
					},
				},
			];
		}
		return query ? { query: { bool: { must: query } } } : null;
	}

	render() {
		return (
			<ReactiveBase
				app="clone-airbeds"
				url="https://a03a1cb71321:75b6603d-9456-4a5a-af6b-a487b309eb61@appbase-demo-ansible-abxiydt-arc.searchbase.io"
				enableAppbase
				type="listing"
				{...this.props}
			>
				<div className={`row ${this.props.themePreset}`}>
					<div className="col">
						<DateRange
							componentId="DateSensor"
							dataField="date_from"
							customQuery={this.dateQuery}
							initialMonth={this.props.defaultSelected ? null : new Date("2017-05-05")}
						/>
					</div>

					<div className="col">
						<SelectedFilters componentId="DateSensor" />
						<ReactiveList
							componentId="SearchResult"
							dataField="name"
							from={0}
							size={40}
							showPagination={true}
							react={{
								and: ["DateSensor"]
							}}
							{...this.props}
						>
							{
								({ data }) => (
									<ReactiveList.ResultCardsWrapper>
									{
										data.map(item => (
											<ResultCard href={item.listing_url} key={item._id}>
												<ResultCard.Image src={item.image}/>
												<ResultCard.Title dangerouslySetInnerHTML={{ __html: item.original_title }} />
												<ResultCard.Description>
													<div>
														<div>${item.price}</div>
														<span style={{ backgroundImage: `url(${item.host_image})` }} />
														<p>
															{item.room_type} · {item.accommodates} guests
														</p>
													</div>
												</ResultCard.Description>
											</ResultCard>
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
