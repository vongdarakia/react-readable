import React, { Component } from 'react';
import Post from '../containers/Post';

class Home extends Component {
    componentDidMount() {
        let category = "all";
        if (this.props.match && this.props.match.params.category) {
            category = this.props.match.params.category;
        }
        this.props.fetchCategories();
        this.props.fetchPosts(category);
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
                                <Post {...post}/>
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
