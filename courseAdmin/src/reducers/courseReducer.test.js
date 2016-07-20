import expect from 'expect';
import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';

describe ('Course Reducer', () => {
    it('should add course when CREATE_COURSE_SUCCESS', () => {
        const initialState = [
            {id:'A', title: 'A'},
            {id:'B', title: 'B'}
        ];

        const newCourse = {id:'C', title:'C'};
        const action = actions.createCourseSucess(newCourse);
        
        const updateCourse = {id:'B', title:'New Title'};
        const updateAction = actions.updateCourseSuccess(updateCourse);
        
        const newState = courseReducer(initialState, action);
        const updateState = courseReducer(initialState, action);
        const updatedCourse = updateState.find(a=>a.id==updateCourse.id);

        expect(newState.length).toEqual(3);
        expect(newState[0].title).toEqual('A');
        expect(newState[1].title).toEqual('B');
        expect(newState[2].title).toEqual('C');   
        expect(updateCourse.title).toEqual('New Title');     
    });
});