// Importing React module from the 'react' library
import React from 'react';

// Importing the CSS module for styling
import style from "../../styles/style.module.css"

// Importing the 'useGetStudentsQuery' and 'useRemoveStudentMutation' hooks from studentsApi service
import { useGetStudentsQuery, useRemoveStudentMutation } from '../../redux/services/studentsApi';

// Functional component for displaying a list of students
const StudentList = () => {
    // Using 'useGetStudentsQuery' to fetch student data
    const { data: students, isLoading } = useGetStudentsQuery();

    // Destructuring the 'useRemoveStudentMutation' hook to get the mutation function
    const [removeStudent] = useRemoveStudentMutation();
   
    // Handling the removal of a student
    const handleRemoveStudent = (studentId) => {
        removeStudent(studentId);
    }
    
    // JSX structure for displaying the list of students
    return (
        <div>
            {/* Title for the student list */}
            <h2 className={style["title2"]}>Student List</h2>

            {/* Table for displaying student information */}
            <table border={1} className={style['big-table']} >
                <tr>
                    <th>Student ID</th>
                    <th>Name</th>
                    <th>Family</th>
                    <th>Major</th>
                    <th>#</th>
                </tr>

                {/* Checking if data is not loading and there are students in the list */}
                {!isLoading &&
                    students?.length &&
                    students.map((student) => (
                        // Mapping through each student and rendering a table row
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.family}</td>
                            <td>{student.fieldOfStudy}</td>
                            <td>
                                {/* Button for removing the student */}
                                <button className={`${style["btn"]} ${style["btn-danger"]}`} onClick={() => handleRemoveStudent(student.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
            </table>
        </div>
    );
};

// Exporting the StudentList component
export default StudentList;
