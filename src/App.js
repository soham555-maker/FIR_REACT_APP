import React, {useState} from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Textfield from "./Components/Textfield";
import About from "./Components/About";

function App(){
    const [mode, setMode] = useState("light");
    const [mainStyle, setMainStyle] = useState({
      backgroundColor: "white",
      color: "black",
    });
    const onHandleModeChange = ()=>{
      if (mode==="light"){
        setMode("dark");
        document.body.style.backgroundColor = 'grey';
        setMainStyle({
          backgroundColor: "#212529",
          color: "white",
          // border: "solid white 1px",
          borderRadius : "5px",
        });
      }else{
        setMode("light");
        document.body.style.backgroundColor = 'white';
        setMainStyle({
          backgroundColor: "white",
          color: "black",
        });
      };
    };

    // const onHandleModeChange = ()=>{
    //   if (mode==="light"){
    //     setMode("dark");
    //   }else{
    //     setMode("light");onHandleModeChange={onHandleModeChange}
    //   };
    // }

    return (
      <div className="universal-container">
        {/* <Navbar /> */}
        <Navbar title="TextUtils" mode={mode} onHandleModeChange={onHandleModeChange}/>
        <div>
          <Textfield  mainStyle={mainStyle} heading="Enter the text to be Transformed"/>
          <About mainStyle={mainStyle}/>
        </div>
      </div>
    );
  }

export default App;
