import expect from 'expect';
import ActionTypes from './actionTypes';
import * as courseActions from './courseActions';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

// testing a sync action
describe('Course Actions', () => {
    describe('createCourseSucess', () => {
        it('should create a CREATE_COURSE_SUCCESS action', () => {
            const course = {id: 'clean-code', title: 'Clean Code'};
            const expectedAction = {
                type: ActionTypes.CREATE_COURSE_SUCCESS,
                course: course
            };

            const action = courseActions.createCourseSuccess(course);

            expect(action).toEqual(expectedAction);
        });
    });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
    afterEach(() => {
        nock.cleanAll();
    });

    it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {
        const expectedActions = [
            {type: ActionTypes.BEGIN_AJAX_CALL},
            {type: ActionTypes.LOAD_COURSES_SUCCESS, body: {courses: [{id: 'clean-code', title: 'Clean Code'}]}}
        ];

        const store = mockStore({courses:[]}, expectedActions);
        store.dispatch(courseActions.loadCourses()).then(() => {
            const actions = store.getActions();
            expect(actions[0].type).toEqual(ActionTypes.BEGIN_AJAX_CALL);
            expect(actions[1].type).toEqual(ActionTypes.LOAD_COURSES_SUCCESS);
            done();
        });
    });
});
