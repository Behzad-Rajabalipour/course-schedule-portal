// Importing React module and useState hook from 'react' library
import React, { useState } from 'react';

// Importing the 'useAddProfessorMutation' hook from professorsApi service
import { useAddProfessorMutation } from "../../redux/services/professorsApi";

// Importing the CSS module for styling
import style from "../../styles/style.module.css";

// Functional component for adding a new professor
const AddProfessor = () => {
    // Destructuring the 'useAddProfessorMutation' hook to get the mutation function
    const [addProfessor] = useAddProfessorMutation();
    
    // State variables for managing form inputs
    const [personnelId, setPersonnelId] = useState("");
    const [name, setName] = useState("");
    const [family, setFamily] = useState("");
    const [courseList, setCourseList] = useState("");

    // Handling form submission
    const handleSubmit = () =>{
        // Checking if all required fields are filled
        if (name && family && courseList && personnelId){
            // Splitting the 'courseList' string into an array of courses
            const course_list = courseList.split("-");
            
            // Calling the 'addProfessor' mutation function with the form data
            addProfessor({name, family, course_list, personnelId});
            
            // Clearing the form input fields after submission
            setName("");
            setFamily('');
            setCourseList('');
            setPersonnelId('');
        }
    };

    // JSX structure for the AddProfessor component
    return (
        <div className={style["form"]}>
            <h2 className={style["title2"]}>Register New Professor</h2>
            
            {/* Form input for 'personnelId' */}
            <div className={style["form-control"]}>
                <input type="text" placeholder='Personnel Id' value={personnelId} onChange={(e)=>setPersonnelId(e.target.value)}/>
            </div>
            
            {/* Form input for 'name' */}
            <div className={style["form-control"]}>
                <input type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            
            {/* Form input for 'family' */}
            <div className={style["form-control"]}>
                <input type="text" placeholder='Family' value={family} onChange={(e)=>setFamily(e.target.value)}/>
            </div>
            
            {/* Form input for 'courseList' */}
            <div className={style["form-control"]}>
                <input type="text" placeholder='Course List' value={courseList} onChange={(e)=>setCourseList(e.target.value)}/>
            </div>
            
            {/* Form submission button */}
            <div className={style["form-control"]}>
                <button className={`${style["btn"]} ${style["btn-success"]}`} onClick={handleSubmit}>Register Professor</button>
            </div>
        </div>
    );
}

// Exporting the AddProfessor component
export default AddProfessor;
