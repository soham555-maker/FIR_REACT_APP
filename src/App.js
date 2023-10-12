import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Textfield from "./Components/Textfield";
import About from "./Components/About";
import Alert from "./Components/Alert";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Switch,
//   Route,
//   Outlet,
//   RouterProvider,
//   Link,
// } from "react-router-dom";

function App() {
  // routers
  // const first_router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path="/" element={<root />}>
  //       <Route index element={<Textfield
  //         mainStyle={mainStyle}
  //         heading="Enter the text to be Transformed"
  //         showAlert={showAlert}
  //       />}/>
  //       <Route path="/about" element={<About mainStyle={mainStyle} />}/>
  //     </Route>
  //   )
  // );

  // state-variablesy
  const [alertMsg, setAlert] = useState(null);
  const [mode, setMode] = useState("light");
  const [mainStyle, setMainStyle] = useState({
    backgroundColor: "white",
    color: "black",
  });

  // Functions
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const onHandleModeChange = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("Dark mode Enabled", "success");
      setMainStyle({
        backgroundColor: "#212529",
        color: "white",
        // border: "solid white 1px",
        borderRadius: "5px",
      });
      document.body.style.backgroundColor = "grey";
      document.title = "TextUtils -Home-DarkMode";
    } else {
      setMode("light");
      showAlert("Light mode Enabled", "success");
      setMainStyle({
        backgroundColor: "white",
        color: "black",
      });
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils -Home-LightMode";
    }
  };

  // const root = ()=>{
  //   return (
  //       <div>
  //         {/* <Navbar /> */}
  //         <Navbar
  //           title="TextUtils"
  //           mode={mode}
  //           onHandleModeChange={onHandleModeChange}
  //         />
  //         <Alert alertMsg={alertMsg} />
  //         <div>
  //           <Outlet />
  //         </div>
  //       </div>
  //   )
  // }

  return (
    <div className="universal-container">
      {/* <RouterProvider router={first_router}/> */}
      <div>
        {/* <Navbar /> */}
        <Navbar
          title="TextUtils"
          mode={mode}
          onHandleModeChange={onHandleModeChange}
        />
        <Alert alertMsg={alertMsg} />
        <div>
          <Textfield
            mainStyle={mainStyle}
            heading="Enter the text to be Transformed"
            showAlert={showAlert}
          />
          <About mainStyle={mainStyle} />
        </div>
      </div>
    </div>
  );
}

export default App;
