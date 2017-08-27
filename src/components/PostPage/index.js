import React, { Component } from 'react';
import Post from '../../containers/HomePage/Post';
import * as ReadableAPI from '../../util/ReadableAPI';

class PostPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            body: props.body,
            comments: []
        }

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleBodyChange = this.handleBodyChange.bind(this);
    }

    componentDidMount() {
        // console.log(this.props);
        // console.log(this.props.match.params.postId);
        // this.props.fetchPost(this.props.match.params.postId);
        ReadableAPI.getPost(this.props.match.params.postId)
        .then(
            (post) => {
                // console.log(post)
                this.setState({ ...post });
            }
        );

        ReadableAPI.getComments(this.props.match.params.postId)
        .then(
            comments => {
                // console.log(comments);
                this.setState({ comments });
            }
        );
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.title !== this.props.title) {
            // console.log(nextProps);
            // console.log("LKJIAYYAYYAAYYAAAA");
            this.refs.title.value = nextProps.title;
        }
      }

    handleTitleChange(event) {
        // this.props.changeTitle(event.target.value);
        this.setState({ title: event.target.value });
    }

    handleBodyChange(event) {
        // this.props.changeBody(event.target.value);
        this.setState({ body: event.target.value });
    }

	render() {
        let { title, author, body, comments } = this.state;
        // console.log(this.props);
        console.log("rendering");
		return (
            <div className="PostPage">
                Post page
                <p><input type="text" onChange={this.handleTitleChange} value={title} /></p>
                <p>{author}</p>
                <p><input type="text" onChange={this.handleBodyChange} value={body} /></p>
                <ul>
                    {comments.map((c, idx) => (
                        <li key={c.id}>{c.body} - {c.author}</li>
                    ))}
                </ul>
            </div>
		);
	}
}

export default PostPage;
