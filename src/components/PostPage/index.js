import React, { Component } from 'react';
import Post from '../../containers/HomePage/Post';

class PostPage extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            body: '',
            author: ''
        }
    }
    componentDidMount() {
        console.log(this.props);
        console.log(this.props.match.params.postId);
        this.props.fetchPost(this.props.match.params.postId);
        this.handleChange = this.handleChange.bind(this);
        this.setState({
            title: this.props.title
        }, () => {
            console.log(this.state)
        });
    }
    // onChange(e) {
    //     console.log(e.target.value)
    //     // this.setState({

    //     // });
    // }

    handleChange(event) {
        // this.setState({title: event.target.value});
        this.props.changeTitle(event.target.value);
    }
	render() {
        let { title, author, body } = this.props;
		return (
            <div className="PostPage">
                Post page
                <p><input onChange={this.handleChange} type="text" value={title} /></p>
                <p>{author}</p>
                <p>{body}</p>
            </div>
		);
	}
}

export default PostPage;
