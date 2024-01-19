// Importing React module from 'react' library
import React from "react";

// Importing the 'AddCourse' and 'CourseList' components
import AddCourse from "./AddCourse";
import CourseList from "./CoursesList";

// Importing the CSS module for styling
import style from "../../styles/style.module.css";

// Functional component for managing courses
const ManageCourses = () => {
  return (
    // Container for managing courses
    <div>
      {/* Component for displaying the list of courses */}
      <CourseList />
      
      {/* Divider line for visual separation */}
      <hr className={style["divider-hr"]} />
      
      {/* Component for adding a new course */}
      <AddCourse />
    </div>
  );
};

// Exporting the ManageCourses component
export default ManageCourses;
