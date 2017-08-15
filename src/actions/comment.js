export const addComment = () => {
    console.log("Adding comment");
    return {
        type: 'ADD_COMMENT'
    }
}

export const editComment = () => {
    return {
        type: 'EDIT_COMMENT'
    }
}

export const removeComment = () => {
    return {
        type: 'REMOVE_COMMENT'
    }
}