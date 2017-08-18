import { connect } from 'react-redux';
import actions from '../actions';
import Home from '../components/Home';

const mapStateToProps = state => {
	return {
        categories: state.readable.categories
    }
}

function mapDispatchToProps(dispatch) {
	return {
		fetchCategories: actions.fetchCategories().bind(this, dispatch)
	};
}

const MainView = connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);

export default MainView;
