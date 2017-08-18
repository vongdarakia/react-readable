import { createStore, compose, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
	const store = createStore(
		rootReducer,
		initialState,
		compose(
			applyMiddleware(ReduxPromise, thunk),
			window.devToolsExtension ? window.devToolsExtension() : f => f
		)
	);
	return store;
}
