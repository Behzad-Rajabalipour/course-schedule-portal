// Importing React module from the 'react' library
import React from 'react';

// Importing the 'StudentList' and 'AddStudent' components
import StudentList from './StudentsList';
import AddStudent from './AddStudent';

// Importing the CSS module for styling
import style from '../../styles/style.module.css'

// Functional component for managing students
const ManageStudents = () => {
  return (
    // Container for managing students
    <div>
      {/* Component for displaying the list of students */}
      <StudentList/>

      {/* Divider line for visual separation */}
      <hr className={style["divider-hr"]}/>
      
      {/* Component for adding a new student */}
      <AddStudent/>
    </div>
  )
}

// Exporting the ManageStudents component
export default ManageStudents;
