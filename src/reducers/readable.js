let initState = {
    categories: []
};

const readable = (state = initState, action) => {
    switch (action.type) {
        case 'JAM':
            return {
                ...state
            }
        case 'LOAD_CATEGORIES':
            console.log("categories state change")
            return {
                ...state,
                categories: action.categories
            }
        default:
            return state;
    }
}

export default readable;