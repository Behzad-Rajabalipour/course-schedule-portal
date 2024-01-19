// Importing necessary React and ReactDOM modules
import React from "react";
import ReactDOM from "react-dom/client";

// Importing the main App component
import App from "./App1";

// Importing necessary modules for React Router and Redux
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

// Importing the Redux store
import store from "./redux/store";

// Creating a root for ReactDOM to render the main component
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the main App component wrapped in React Router and Redux Provider
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
