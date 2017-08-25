import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../App.css';
import Home from '../containers/Home';

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
					<Route exact path="/" component={Home}/>
					<Route path="/:category" component={Home}/>
					<button onClick={this.openModal}>Add Comment</button>
				</div>
			</Router>
		);
	}
}

export default ReadableApp;
