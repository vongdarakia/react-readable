import * as ReadableAPI from '../util/ReadableAPI';
import * as types from '../types/Readable';

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

export const loadPost = (post) => {
    console.log("post dispatching")
    return {
        type: types.LOAD_POST,
        post
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

export const fetchPost = (category) => {
    console.log("posts fetching");
    return dispatch => {
        ReadableAPI.getPost(category).then(posts => {
            if (posts) {
                console.log(posts);
                dispatch(loadPost(posts));
            }
        });
    }
}