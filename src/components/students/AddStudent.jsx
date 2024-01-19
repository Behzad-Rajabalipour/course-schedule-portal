// Importing React and useState hook from the 'react' library
import React, { useState } from 'react';

// Importing the 'useAddStudentMutation' hook from the studentsApi service
import { useAddStudentMutation } from '../../redux/services/studentsApi';

// Importing the CSS module for styling
import style from "../../styles/style.module.css"

// Functional component for adding a new student
const AddStudent = () => {
  // Destructuring the 'useAddStudentMutation' hook to get the mutation function
  const [addStudent] = useAddStudentMutation();
  
  // State variables for managing form inputs
  const [name, setName] = useState('');
  const [family, setFamily] = useState('');
  const [fieldOfStudy, setFieldOfStudy] = useState('');

  // Handling form submission
  const handleSubmit = () => {
    // Checking if all required fields are filled
    if (name && family && fieldOfStudy) {
      // Calling the 'addStudent' mutation function with the form data
      addStudent({ name, family, fieldOfStudy });
      
      // Clearing the form input fields after submission
      setName('');
      setFamily('');
      setFieldOfStudy('');
    }
  };

  // JSX structure for the AddStudent component
  return (
    <div className={style["form"]}>
      <h2 className={style["title2"]}>Add New Student</h2>
      
      {/* Form input for 'name' */}
      <div className={style["form-control"]}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      
      {/* Form input for 'family' */}
      <div className={style["form-control"]}>
        <input type="text" placeholder="Family" value={family} onChange={(e) => setFamily(e.target.value)} />
      </div>
      
      {/* Form input for 'fieldOfStudy' */}
      <div className={style["form-control"]}>
        <input type="text" placeholder="Major" value={fieldOfStudy} onChange={(e) => setFieldOfStudy(e.target.value)} />
      </div>
      
      {/* Form submission button */}
      <div className={style["form-control"]}>
        <button  className={`${style["btn"]} ${style["btn-success"]} `} onClick={handleSubmit}>Register Student</button>
      </div>
    </div>
  );
};

// Exporting the AddStudent component
export default AddStudent;
