import { combineReducers } from 'redux';
import HomePage from './HomePage';
import PostPage from './PostPage';

const rootReducer = combineReducers({ HomePage, PostPage });

export default rootReducer;