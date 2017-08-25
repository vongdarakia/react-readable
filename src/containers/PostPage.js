import { connect } from 'react-redux';
import actions from '../actions';
import { default as PostPageComponent } from '../components/PostPage';

const mapStateToProps = state => {
	return {};
}

function mapDispatchToProps(dispatch) {
	return {
        fetchPost:  (category) => dispatch(actions.fetchPost(category)),
		upvote:		(postId) => dispatch(actions.upvotePost(postId)),
		downvote:	(postId) => dispatch(actions.downvotePost(postId)),
	};
}

const PostPageComponent = connect(
	mapStateToProps,
	mapDispatchToProps
)(PostComponent);

export default PostPage;
