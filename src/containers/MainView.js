import { connect } from 'react-redux';
import actions from '../actions';
import Home from '../components/Home';

const mapStateToProps = state => {
	return {
        categories: state.readable.categories,
        posts: state.readable.posts
    }
}

function mapDispatchToProps(dispatch) {
	return {
		fetchCategories: 	() => dispatch(actions.fetchCategories()),
		fetchPosts: 		() => dispatch(actions.fetchPosts()),
		upvote:				(postId) => dispatch(actions.upvotePost(postId)),
		downvote:			(postId) => dispatch(actions.downvotePost(postId)),
	};
}

const MainView = connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);

export default MainView;
