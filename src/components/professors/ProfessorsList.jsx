// Importing React module from 'react' library
import React from 'react';

// Importing the CSS module for styling
import style from "../../styles/style.module.css";

// Importing the 'useGetProfessorsQuery' and 'useRemoveProfessorMutation' hooks from professorsApi service
import { useGetProfessorsQuery, useRemoveProfessorMutation } from "../../redux/services/professorsApi";

// Functional component for displaying a list of professors
const ProfessorList = () => {
    // Using 'useGetProfessorsQuery' to fetch professor data
    const { data: professors } = useGetProfessorsQuery();

    // Destructuring the 'useRemoveProfessorMutation' hook to get the mutation function
    const [removeProfessor] = useRemoveProfessorMutation();

    // Handling the removal of a professor
    const handleRemoveProfessor = (professorId) => {
        removeProfessor(professorId);
    }

    // JSX structure for displaying the list of professors
    return (
        <div>
            {/* Title for the professor list */}
            <h2 className={style["title2"]}>Professor List</h2>

            {/* Table for displaying professor information */}
            <table border={1} className={style["big-table"]}>
                <tr>
                    <th>Personel Code</th>
                    <th>Name</th>
                    <th>Family</th>
                    <th>list of courses</th>
                    <th>#</th>
                </tr>

                {/* Checking if there are professors in the list */}
                {professors?.length &&
                    professors.map((professor) => (
                        // Mapping through each professor and rendering a table row
                        <tr key={professor.id}>
                            <td>{professor.personnelId}</td>
                            <td>{professor.name}</td>
                            <td>{professor.family}</td>
                            <td>
                                {/* Mapping through each course in the professor's course_list and rendering a span */}
                                {professor.course_list.map(course => (
                                    <span className={style["tag"]}>{course}</span>
                                ))}
                            </td>
                            <td>
                                {/* Button for removing the professor */}
                                <button className={`${style["btn"]} ${style["btn-danger"]}`} onClick={() => handleRemoveProfessor(professor.id)}>delete</button>
                            </td>
                        </tr>
                    ))}
            </table>
        </div>
    );
}

// Exporting the ProfessorList component
export default ProfessorList;
