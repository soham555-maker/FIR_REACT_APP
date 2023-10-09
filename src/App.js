import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
// import Textfield from "./Components/Textfield";
import About from "./Components/About";

class App extends Component {
  render() {

    return (
      <div className="universal-container">
        {/* <Navbar /> */}
        <Navbar title="TextUtils" />
        <div >
          {/* <Textfield heading="Enter the text to be Transformed" /> */}
          <About />
        </div>
      </div>
    );
  }
}

export default App;
