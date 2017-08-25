import React, { Component } from 'react';

class Post extends Component {
    componentDidMount() {
        // this.props.fetchPosts();
    }
	render() {
        let {id, author, title, voteScore, upvote, downvote} = this.props;
		return (
            <div className="Post">
                <div>
                    <button onClick={() => {
                        console.log("voting");
                        console.log(upvote)
                        upvote(id)
                    }
                    }>upvote</button>
                    <span>{voteScore}</span>
                    <button>downvote</button>
                </div>
                {title}
                <p>by {author}</p>
            </div>
		);
	}
}

export default Post;
