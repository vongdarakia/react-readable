import * as ReadableAPI from '../util/ReadableAPI';
import * as types from '../types/Readable';

export const addPost = () => {
    return {
        type: types.ADD_POST,
    }
}

export const editPost = (post) => {
    return {
        type: types.EDIT_POST,
        post
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

export const fetchPost = (id) => {
    console.log("post fetching");
    return dispatch => {
        ReadableAPI.getPost(id).then(post => {
            if (post) {
                console.log(post);
                dispatch(loadPost(post));
            }
        });
    }
}

export const changeTitle = (title) => {
    console.log("changing title")
    return dispatch => {
        dispatch({
            type: types.CHANGE_TITLE,
            title
        });
    }
}

export const changeBody = (body) => {
    console.log("changing body")
    return dispatch => {
        dispatch({
            type: types.CHANGE_BODY,
            body
        });
    }
}