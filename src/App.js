import React, { Component } from "react";
import HomePage from "./pages/homepage.component.jsx";
import "./App.css";
import "./pages/homepage.styles.scss";
class App extends Component {
  // state = {  }
  render() {
    return (
      <div>
        <HomePage />
      </div>
    );
  }
}

export default App;
