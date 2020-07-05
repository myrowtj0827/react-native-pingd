import {ROOT_CHANGED} from '../actions/appActions/changeRoot';

const initialState = {
    root: 'login',
};

export default function app(state = initialState, action) {
    if (action.type === ROOT_CHANGED) {
        return Object.assign({}, {root: action.root});
    } else {
        return state;
    }
}
