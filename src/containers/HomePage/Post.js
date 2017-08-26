import { connect } from 'react-redux';
import actions from '../../actions';
import { default as PostComponent } from '../../components/HomePage/Post';

const mapStateToProps = state => {
	return {};
}

function mapDispatchToProps(dispatch) {
	return {
		upvote:		(postId) => dispatch(actions.upvotePost(postId)),
		downvote:	(postId) => dispatch(actions.downvotePost(postId)),
	};
}

const Post = connect(
	mapStateToProps,
	mapDispatchToProps
)(PostComponent);

export default Post;
