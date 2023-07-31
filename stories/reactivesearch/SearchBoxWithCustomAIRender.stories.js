import React, { Component } from "react";
import { ReactiveBase, SearchBox, SelectedFilters, ReactiveList } from "@appbaseio/reactivesearch";

import { booksList as BooksList } from "./resultViews";

export default class SearchBoxWithCustomAIRender extends Component {
	render() {
		return (
			<ReactiveBase
				app="good-books-ds"
				url="https://a03a1cb71321:75b6603d-9456-4a5a-af6b-a487b309eb61@appbase-demo-ansible-abxiydt-arc.searchbase.io"
				enableAppbase
				appbaseConfig={{
					recordAnalytics: !!this.props.enableRecentSuggestions,
					enableQueryRules: false
				}}
			>
				<div className="row">
					<div className="col">
						<SearchBox
							dataField={[{ field: "original_title", weight: 3 }, { field: "original_title.search", weight: 1 }]}
							componentId="BookSensor"
							{...this.props}
							renderAIAnswer={
								({
									question,
									answer,
									documentIds,
									loading,
									sources,
								}) => {
									// custom render AI screen
									return (
										<div style={{ width: '100%', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
											<div style={{ display: 'flex', flexDirection: 'column', padding: '16px' }}>
												{/* User message */}
												<div style={{ alignSelf: 'flex-end', marginBottom: '8px' }}>
													{question && <div style={{
														display: 'inline-block',
														backgroundColor: '#007bff',
														color: 'white',
														borderRadius: '16px',
														padding: '8px 16px',
														whiteSpace: 'pre-wrap',
														wordWrap: 'break-word'
													}}>
														{question}
													</div>}
												</div>

												{/* AI message */}
												{loading ? (
													<div>Loading...</div>
												) : (
													<div style={{ alignSelf: 'flex-start', marginBottom: '8px', maxWidth: '70%' }}>
														<div style={{
															display: 'inline-block',
															maxWidth: '100%',
															backgroundColor: '#f1f1f1',
															color: 'black',
															borderRadius: '16px',
															padding: '8px 16px',
															whiteSpace: 'pre-wrap',
															wordWrap: 'break-word'
														}}>
															{answer}
														</div>
													</div>
												)}

												{/* Sources */}
												{!loading && sources && sources.length ? (
													<div style={{ alignSelf: 'flex-start', fontSize: '12px', color: 'gray' }}>
														Sources:
														{sources.map((source, index) => (
															<div key={source['original_title']}>
																{index + 1}. {source['original_title']}
															</div>
														))}
													</div>
												) : null}
											</div>
										</div>
									);
								}
							}
						/>
						<SelectedFilters componentId="BookSensor" />
					</div>
					<div className="col">
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
