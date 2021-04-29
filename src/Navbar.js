import React, { Component } from "react";
import { Link } from "react-scroll";
import { Navbar, Nav } from "react-bootstrap";

class NavBar extends Component {
  render() {
    return (
      <>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="light "
          className="font-weight-bold h5 fixed-top"
          variant="light"
        >
          <Nav className="justify-content-center">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto  ">
                <Link activeClass="active" to="home" spy={true} smooth={true}>
                  <Nav.Link className=" px-5 mx-5 ">NITISH GARG</Nav.Link>
                </Link>
                <Link to="about" spy={true} smooth={true}>
                  <Nav.Link className=" px-5 mx-5">ABOUT</Nav.Link>
                </Link>
                <Link to="resume" spy={true} smooth={true}>
                  <Nav.Link className=" px-5 mx-5">RESUME</Nav.Link>
                </Link>
              </Nav>
              <Nav>
                <Link to="projects" spy={true} smooth={true}>
                  <Nav.Link className=" px-5 mx-5">PROJECTS</Nav.Link>
                </Link>
              </Nav>
              <Nav>
                <Link to="contact" spy={true} smooth={true}>
                  <Nav.Link className=" px-5 mx-5">CONTACT</Nav.Link>
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
