import React from "react";
// import { Form } from "react-router-dom";
import logo from "../assets/logo.png";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <div>
      {/* <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.<br></br>
          This is the edited <code>src/App.js</code>.
        </p> */}

      {/* <nav>
          <ul>
            <li><img src={logo} alt="" /></li>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className="container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores fugiat autem sunt eLink corporis odio asperiores earum fugLink necessitatibus aut.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam eveniet consequatur aspernatur doloribus perferendis, dolorem commodi! Numquam saepe ducimus est esse dolorem? Cumque sequi explicabo rem quod, recusandae earum quasi. Harum, hic illum accusantium nisi dolorum commodi eligendi quisquam eLink earum explicabo optio reiciendis, laudantium exercitationem minus temporibus placeat quis?
          </p>
        </div>*/}

      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="" style={{borderRadius:"15px", width:"30px"}}/> {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              {/* <button className="btn btn-primary" type="submit">
                Search
              </button> */}
            </form>
            <div className="form-check form-switch" >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.onHandleModeChange}
              />
              <label
                className={`form-check-label text-${props.mode==="light"?"dark":"light"}`}
                htmlFor="flexSwitchCheckDefault"

              >
                Enable {props.mode==="light"?"dark":"light"} mode.
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: propTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "give Title here",
};
