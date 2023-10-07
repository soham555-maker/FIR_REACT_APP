import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Textfield from "./Components/Textfield";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Navbar /> */}
        <Navbar title="TextUtils" />
        <div className="container">
          <Textfield heading="Enter the text to be Transformed" />{" "}
        </div>
      </div>
    );
  }
}

export default App;
