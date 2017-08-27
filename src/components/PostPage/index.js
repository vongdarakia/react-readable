import React, { Component } from 'react';
// import Post from '../../containers/HomePage/Post';
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
            user: 'unknown',
            isEditingTitle: false,
            isEditingBody: false
        }

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.addComment = this.addComment.bind(this);
        this.beginTitleEdit = this.beginTitleEdit.bind(this);
        this.editTitle = this.editTitle.bind(this);
        this.cancelTitleEdit = this.cancelTitleEdit.bind(this);

        this.beginBodyEdit = this.beginBodyEdit.bind(this);
        this.editBody = this.editBody.bind(this);
        this.cancelBodyEdit = this.cancelBodyEdit.bind(this);
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

    beginTitleEdit() {
        this.setState({isEditingTitle: true}, () => {
            console.log('setting title')
            document.getElementById('title').value = this.state.title;
            document.getElementById('title').focus();
        });
    }

    editTitle() {
        let title = document.getElementById('title').value;
        let { body, id } = this.state;
        this.setState({isEditingTitle: false, title},() => {
            console.log('title edited');
            ReadableAPI.editPost({
                id,
                title,
                body
            })
        })
    }

    cancelTitleEdit() {
        this.setState({ isEditingTitle: false });
    }

    beginBodyEdit() {
        this.setState({isEditingBody: true}, () => {
            console.log('setting body')
            document.getElementById('body').value = this.state.body;
            document.getElementById('body').focus();
        });
    }

    editBody() {
        let body = document.getElementById('body').value;
        let { title, id } = this.state;
        this.setState({ isEditingBody: false, body },() => {
            console.log('body edited');
            ReadableAPI.editPost({
                id,
                title,
                body
            })
        })
    }

    cancelBodyEdit() {
        this.setState({ isEditingBody: false });
    }

	render() {
        let { title, author, body, comments, isEditingTitle, isEditingBody } = this.state;
        // console.log(this.props);
        console.log("rendering");
        let titleInput = title;
        let titleEditBtn = (<button onClick={this.beginTitleEdit}>Edit</button>);
        let titleCancelEditBtn = '';

        let bodyInput = body;
        let bodyEditBtn = (<button onClick={this.beginBodyEdit}>Edit</button>);
        let bodyCancelEditBtn = '';

        if (isEditingTitle) {
            titleInput = (<textarea id="title" />);
            titleEditBtn = (<button onClick={this.editTitle}>Save</button>);
            titleCancelEditBtn = (<button onClick={this.cancelTitleEdit}>Cancel</button>);
        }

        else if (isEditingBody) {
            bodyInput = (<textarea id="body" />);
            bodyEditBtn = (<button onClick={this.editBody}>Save</button>);
            bodyCancelEditBtn = (<button onClick={this.cancelBodyEdit}>Cancel</button>);
        }
		return (
            <div className="PostPage">
                Post page
                <p>
                    { titleInput }
                    { titleEditBtn }
                    { titleCancelEditBtn }
                </p>
                <p>{author}</p>
                <p>
                    { bodyInput }
                    { bodyEditBtn }
                    { bodyCancelEditBtn }
                </p>
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
