import ActionTypes from '../actions/actionTypes';
import initialState from './initialState';

function actionTypeEndsInSuccess(type) {
    return type.substring(type.length - 8) == '_SUCCESS';
}

export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action) {
    if (action.type == ActionTypes.BEGIN_AJAX_CALL) {
        return state + 1;
    } else if (action.type == ActionTypes.AJAX_CALL_ERROR ||
        actionTypeEndsInSuccess(action.type)) {
        return state -1;
    }

    return state;
}