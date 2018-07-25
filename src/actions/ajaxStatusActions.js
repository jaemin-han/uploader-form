import ActionTypes from './actionTypes';

export function beginAjaxCall() {
    return {type: ActionTypes.BEGIN_AJAX_CALL};
}