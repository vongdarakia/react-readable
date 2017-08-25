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
    return {
        type: types.DOWNVOTE_POST,
        postId
    }
}

export const loadPosts = (posts) => {
    console.log("posts dispatching")
    return {
        type: types.LOAD_POSTS,
        posts
    }
}

export const fetchPosts = () => {
    console.log("posts fetching");
    return dispatch => {
        ReadableAPI.getPosts().then(posts => {
            if (posts) {
                console.log(posts);
                dispatch(loadPosts(posts));
            }
        });
    }
}