// Importing React library for creating React components
import React from "react";

// Importing CSS module for styling
import style from "../styles/style.module.css";

// Functional component for the home page
function Home() {
  return (
    // JSX structure for the home page component
    <div className={style["component-box"]}>
      {/* Heading for the home page */}
      <h1 className={style["title1"]}>Main Page</h1>
    </div>
  );
}

// Exporting the Home component for use in other parts of the application
export default Home;
