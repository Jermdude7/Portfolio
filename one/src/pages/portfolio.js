import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles/style.css";
function Portfolio() {
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
              <Link to="/index" className="nav-link">
                Home
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
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <h1>Portfolio</h1>
                <figure className="box box2"></figure>
                <figure className="box box2"></figure>
                <figure className="box box2"></figure>
                <figure className="box box2"></figure>
                <figure className="box box2"></figure>
                <div className="col-md-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="fixed-bottom bg-dark"></footer>
    </div>
  );
}
export default Portfolio;
