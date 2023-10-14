import React, { useState } from "react";
import "./App.css";
import { Form } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ErrorPage from "./error-page";
import Textfield from "./routes/Textfield";
import About from "./routes/About";
// import Alert from "./Components/Alert";
import { Outlet, createBrowserRouter } from "react-router-dom";

// const [alertMsg, setAlert] = useState(null);

// Functions
// const showAlert = (message, type) => {
//   setAlert({
//     msg: message,
//     type: type,
//   });
//   setTimeout(() => {
//     setAlert(null);
//   }, 1500);
// };

const router = createBrowserRouter([
  {
    path: "/",
    element:<App /> ,
    errorElement:<ErrorPage />,
    children:[
      {
        path: "/",
        element:<Textfield />,
      },
      {
        path: "/about",
        element: <About />
      }
    ]
  },
]);


function App() {
  // state-variablesy
  const [mode, setMode] = useState("light");
  const [mainStyle, setMainStyle] = useState({
    backgroundColor: "white",
    color: "black",
  });
  const onHandleModeChange = () => {
    if (mode === "light") {
      setMode("dark");
      // showAlert("Dark mode Enabled", "success");
      setMainStyle({
        backgroundColor: "#212529",
        color: "white",
        // border: "solid white 1px",
        borderRadius: "5px",
      });
      document.body.style.backgroundColor = "#000042";
      document.title = "TextUtils -Home-DarkMode";
    } else {
      setMode("light");
      // showAlert("Light mode Enabled", "success");
      setMainStyle({
        backgroundColor: "white",
        color: "black",
      });
      document.body.style.backgroundColor = "#FFFFFF";
      document.title = "TextUtils -Home-LightMode";
    }
  };
  
  
  return (
    // <Router>{/* </Router> */}
    <div className="universal-container">
      {/* <RouterProvider router={first_router}/> */}
      <div>
        {/* <Navbar /> */}
        <Navbar
          title="TextUtils"
          mode={mode}
          onHandleModeChange={onHandleModeChange}
        />
        {/* <Alert alertMsg={alertMsg} /> */}
        <div>
          <Outlet context={[mainStyle]}/>
        </div>
      </div>
    </div>
  );
}

export { router }
export default App;
