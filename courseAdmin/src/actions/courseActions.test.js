import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';


describe ('Course Action', () => {
    describe ('createCourseSuccess', () => {
        it ('should create a CREATE_COURSE_SUCCESS action', () => {
            const course = {id:'clean-code',title:'Clean Code'};
            const expectedAction = {
                type: types.CREATE_COURSE_SUCCESS,
                course: course
            };

            const action = courseActions.createCourseSucess(course);
            expect(action).toEqual(expectedAction);
        });
    });
});



const midddleware = [thunk];
const mockStore = configureMockStore(midddleware);

describe ('Async Actions', () => {
    afterEach(() => {
        nock.cleanAll();
    });
    it ('Should BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {
        //example to call nock
        /*
        nock('http://www.api.com')
            .get('courses')
            .reply(200,{body:{course:[{id:1,firstName:'HELLO',lastName:'ABC'}]}});
        */
        const expectedActions = [
            {type:types.BEGIN_AJAX_CALL},
            {type:types.LOAD_COURSES_SUCCESS, body: {courses: [{id:'clean-code',title:'Clean Code'}]}}
        ];
        
        const store = mockStore({courses:[]}, expectedActions);
        store.dispatch(courseActions.loadCourses()).then(()=>{
            const actions = store.getActions();
            expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
            expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
            done();
        });

    });
});