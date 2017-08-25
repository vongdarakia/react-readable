import * as ReadableAPI from '../util/readableAPI';
import * as types from '../types/readable';

export const addPost = () => {
    return {
        type: types.ADD_POST,
    }
}

export const editPost = () => {
    return {
        type: types.EDIT_POST
    }
}

export const removePost = () => {
    return {
        type: types.REMOVE_POST
    }
}

export const upvotePost = (postId) => {
    return dispatch => {
        ReadableAPI.upvotePost(postId, post => {
            if (post) {
                dispatch({
                    type: types.UPVOTE_POST,
                    post
                });
            }
        });
    }
}

export const downvotePost = (postId) => {
    return dispatch => {
        ReadableAPI.downvotePost(postId, post => {
            if (post) {
                dispatch({
                    type: types.DOWNVOTE_POST,
                    post
                });
            }
        });
    }
}

export const loadPosts = (posts) => {
    console.log("posts dispatching")
    return {
        type: types.LOAD_POSTS,
        posts
    }
}

export const fetchPosts = (category) => {
    console.log("posts fetching");
    return dispatch => {
        ReadableAPI.getPosts(category).then(posts => {
            if (posts) {
                console.log(posts);
                dispatch(loadPosts(posts));
            }
        });
    }
}