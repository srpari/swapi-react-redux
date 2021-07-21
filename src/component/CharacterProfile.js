import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';

function CharacterProfile({ profile }) {
	return (
		<Card className='col-md-4 ml-2 mr-2'>
			<Card.Header>
				<Card.Title>Profile</Card.Title>
			</Card.Header>
			<Card.Body>
				{profile?.name && <p>Name: {profile.name}</p>}
				{profile?.height && <p>Height: {profile.height}cm</p>}
				{profile?.mass && <p>Weight: {profile.mass}kg</p>}
				{profile?.gender && <p>Gender: {profile.gender}</p>}
			</Card.Body>
		</Card>
	);
}

function mapStateToProps({ character: { profile } }) {
	return { profile };
}

export default connect(mapStateToProps)(CharacterProfile);
