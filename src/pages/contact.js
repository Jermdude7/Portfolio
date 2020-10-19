import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles/style.css";
function Contact() {
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
              <Link to="/index" className="nav-link">
                Home
              </Link>
            </li>
          </ul>
        </div>
      </Navbar>

      <div className="vh-100">
        <div className="vw-100"></div>
        <b>Email:</b>
        <a
          className="btn btn-primary"
          href="mailto:Jeremys.g.greenfield@gmail.com"
          role="button"
        >
          Jeremys Email
        </a>
        <div className="container">
          <div className="row">
            <div className="col-sm-7 col-md-8">
              <form>
                <div className="form-group">
                  <h6>Name</h6>
                  <label htmlFor="formGroupExampleInput"></label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Name"
                  ></input>
                  <div className="form-group">
                    <h6>Email</h6>
                    <label htmlFor="formGroupExampleInput2"></label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput2"
                      placeholder="Email"
                    ></input>

                    <div className="form-group">
                      <h6>Message</h6>
                      <label htmlFor="formGroupExampleInput2"></label>
                      <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput2"
                        placeholder="Message"
                      ></input>
                      <button type="button" className="btn btn-info">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <footer className="fixed-bottom bg-dark"></footer>
    </div>
  );
}
export default Contact;
