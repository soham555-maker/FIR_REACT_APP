import React from "react";
import logo from "../../public/logo.png";
import PropTypes from "prop-types";

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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores fugiat autem sunt ea corporis odio asperiores earum fuga necessitatibus aut.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam eveniet consequatur aspernatur doloribus perferendis, dolorem commodi! Numquam saepe ducimus est esse dolorem? Cumque sequi explicabo rem quod, recusandae earum quasi. Harum, hic illum accusantium nisi dolorum commodi eligendi quisquam ea earum explicabo optio reiciendis, laudantium exercitationem minus temporibus placeat quis?
          </p>
        </div>*/}

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid" >
          <a className="navbar-brand" href="/">
            <img src={logo} alt="" /> {props.title}
          </a>
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
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Contacts
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.PropTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "give Title here",
};
