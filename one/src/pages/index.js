import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles/style.css";
function Home() {
  return (
<div className="body">
    <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link to="/about" className="navbar-brand">
      About
    </Link>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <Link to="/about" className="nav-link">
            <span className="sr-only">(current)</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/portfolio" className="nav-link">
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </Navbar>


    <div className="vw-100">
      <div className="vh-100">
        {/* <!-- As a heading --> */}

        <div className="container">
          <div className="row">
            <div className="col-sm-7 col-md-7">
              <figure className="box box1">
                <h1>About Me</h1>
                <img
                  src="https://placekitten.com/150/150"
                  alt="cat"
                  className="image"
                ></img>
                <p>
                  I am Jeremy I am a junior web developer this webiste was made
                  using react.
                </p>
                <p>
                  Please feel free to click around and enjoy yourself, this site
                  is always being updated, with the best I have to offer.
                </p>
              </figure>
            </div>
            <div className="col-sm-5 col-md-5"></div>
          </div>
        </div>
       </div>
      </div>
      <footer className="fixed-bottom bg-dark"></footer>
    </div>
  );
}
export default Home;
