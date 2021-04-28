import React, { Component } from "react";
import { Link } from "react-scroll";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

class NavBar extends Component {
  render() {
    return (
      <>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="light "
          className="font-weight-bold h5 flex-row d-flex fixed-top"
          variant="light"
        >
          <Nav className="justify-content-center">
            <Navbar.Toggle aria-controls="responsive-navbar-nav fixed-top " />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto  ">
                <Link activeClass="active" to="home" spy={true} smooth={true}>
                  <Nav.Link className=" mx-5 ">HOME</Nav.Link>
                </Link>
                <Link to="about" spy={true} smooth={true}>
                  <Nav.Link className="mx-5">ABOUT</Nav.Link>
                </Link>
                <Link to="service" spy={true} smooth={true}>
                  <Nav.Link className=" mx-5">RESUME</Nav.Link>
                </Link>
              </Nav>
              <Nav>
                <Link to="contact" spy={true} smooth={true}>
                  <Nav.Link className="mx-5">PROJECTS</Nav.Link>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Nav>
        </Navbar>
      </>
    );
  }
}
export default NavBar;
