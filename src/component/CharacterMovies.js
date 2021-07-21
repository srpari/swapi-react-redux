import React,{useState,useEffect} from 'react';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';

function CharacterMovies({ movies }) {

 const [lastReleased, setLastReleased] = useState();

 const highlightStyle = {backgroundColor:"#e2e26d"};
 
 const highlightDiv = {backgroundColor:"#e9ecef"};

useEffect(() => {
	let maxNumb = [];
	let numTitle = [];
	
	for (var y = 0; y < movies.length; y++) {
	  numTitle.push({lastRelese: new Date(movies[y].release_date), movieTitle: movies[y].title});
	  maxNumb.push(new Date(movies[y].release_date));
	}	
	setLastReleased(new Date(Math.max.apply(null, maxNumb)).toLocaleDateString());
}, [movies])

		

 	return (
		<Card className='col-md-5'>
			<Card.Header style={highlightStyle}>
				<Card.Title>List of Movies</Card.Title>
				{(lastReleased==="Invalid Date") ? " ": (<p>Year last movie released was: {lastReleased}</p>) }
			</Card.Header>
			<Card.Body>				
				{/* <ul> */}
				{ movies.map((movie,index) => {
					const date = new Date(movie.release_date).toLocaleDateString();	
					if (lastReleased === date ) {
						return (
							<p style={highlightDiv} key={movie.title}>
								{movie.title} ({date})
							</p>
						);
					}
					else {
						return (
							<p  key={movie.title}>
								{movie.title} ({date})
							</p>
						);
					}				
					
				})}
				{/* </ul>			 */}
			  
			</Card.Body>
		</Card>
	);
}

function mapStateToProps({ character: { movies } }) {
	return { movies };
}

export default connect(mapStateToProps)(CharacterMovies);
