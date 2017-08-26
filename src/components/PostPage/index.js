import React, { Component } from 'react';
import Post from '../../containers/HomePage/Post';

class PostPage extends Component {
    componentDidMount() {
        console.log(this.props);
        console.log(this.props.match.params.postId);
        this.props.fetchPost(this.props.match.params.postId);
    }
	render() {
        let { title, author, body } = this.props;
		return (
            <div className="PostPage">
                Post page
                <p>{title}</p>
                <p>{author}</p>
                <p>{body}</p>
            </div>
		);
	}
}

export default PostPage;
