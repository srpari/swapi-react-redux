import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import CharacterList from './component/CharacterList';
import CharacterProfile from './component/CharacterProfile';
import CharacterWorld from './component/CharacterWorld';
import CharacterMovies from './component/CharacterMovies';
import store from './store';
import SWLogo from "./Assets/Imgs/SWLogo.png";

function App() {
	// passing the store to all components inside the Provider
	return (
		<Provider store={store}>
			<div className='layout-header container'>
				<div className={"text-center logo-container"}>
					<img
					src={SWLogo}
					alt="Star-Wars-Logo"
					style={{
						width: "100%",
						height: "200px",
						objectFit: "contain",
						backgroundColor: "#000",
						paddingTop: "1%",
						paddingBottom: "1%",
					}}
					/>
				</div>
				<div className='row'>
					<CharacterList />
				</div>
				<br/>
				<br/>
				<div className='row'>
					<CharacterProfile />
					<CharacterMovies />
					<CharacterWorld />
				</div>
			</div>
		</Provider>
	);
}

export default App;
