import * as ReadableAPI from '../util/ReadableAPI';

export const loadCategories = (categories) => {
    return {
        type: 'LOAD_CATEGORIES',
        categories
    }
}

export const fetchCategories = () => {
    return dispatch => {
        ReadableAPI.getAllCategories().then(categories => {
            if (categories) {
                dispatch(loadCategories(categories));
            }
        });
    }
}
