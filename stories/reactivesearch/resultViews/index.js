import React from 'react';

export const booksList = (data) => ({
	title: <div className="book-title">{data.original_title}</div>,
	desc: (
		<div className="flex column justify-space-between">
			<div>
				<div>by <span className="authors-list">{data.authors}</span></div>
				<div className="ratings-list flex align-center">
					<span className="stars">
					{
						Array(data.average_rating_rounded).fill('x')
							.map((item, index) => <i className="fas fa-star" key={index} />)
					}
					</span>
					<span className="avg-rating">({data.average_rating} avg)</span>
				</div>
			</div>
			<span className="pub-year">Pub {data.original_publication_year}</span>
		</div>
	),
	image: data.image
});
