import React, { Component } from 'react';
import Post from './Post';

class Home extends Component {
    constructor() {
        super();
        console.log(this.props);
        
    }
    componentDidMount() {
        this.props.fetchCategories();
        this.props.fetchPosts();
        console.log(this.props);
        this.upvote = this.props.upvote.bind(this);
        this.downvote = this.props.downvote.bind(this);
    }
	render() {
        let category = "all";
        if (this.props.match && this.props.match.params.category) {
            category = this.props.match.params.category;
        }
        console.log("rendering home")
		return (
            <div className="Home">
                <div className="category-section">
                    <h2>Category: { category }</h2>
                    <ul>
                        {this.props.categories.map((c, idx) => (
                            <li key={"c"+idx}>{c.name}</li>
                        ))}
                    </ul>
                </div>
                <div className="post-section">
                    <div className="filter-section">

                    </div>
                    <ul className="posts">
                        {this.props.posts.map((post, idx) => (
                            <li key={"p"+idx}>
                                <Post {...post} upvote={this.upvote} downvote={this.downvote}/>
                            </li>
                        ))}
                    </ul>
                </div>
                <h2>This is home</h2>
                
            </div>
		);
	}
}

export default Home;
