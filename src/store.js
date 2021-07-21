import { applyMiddleware, createStore, compose } from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import { getCharacters } from './actions/setCharacters';

const state = {
	characters: [],
	character: {
		id: 0,
		profile: {},
		world: {},
		movies: [],
	},
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, state, composeEnhancers(applyMiddleware(thunk)));
store.dispatch(getCharacters());

export default store;
