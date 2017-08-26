import * as types from '../types/Readable'

let initState = {
    categories: [],
    posts: []
};

const HomePage = (state = initState, action) => {
    switch (action.type) {
        case 'LOAD_CATEGORIES':
            console.log("categories state change")
            return {
                ...state,
                categories: action.categories
            }
        case 'LOAD_POSTS':
            console.log("posts state change")
            return {
                ...state,
                posts: action.posts
            }
        case types.UPVOTE_POST:
            return {
                ...state,
                posts: state.posts.map((post) => {
                    if (post.id === action.post.id) {
                        return { ...action.post };
                    }
                    return post;
                })
            }
        case types.DOWNVOTE_POST:
            return {
                ...state,
                posts: state.posts.map((post) => {
                    if (post.id === action.post.id) {
                        return { ...action.post };
                    }
                    return post;
                })
            }
        default:
            return state;
    }
}

export default HomePage;