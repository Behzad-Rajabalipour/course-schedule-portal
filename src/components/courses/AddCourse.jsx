// Importing React and useState from the 'react' library
import React, { useState } from "react";

// Importing CSS module for styling
import style from "../../styles/style.module.css";

// Importing the 'useAddCourseMutation' and 'useGetProfessorsQuery' hooks from the coursesApi and professorsApi services
import { useAddCourseMutation } from "../../redux/services/coursesApi";
import { useGetProfessorsQuery, useUpdateProfessorMutation } from "../../redux/services/professorsApi";

// Functional component for adding a new course
const Addcourse = () => {
    // Using the 'useAddCourseMutation' hook to get the mutation function for adding a new course
    const [addCourse] = useAddCourseMutation();
    const [updateProfessor] = useUpdateProfessorMutation();

    // Using the 'useGetProfessorsQuery' hook to fetch the list of professors
    const { data: professors } = useGetProfessorsQuery();

    // State variables for handling form input
    const [name, setName] = useState('');
    const [numberOfUnits, setNumberOfUnits] = useState('');
    const [professorId, setProfessorId] = useState('');

    // Handling the form submission
    const handleSubmit = () => {
        console.log(name, numberOfUnits, professorId);
        if (name && numberOfUnits && professorId) {
            // Calling the addCourse mutation function to add a new course
            addCourse({ name, numberOfUnits, professorId });

            // Clearing the form fields after submission
            setName("");
            setNumberOfUnits("");
            setProfessorId("");
            
            for (var professor of professors){
                if (String(professor.id) === String(professorId)){
                    var updatedCourseList = professor.course_list ? [...professor.course_list] : [];
                    updatedCourseList.push(name)

                    updateProfessor({professorCode: professorId, course_list:updatedCourseList})
                }
            }
        }
    };

    // JSX structure for the Addcourse component
    return (
        <div className={style["form"]}>
            {/* Title for the course registration form */}
            <h2 className={style["title2"]}>Register Course</h2>

            {/* Input field for the course name */}
            <div className={style["form-control"]}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            {/* Input field for the number of units */}
            <div className={style["form-control"]}>
                <input type="number" placeholder="Number of Units" value={numberOfUnits} onChange={(e) => setNumberOfUnits(e.target.value)} />
            </div>

            {/* Dropdown for selecting the professor */}
            <div className={style["form-control"]}>
                <select value={professorId} onChange={(e) => setProfessorId(e.target.value)}>
                    {/* Default option for selecting a professor */}
                    <option value="" selected>Select Professor</option>

                    {/* Mapping through the list of professors and creating options for each */}
                    {professors?.length &&
                        professors.map((professor) => (
                            <option value={professor.id} key={professor.id}>{professor.id} {professor.family}</option>
                        ))
                    }
                </select>
            </div>

            {/* Button for submitting the form */}
            <div className={style["form-control"]}>
                <button className={`${style["btn"]} ${style["btn-success"]}`} onClick={handleSubmit}>Register Course</button>
            </div>
        </div>
    );
}

// Exporting the Addcourse component
export default Addcourse;
