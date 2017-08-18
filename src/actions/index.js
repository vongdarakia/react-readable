import * as postActions from './post';
import * as commentActions from './comment';
import * as categoryActions from './category';

const actions = {
    ...postActions,
    ...commentActions,
    ...categoryActions
}

export default actions;