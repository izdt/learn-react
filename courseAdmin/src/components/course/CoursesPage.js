import React, {Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursesPage extends Component {
    constructor(props, context){
        super(props, context);
        this.redirectToAddCousePage = this.redirectToAddCousePage.bind(this);
    }

    courseRow(course, index){
        return <div key={index}>{course.title}</div>;
    }

    redirectToAddCousePage(){
        browserHistory.push('/course');
    }

    render() {
        const {courses} = this.props;

        return (
            <div>
                <h1>Courses</h1>
                <input type="submit" value="Add Course"
                    className="btn btn-primary" 
                    onClick={this.redirectToAddCousePage}/>
                <CourseList courses={courses} />
            </div>
        );
    }
}

CoursesPage.propTypes = {
    //dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
}

function mapDisptchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDisptchToProps)(CoursesPage);