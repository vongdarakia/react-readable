import { connect } from 'react-redux';
import actions from '../../actions';
import { default as HomeComponent } from '../../components/HomePage';

const mapStateToProps = state => {
	return { ...state.HomePage }
}

function mapDispatchToProps(dispatch) {
	return {
		fetchCategories:	() => dispatch(actions.fetchCategories()),
		fetchPosts: 		(category) => dispatch(actions.fetchPosts(category)),
	};
}

const HomePage = connect(
	mapStateToProps,
	mapDispatchToProps
)(HomeComponent);

export default HomePage;
