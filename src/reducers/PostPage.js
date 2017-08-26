import * as types from '../types/Readable'

let initState = {
    author: '',
    body: '',
    category: '',
    deleted: false,
    id: '',
    timestamp: 0,
    title: '',
    voteScore: 0,
};

const PostPage = (state = initState, action) => {
    switch (action.type) {
        case types.LOAD_POST:
            console.log("posts state change")
            return { ...action.post }
        case types.UPVOTE_POST:
            return { ...action.post }
        case types.DOWNVOTE_POST:
            return { ...action.post }
        default:
            return state;
    }
}

export default PostPage;