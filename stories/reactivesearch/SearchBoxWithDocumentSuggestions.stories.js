import ReactDOM from 'react-dom/client';

import {
	ReactiveBase,
	ReactiveList,
	ResultCard,
	SelectedFilters,
	SearchBox
} from '@appbaseio/reactivesearch';

import './movie-store.css';

const Main = (props) => (
	<ReactiveBase
		app="movies-store-app"
		url="https://a03a1cb71321:75b6603d-9456-4a5a-af6b-a487b309eb61@appbase-demo-ansible-abxiydt-arc.searchbase.io"
		reactivesearchAPIConfig={{
			"recordAnalytics": true,
			"userId": "test",
			"enableQueryRules": true,
			"emptyQuery": true,
			"suggestionAnalytics": true
		}}
	>
		<div className="row">
			<div className="col">
			<SearchBox
				componentId="BookSensor"
				dataField="original_title"
				includeFields={[
					"original_title",
					"original_language",
					"overview"
				]}
				{...props}
			/>
			</div>

			<div className="col">
				<SelectedFilters />
				<ReactiveList
					componentId="result"
					size={5}
					dataField="original_title"
					react={{ and: 'BookSensor' }}
					pagination
					render={({ data }) => (
						<ReactiveList.ResultCardsWrapper>
							{data.map(item => (
								<ResultCard id={item._id} key={item._id}>
									<ResultCard.Image
										src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
									/>
									<ResultCard.Title>
										<div className="book-title">{item.original_title}</div>
									</ResultCard.Title>
									<ResultCard.Description>
										<span className="language">{item.original_language}</span>
										<span>-</span> <span>{item.release_year}</span>
									</ResultCard.Description>
								</ResultCard>
							))}
						</ReactiveList.ResultCardsWrapper>
					)}
				/>
			</div>
		</div>
	</ReactiveBase>
);

export default Main;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);