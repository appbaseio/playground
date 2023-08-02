import React, { Component } from "react";
import { ReactiveBase, SearchBox, SelectedFilters, ReactiveList } from "@appbaseio/reactivesearch";
import { Remarkable } from 'remarkable';
import { booksList as BooksList } from "./resultViews";


const md = new Remarkable();

md.set({
	html: true,
	breaks: true,
	xhtmlOut: true,
	linkify: true,
	linkTarget: '_blank',
});

const globalStyles = `
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  pre {
    margin: 10px auto;
  }

  table {
    margin: 10px auto;
    border-collapse: collapse;
    border-spacing: 0;
  }

  tr {
    border-bottom: 1px solid #ccc;
  }

  th,
  td {
    text-align: left;
    padding: 4px;
    border: 1px solid;
    border-collapse: collapse;
  }

  pre,
  code {
    padding: 0.6em 0.4em;
    /* Insert background color */
  }

  pre {
    /* Insert text color */
    white-space: pre-wrap;
  }

  code {
    line-height: normal;
    /* Insert text color */
    border-radius: 3px;
    font-size: 85%;
    padding: 0.2em 0.4em;
    margin-top: 5px;
    display: inline-block;
    overflow: auto;
    width: fit-content;
    max-width: 100%;
  }

  /* Replace 'props.isSender', 'props.themePreset', and 'props.theme.colors' with actual values */

  code[class*='language-'],
  pre[class*='language-'] {
    /* Insert text color */
    text-shadow: none;
  }

  ul,
  ol {
    padding-left: 1rem;
  }

  p {
    margin: 8px auto;
  }
`;

const GlobalStyles = () => (
	<style dangerouslySetInnerHTML={{ __html: globalStyles }} />
);

export default class SearchBoxWithCustomAIRender extends Component {
	render() {
		return (<><GlobalStyles />
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
													<div style={{ alignSelf: 'flex-start', marginBottom: '8px', maxWidth: '90%' }}>
														<div
															style={{
																display: 'inline-block',
																maxWidth: '100%',
																backgroundColor: '#f1f1f1',
																color: 'black',
																borderRadius: '16px',
																padding: '8px 16px',
																whiteSpace: 'pre-wrap',
																wordWrap: 'anywhere'
															}}
															dangerouslySetInnerHTML={{
																__html: md.render(answer),
															}}
														/>
													</div>
												)}

												{/* Sources */}
												{!loading && sources && sources.length ? (
													<div style={{ alignSelf: 'flex-start', fontSize: '12px', color: 'gray' }}>
														Sources:
														{sources.filter(_ => source['original_title']).map((source, index) => (
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
			</ReactiveBase></>
		);
	}
}
