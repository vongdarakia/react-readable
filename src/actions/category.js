import * as ReadableAPI from '../util/ReadableAPI';

export const loadCategories = (categories) => {
    console.log("categories dispatching")
    return {
        type: 'LOAD_CATEGORIES',
        categories
    }
}

export const fetchCategories = () => {
    console.log("categories fetching");
    return dispatch => {
        ReadableAPI.getAllCategories().then(categories => {
            if (categories) {
                dispatch(loadCategories(categories));
            }
        });
    }
}
