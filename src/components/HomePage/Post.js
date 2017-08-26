import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Post extends Component {
    componentDidMount() {
        // this.props.fetchPosts();
    }
	render() {
        let {id, category, author, title, voteScore, upvote, downvote} = this.props;
		return (
            <div className="Post">
                <div>
                    <button onClick={() => { upvote(id) }}>upvote</button>
                    <span>{voteScore}</span>
                    <button onClick={() => { downvote(id) }}>downvote</button>
                </div>
                {title}
                <p>by {author}</p>
                <Link to={`/${category}/${id}`}>GO TO PAGE</Link>
            </div>
		);
	}
}

export default Post;
