import * as types from '../types/readable'
import * as ReadableAPI from '../util/readableAPI';

let initState = {
    categories: [],
    posts: []
};

const readable = (state = initState, action) => {
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
            console.log("Upvoting " + action.postId)
            let { posts } = state;
            console.log(action.post);
            return {
                ...state,
                posts: state.posts.map((post) => {
                    if (post.id === action.post.id) {
                        console.log("FONDUND")
                        return { ...action.post };
                    }
                    return post;
                })
            }
        default:
            return state;
    }
}

export default readable;