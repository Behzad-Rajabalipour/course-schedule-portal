// Importing React library and Component class for creating class-based React components
import React, { Component } from "react";

// Importing CSS module for styling
import style from "../styles/style.module.css";

// Class component for the 'Not Found' page
class NotFound extends Component {
  // Render method to define the component's UI
  render() {
    return (
      // JSX structure for the 'Not Found' page component
      <h1 className={style['not-found-message']}>Not Found</h1>
    );
  }
}

// Exporting the NotFound component for use in other parts of the application
export default NotFound;
