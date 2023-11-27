import React from 'react';

export const renderBookItemWithDate = (suggestion) => {
	if (suggestion._suggestion_type === 'document') {
		return (
			<div>
				{suggestion._source.original_title}
				<span
					style={{
						color: 'crimson',
						backgroundColor: 'lightgray',
						padding: 5,
						borderRadius: 3,
					}}
				>
					{new Date(Number(suggestion._source._timestamp) * 1000).toDateString() || ''}
				</span>
			</div>
		);
	}
	return null;
};

export const renderBookItemWithLink = (suggestion) => {
	return (
		<a
			style={{
				width: '100%',
				height: '100%',
				display: 'block',
				textDecoration: 'none',
				color: 'inherit',
			}}
			href={`https://www.google.com/search?q=${suggestion._source.original_title}`}
			target="_blank"
			rel="noreferrer"
		>
			{suggestion._source.original_title}
		</a>
	);
};
