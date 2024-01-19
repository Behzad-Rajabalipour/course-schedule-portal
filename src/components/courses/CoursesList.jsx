// Importing React module from 'react' library
import React from 'react';

// Importing the CSS module for styling
import style from "../../styles/style.module.css";

// Importing the 'useGetCoursesQuery' and 'useRemoveCourseMutation' hooks from coursesApi service
import { useGetCoursesQuery, useRemoveCourseMutation } from "../../redux/services/coursesApi";

// Functional component for displaying a list of courses
const CourseList = () => {
    // Using 'useGetCoursesQuery' to fetch course data
    const {data: courses, isLoading}= useGetCoursesQuery();

    // Destructuring the 'useRemoveCourseMutation' hook to get the mutation function
    const [removeCourse] = useRemoveCourseMutation();
    
    // Handling the removal of a course
    const handleRemoveCourse = (courseCode) =>{
        removeCourse(courseCode);
    }

    // JSX structure for displaying the list of courses
    return (
        <div>
            {/* Title for the course list */}
            <h2 className={style["title2"]}>Course List</h2>

            {/* Table for displaying course information */}
            <table border={1} className={style['big-table']}>
                <tr>
                    <th>course Name</th>
                    <th>course Code</th>
                    <th>course credit</th>
                    <th>course Professor</th>
                    <th>#</th>
                </tr>

                {/* Checking if there are courses in the list */}
                {/* Mapping through each course and rendering a table row */}
                {!isLoading && courses?.length &&
                    courses.map((course)=>(         
                        <tr key={course.id}>
                            <td>{course.name}</td>
                            <td>{course.numberOfUnits}</td>
                            <td>{course.professorId}</td>
                            <td>
                                {/* Button for removing the course */}
                                <button className={`${style["btn"]} ${style["btn-danger"]}`} onClick={()=>handleRemoveCourse(course.id)}>delete</button>
                            </td>
                        </tr>
                    ))}
            </table>
        </div>
    );
}
 
// Exporting the CourseList component
export default CourseList;
