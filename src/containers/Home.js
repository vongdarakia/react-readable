import { connect } from 'react-redux';
import actions from '../actions';
import { default as HomeComponent } from '../components/Home';

const mapStateToProps = state => {
	return {
        categories: state.readable.categories,
        posts: state.readable.posts
    }
}

function mapDispatchToProps(dispatch) {
	return {
		fetchCategories:	() => dispatch(actions.fetchCategories()),
		fetchPosts: 		(category) => dispatch(actions.fetchPosts(category)),
	};
}

const Home = connect(
	mapStateToProps,
	mapDispatchToProps
)(HomeComponent);

export default Home;
