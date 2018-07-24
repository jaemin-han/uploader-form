import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const courses = [
    {
        id: "react-building-applications",
        title: "Building Applications in React",
        watchHref: "http://reactjs.org",
        authorId: "jaemin-han",
        length: "5:08",
        category: "React"
    },
    {
        id: "redux-learning",
        title: "Clean Code: Write in Redux",
        watchHref: "redux.js.org",
        authorId: "bob-smith",
        length: "3:10",
        category: "Redux"
    },
    {
        id: "testing",
        title: "Delightful JavaScript Testing",
        watchHref: "http://www.jestjs.io",
        authorId: "will-navy",
        length: "2:52",
        category: "Testing"
    },
    {
        id: "test-yourself-how-to-code",
        title: "Teach Yourself How to Code",
        watchHref: "http://www.lifehacker.com/5401954/programmer-101-teach-yourself-how-to-code",
        authorId: "john-peters",
        length: "2:30",
        category: "Career"
    },
    {
        id: "angular-fundamentals",
        title: "Angular Fundamentals",
        watchHref: "http://www.angular.io",
        authorId: "sophie-beller",
        length: "5:10",
        category: "Angular"
    }
];

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course) => {
    return replaceAll(course.title, ' ', '-');
};

class CourseApi {
  static getAllCourses() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Object.assign([], courses));
        }, delay);
    });
  }

  static saveCourse(course) {
    course = Object.assign({}, course); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate server-side validation
            const minCourseTitleLength = 1;
            if (course.title.length < minCourseTitleLength) {
            reject(`Title must be at least ${minCourseTitleLength} characters.`);
            }

            if (course.id) {
            const existingCourseIndex = courses.findIndex(a => a.id == course.id);
            courses.splice(existingCourseIndex, 1, course);
            } else {
            //Just simulating creation here.
            //The server would generate ids and watchHref's for new courses in a real app.
            //Cloning so copy returned is passed by value rather than by reference.
            course.id = generateId(course);
            course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
            courses.push(course);
            }

            resolve(course);
        }, delay);
    });
  }

  static deleteCourse(courseId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const indexOfCourseToDelete = courses.findIndex(course => {
            course.id == courseId;
            });
            courses.splice(indexOfCourseToDelete, 1);
            resolve();
        }, delay);
    });
  }
}

export default CourseApi;