import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import ErrorPage from "./error-page";
import Textfield from "./routes/Textfield";
import About from "./routes/About";
import Alert from "./Components/Alert";
import { Form, Outlet, createBrowserRouter } from "react-router-dom";


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
        backgroundColor: "#000042",
        color: "white",
        border: "solid #000053 0.9px",
        // border: "solid white 1px",
        borderRadius: "5px",
      });
      document.body.style.backgroundColor = "#000042";
      // document.getElementById("#myInput").style.setProperty("--check-secondary", "#000042");
      document.title = "TextUtils -Home-DarkMode";
    } else {
      setMode("light");
      showAlert("Light mode Enabled", "success");
      setMainStyle({
        backgroundColor: "white",
        border: "solid #f9f1f1 0.9px",
        color: "black",
      });
      // document.getElementById("myInput").style.setProperty("--check-secondary", "grey")
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
        <Alert alertMsg={alertMsg}/>
        {/* <Alert alertMsg={alertMsg} /> */}
        <div>
          <Outlet context={[mainStyle, alertMsg]}/>
        </div>
      </div>
    </div>
  );
}

export { router }
export default App;
