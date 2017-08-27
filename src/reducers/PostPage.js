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
        case types.CHANGE_TITLE:
            console.log("yaya tittle")
            console.log(action.title)
            return {
                title: action.title
            }
        case types.CHANGE_BODY:
            console.log("yaya page")
            console.log(action.body)
            return {
                body: action.body
            }
        default:
            return state;
    }
}

export default PostPage;