export function getCharacters() {
	return async dispatch => {
		const res = await fetch('https://swapi.dev/api/people/');
		const json = await res.json();
		const characters = json.results;
		dispatch(setCharacters(characters));
	};
}

export function setCharacters(characters) {
	return {
		type: 'SET_CHARACTERS',
		characters,
	};
}
