import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from './actions';
import ReadableApp from './components/ReadableApp';

const mapStateToProps = state => {
	return {}
}

function mapDispatchToProps(dispatch) {
	return {
		addComment: () => { dispatch(actions.addComment()); }
	};
}

const App = connect(
	mapStateToProps,
	mapDispatchToProps
)(ReadableApp);

export default App;