import { connect } from 'react-redux';
import actions from '../../actions';
import { default as PostPageComponent } from '../../components/PostPage';

const mapStateToProps = state => {
	return { ...state.PostPage };
}

function mapDispatchToProps(dispatch) {
	return {
        fetchPost:  (postId) => dispatch(actions.fetchPost(postId)),
		upvote:		(postId) => dispatch(actions.upvotePost(postId)),
		downvote:	(postId) => dispatch(actions.downvotePost(postId)),
	};
}

const PostPage = connect(
	mapStateToProps,
	mapDispatchToProps
)(PostPageComponent);

export default PostPage;
