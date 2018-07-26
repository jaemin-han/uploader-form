import expect from 'expect';
import * as actions from '../actions/courseActions';

describe('Course Reducer', () => {
    it('should add course when passed CREATE_COURSE_SUCCESS', () => {
        const initialState = [
            {id: 'A', title: 'A'},
            {id: 'B', title: 'B'},
            {id: 'C', title: 'C'}
        ];

    const newCourse = { id: "D", title: "New Title" };
    const action = actions.createCourseSuccess(newCourse);

    //act
    const newState = courseReducer(initialState, action);
    const updatedCourse = newState.find(a => a.id == newCourse.id);
    const untouchedCourse = newState.find(a => a.id == "A");

    //assert
    expect(newState.length).toEqual(4);
    expect(newState[0].title).toEqual("A");
    expect(updatedCourse.title).toEqual("New Title");
    // expect(newState[1].title).toEqual('B');
    // expect(newState[2].title).toEqual('C');

    });
});