import React, { Component } from 'react';
import Post from '../../containers/HomePage/Post';
import * as ReadableAPI from '../../util/ReadableAPI';
import uuidv4 from 'uuid/v4';
import uuidv5 from 'uuid/v5';
const READABLE_NAMESPACE = '2ba9ae3c-7e47-41a7-9dcd-e01561a6a48d';    // ⇨ '8dc079dd-0313-4563-864f-008eb45bf87f'
console.log(READABLE_NAMESPACE);

class PostPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            body: props.body,
            comments: [],
            user: 'unknown'
        }

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.addComment = this.addComment.bind(this);
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
                // Newest comments first
                comments.sort((a, b) => {
                    return b.timestamp - a.timestamp;
                });
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

    addComment() {
        // console.log();
        let comment = document.getElementById('comment').value;

        let id = uuidv5(comment, uuidv4());
        console.log(id);
        // comment object has id, timestamp, body, owner, parentId
        // let self = this;
        console.log(this.state);
        ReadableAPI.postComment({
            id,
            timestamp: Date.now(),
            body: comment,
            author: this.state.user,
            parentId: this.props.match.params.postId
        }).then((post) => {
            console.log(post);
            let { comments } = this.state;
            comments.unshift(post);
            this.setState({ comments });
        });
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
                <div>
                    <p>You are commenting as {this.state.user}</p>
                    <textarea id="comment"></textarea>
                    <button onClick={this.addComment}>Add Comment</button>
                </div>
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
