import ActionTypes from '../actions/actionTypes';
import initialState from './initialState';

const { LOAD_AUTHORS_SUCCESS } = ActionTypes;

export default function authoreReducer(state = initialState.authors, action) {
    switch(action.type) {
        case LOAD_AUTHORS_SUCCESS:
            return action.authors;
        
        default:
            return state;
    }
}