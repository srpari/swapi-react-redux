import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';

function CharacterProfile({ profile }) {
	
	const highlightStyle = {backgroundColor:"#e2e26d"}

	return (
		<Card className='col-md-6 ml-5 mr-3'>
			<Card.Header style={highlightStyle}>
				<Card.Title >Profile</Card.Title>
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
