let initState = {};

const readable = (state = initState, action) => {
    switch (action.type) {
        case 'JAM':
            return {
                ...state
            }
        default:
            return state;
    }
}

export default readable;