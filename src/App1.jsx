// Importing React and Component from the 'react' library
import React, { Component } from "react";

// Importing the CSS module for styling
import style from "./styles/style.module.css"; // style ha toye farzand ha nemiran, chon .module.css zadim

// Importing various components for routing and content management
import ManageCourses from "./components/courses/ManageCourses";
import ManageProfessors from "./components/professors/ManageProfessors";
import ManageStudents from "./components/students/ManageStudents";
import ManageUnitsSelection from "./components/unitsSelection/ManageUnitsSelection";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

// Importing necessary modules for React Router
import { Link, Routes, Route, Navigate } from "react-router-dom";

// Defining the main App component as a class component
class App1 extends Component {
  render() {
    return (
    // JSX fragment wrapping the entire component
      <>
        {/* Navigation bar */}
        <div className={style["navbar"]}>
          <ul className={style["nav"]}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/students">Students</Link>
            </li>
            <li>
              <Link to="/professors">Professors</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/selectunits">units</Link>
            </li>
          </ul>
        </div>

        {/* Content area with routes */}
        <div className={style.box1}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/students" element={<ManageStudents />}></Route>
            <Route path="/professors" element={<ManageProfessors />}></Route>
            <Route path="/courses" element={<ManageCourses />}></Route>
            <Route path="/selectunits" element={<ManageUnitsSelection />}></Route>
            <Route path="/not-found" element={<NotFound />}></Route>
            <Route path="/*" element={<Navigate to="/not-found" />}></Route>
          </Routes>
        </div>
      </>
    );
  }
}

// Exporting the main App component
export default App1;
