import expect from 'expect';
import {createStore} from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as courseAcitons from '../actions/courseActions';

describe ('Store', () => {
    it('Should handle creating crouses', () => {
        const store = createStore(rootReducer, initialState);
        const course = {
            title : "Clean Code"
        };
        const action = courseAcitons.createCourseSucess(course);
        store.dispatch(action);
        const actual = store.getState().courses[0];
        expect(actual).toEqual(course);
    });
});