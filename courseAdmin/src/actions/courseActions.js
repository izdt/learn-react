import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCourseSuccess(courses) {
    return {type:types.LOAD_COURSES_SUCCESS, courses};
}

export function createCourseSucess(course) {
    return {type: types.CREATE_COURSE_SUCCESS, course};
}

export function updateCourseSuccess(course) {
    return {type: types.UPDATE_COURSE_SUCCESS, course};
}

export function loadCourses(){
    return (dispatch) => {
        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCourseSuccess(courses));
        }).catch(error=>{
            throw(error);
        });
    };
}

export function saveCourse(course) {
    return (dispatch, getState) => {
        return courseApi.saveCourse(course).then(savedCourse=>{
            course.id ? dispatch(updateCourseSuccess(savedCourse)) : 
            dispatch(createCourseSucess(savedCourse));
        }).catch(error => {
            throw(error);
        });
    };
}