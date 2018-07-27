import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import { browserHistory } from 'react-router';
// import { on } from 'cluster';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
    }

    redirectToAddCoursePage() {
        browserHistory.push('/course');
    }

    deleteCourse(event, id) {
        event.preventDefault();
        this.props.actions.deleteCourse(id)
        .catch(errMsg => {
            toastr.error(errMsg);
        });
        toastr.error('Course deleted');
    }

    render() {
        const { courses } = this.props;

        return (
            <div>
                <h1>Courses</h1>
                <input 
                    type="submit"
                    value="Add Course"
                    className="btn btn-primary"
                    onClick={this.redirectToAddCoursePage}
                />
                <CourseList
                    courses={courses}
                    onDelete={this.deleteCourse}
                />
            </div>
        );
    }
}

CoursesPage.propTypes = {
    // dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

// From 'reducers/index.js'
function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);