import * as postActions from './post';
import * as commentActions from './comment';

const actions = {
    ...postActions,
    ...commentActions
}

export default actions;