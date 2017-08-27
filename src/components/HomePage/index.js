import React, { Component } from 'react';
import Post from '../../containers/HomePage/Post';

class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            category: 'all'
        }
    }

    componentDidMount() {
        this.props.fetchCategories();
    }

    // Loads new posts when categories change
    componentWillReceiveProps(props) {
        let self = this;
        let newCategory = props.match.params.category;

        if (this.state.category !== newCategory) {
            this.setState({ category: newCategory }, () => {
                self.props.fetchPosts(newCategory);
            });
        }
    }

	render() {
        let category = "all";
        if (this.props.match && this.props.match.params.category) {
            category = this.props.match.params.category;
        }
        console.log("rendering HomePage")
		return (
            <div className="HomePage">
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
                <h2>This is HomePage</h2>
                
            </div>
		);
	}
}

export default HomePage;
