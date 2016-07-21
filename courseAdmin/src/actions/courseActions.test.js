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
const mockData = configureMockStore(midddleware);

describe ('Asyn Actions', () => {
    afterEach(() => {
        nock.cleanAll();
    });
    it ('Should CREATE_COURSE_SUCCESS and LOAD_COURSES_SUCCESS when loading courses', (done) => {
        //TODO
    });
});