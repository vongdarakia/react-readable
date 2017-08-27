import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../App.css';
import HomePage from '../containers/HomePage';
import PostPage from '../containers/PostPage';
// import PostPage from '../containers/PostPage'

class ReadableApp extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<div className="App-header">
						<ul>
							<li><Link to="/">Home</Link></li>
							<li><Link to="/react">React</Link></li>
							<li><Link to="/redux">Redux</Link></li>
						</ul>
					</div>
					<Route exact path="/" component={HomePage}/>
					<Route exact path="/:category" component={HomePage}/>
					<Route path="/:category/:postId" component={PostPage}/>
					
					<button onClick={this.openModal}>Add Comment</button>
				</div>
			</Router>
		);
	}
}

export default ReadableApp;
// {/* <Route path="/:category/:postId" component={PostPage}/> */}