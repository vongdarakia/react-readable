// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import * as ReadableAPI from '../util/readableAPI';

// class PostsView extends Component {
// 	constructor() {
// 		super();

// 		this.state = {
// 		    categories: []
// 		};
// 	}
//     componentDidMount() {
//         // console.log('fetching');
//         // let categories = ReadableAPI.getAllCategories();
//         // categories.then(categories => {
//         //   console.log(categories);
//         // });
        
//         // ReadableAPI.getAllPosts().then(posts => {
//         //   console.log(posts);
//         // });
//     }
// 	render() {
// 		// let style = {

// 		// };
// 		return (
// 			<Router>
// 				<div className="App">
// 					<div className="App-header">
// 						<ul>
// 							<li><Link to="/">Home</Link></li>
// 							<li><Link to="/react">React</Link></li>
// 							<li><Link to="/redux">Redux</Link></li>
// 						</ul>
// 					</div>
// 					<Route exact path="/" component={PostsView}/>
// 					<Route path="/:category" component={PostsView}/>
// 					<button onClick={this.openModal}>Add Comment</button>
// 				</div>
// 			</Router>
// 		);
// 	}
// }

// export default PostsView;

// 					// <Modal
// 					// 	isOpen={this.state.modalIsOpen}
// 					// 	onAfterOpen={this.afterOpenModal}
// 					// 	onRequestClose={this.closeModal}
						
// 					// 	contentLabel="Modal"
// 					// 	overlayClassName={{
// 					// 		base: 'modal-overlay',
// 					// 		afterOpen: 'modal-overlay-after-open',
// 					// 		beforeClose: 'modal-overlay-before-close'
// 					// 	}}
// 					// >
// 					// 	<h1>Modal Content</h1>
// 					// 	<p>Etc.</p>
// 					// 	<button onClick={this.closeModal}>close</button>
// 					// </Modal>