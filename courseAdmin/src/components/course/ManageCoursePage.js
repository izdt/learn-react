import React, {Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import {authorsFormattedForDropdown} from '../../modules/selector';
import CourseForm from './CourseForm';
import toastr from 'toastr';

export class ManageCoursePage extends Component {
    constructor(props, context){
        super(props, context);

        this.state = {
            course: Object.assign({},this.props.course),
            errors:{},
            saving:false
        };

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.course.id != nextProps.course.id){
            this.setState({course: Object.assign({}, nextProps.course)});
        }
    }

    updateCourseState(event){
        const field = event.target.name;
        let course = this.state.course;
        course[field] = event.target.value;
        this.setState({course:course});
        return this.courseFormIsValid();
    }

    courseFormIsValid(){
        let formIsValid = true;
        let errors = {};

        if(this.state.course.title.length<5){
            errors.title = 'Title must be at least 5 characters.';
            formIsValid = false;
        }

        this.setState({errors:errors});
        return formIsValid;
    }

    saveCourse(event){
        event.preventDefault();
        if(!this.courseFormIsValid()){
            return;
        }
        this.setState({saving:true});
        this.props.actions.saveCourse(this.state.course)
            .then(()=>this.redirect())
            .catch((error)=>{
                toastr.error(error);
                this.setState({saving:false});
            });
    }

    redirect(){
        this.setState({saving:false});
        toastr.success('Course saved!');        
        this.context.router.push('/courses');
    }

    render() {
        return (
            <div>
                <CourseForm 
                allAuthors={this.props.authors}
                course={this.state.course} 
                errors={this.state.errors}
                onChange={this.updateCourseState}
                onSave={this.saveCourse}
                saving={this.state.saving}
                />
            </div>
        );
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

ManageCoursePage.contextTypes = {
    router: PropTypes.object
};

function getCourseById(courses, id) {
    const course = courses.filter(course => course.id == id);
    if(course) return course[0];
    return null;
}

function mapStateToProps(state, ownProps) {
    const courseId = ownProps.params.id; // from the path '/course/:id'

    let course = {id:'', watchHref:'', title:'',authorId:'',length:'',category:''};

    if(courseId && state.courses.length > 0){
        course = getCourseById(state.courses, courseId);
    }

    return {
        course: course,
        authors: authorsFormattedForDropdown(state.authors)
    };
}

function mapDisptchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDisptchToProps)(ManageCoursePage);