import React,{useState} from 'react';
import { connect } from 'react-redux';
// import { Card,Dropdown,Badge,Button } from 'react-bootstrap';
import { setCurrentCharacter, getCharacterProfile } from '../actions/setCurrentCharacter';

function CharacterList({ characters, setCharacter }) {	
	
	const [activeCharacter,setActiveCharacter] = useState("Select");

	const selectedcharacters = {
		0:"Luke Skywalker",
		1:"C-3PO",
		2:"R2-D2",
		3:"Darth Vader",
		4:"Leia Organa",
		5:"Owen Lars",
		6:"Beru Whitesun lars",
		7:"R5-D4",
		8:"Biggs Darklighter",
		9:"Obi-Wan Kenobi",
	}
  
	const handleFilter = (e) => {
		const count = parseInt(e)+1;	
		setActiveCharacter(selectedcharacters[e])
		setCharacter(count);
	};
	
	return (
		<div id='character-list' className='col-md-12'>
			{/* <Spinner animation="border" /> */}
			<h1>Characters</h1>	
				{/* <Dropdown   
				className="d-inline mx-2"            
				onSelect={handleFilter} >
				<Dropdown.Toggle  
				id="dropdown-autoclose-true">
				{activeCharacter}
				</Dropdown.Toggle>
				<Dropdown.Menu>
				{characters.map((character,index) => {
					return (
						<Dropdown.Item eventKey={index}>{character.name}</Dropdown.Item>
					);
				})}                   
				</Dropdown.Menu>
				</Dropdown> */}
				
				{/* <Button variant="secondary">Success</Button>{' '} */}
			 {characters.map((c, i) => {
			return (					
					<span 
					className="label other nameLink text-center mr-2" 
					key={c.name} 
					onClick={setCharacter(i + 1)}>
					{c.name}</span>
				);
			})}
		</div>
	);
}

function mapStateToProps(state) {
	return state;
}

const mapDispatchToProps = dispatch => ({
	setCharacter(id) {
		// console.log(id); 
		return () => {
			dispatch(setCurrentCharacter(id));
			dispatch(getCharacterProfile(id));
		};
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
