import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';

function CharacterMovies({ movies }) {
	return (
		<Card className='col-md-4'>
			<Card.Header>
				<Card.Title>List of Movies</Card.Title>
			</Card.Header>
			<Card.Body>
				<ul>
				{movies.map(movie => {
					const date = new Date(movie.release_date).toLocaleDateString();
					return (
						<li key={movie.title}>
							{movie.title} ({date})
						</li>
					);
				})}
				</ul>
			</Card.Body>
		</Card>
		// <div id='character-movies' className='col-md-6'>
		// 	<h1>Movies</h1>
		// 	<ul>
		// 		{movies.map(movie => {
		// 			const date = new Date(movie.release_date).toLocaleDateString();
		// 			return (
		// 				<li key={movie.title}>
		// 					{movie.title} ({date})
		// 				</li>
		// 			);
		// 		})}
		// 	</ul>
		// </div>
	);
}

function mapStateToProps({ character: { movies } }) {
	return { movies };
}

export default connect(mapStateToProps)(CharacterMovies);
