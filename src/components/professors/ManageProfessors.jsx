// Importing React module from 'react' library
import React from "react";

// Importing the 'ProfessorList' and 'AddProfessor' components
import ProfessorList from "./ProfessorsList";
import AddProfessor from "./AddProfessor";

// Importing the CSS module for styling
import style from "../../styles/style.module.css";

// Functional component for managing professors
const ManageProfessors = () => {
  return (
    // Container for managing professors
    <div>
      {/* Component for displaying the list of professors */}
      <ProfessorList />
      
      {/* Divider line for visual separation */}
      <hr className={style["divider-hr"]} />
      
      {/* Component for adding a new professor */}
      <AddProfessor />
    </div>
  );
};

// Exporting the ManageProfessors component
export default ManageProfessors;
