export function setCurrentCharacter(id) {
	return {
		type: 'SET_CURRENT_CHARACTER',
		id,
	};
}

export function getCharacterProfile(id) {
	return async dispatch => {
		const response = await fetch(`https://swapi.dev/api/people/${id}/`);
		const profile = await response.json();
		dispatch(setCharacterProfile(profile));
		dispatch(getCharacterworld(profile.homeworld));
		dispatch(getCharacterMovies(profile.films));
	};
}

export function setCharacterProfile(profile) {
	return {
		type: 'SET_CHARACTER_PROFILE',
		profile: profile,
	};
}

export function getCharacterworld(url) {
	return async dispatch => {
		const res = await fetch(url);
		const world = await res.json();
		dispatch(setCharacterWorld(world));
	};
}
export function setCharacterWorld(world) {
	return {
		type: 'SET_CHARACTER_WORLD',
		world: world,
	};
}

export function getCharacterMovies(movieUrls) {
	return dispatch => {
		Promise.all(movieUrls.map(url => fetch(url).then(res => res.json()))).then(movies =>
			dispatch(setCharacterMovies(movies))
		);
	};
}
export function setCharacterMovies(movies) {
	return {
		type: 'SET_CHARACTER_MOVIES',
		movies: movies,
	};
}
