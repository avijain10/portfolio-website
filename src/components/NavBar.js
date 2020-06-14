import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Container className="p-0" fluid={true}>
        <Navbar
          className="  navbar-dark bg-dark"
          expand="lg"
          bg="dark"
          style={{ top: "0%", position: "sticky" }}
        >
          <Navbar.Brand>
            <Link
              className="nav-link"
              to="/"
              style={{ textDecoration: "none", color: "white" }}
            >
              A V I - J A I N
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="mr-auto">
              <Link className="nav-link" to="/home">
                HOME
              </Link>
              <Link className="nav-link" to="/about">
                ABOUT ME
              </Link>
            </Nav>
            <Nav className="ml-auto">
              <Link className="nav-link" to="/internships">
                TIMELINE
              </Link>
              <Link className="nav-link" to="/projects">
                PROJECTS
              </Link>
            </Nav>
            <Nav>
              <NavDropdown title="CONTACT" id="collasible-nav-dropdown">
                <NavDropdown.Item
                  data-toggle="tooltip"
                  data-placement="right"
                  title="avijain10"
                  href="https://github.com/avijain10"
                >
                  GitHub
                </NavDropdown.Item>
                <NavDropdown.Item
                  data-toggle="tooltip"
                  data-placement="right"
                  title="a.v.i.jain"
                  href="https://www.instagram.com/a.v.i.jain/"
                >
                  Instagram
                </NavDropdown.Item>
                <NavDropdown.Item
                  data-toggle="tooltip"
                  data-placement="right"
                  title="avi.jain.5458"
                  href="https://www.facebook.com/avi.jain.5458/"
                >
                  Facebook
                </NavDropdown.Item>
                <NavDropdown.Item
                  data-toggle="tooltip"
                  data-placement="right"
                  title="mailto : avijain1001@gmail.com"
                  href="#"
                >
                  Email
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default NavBar;
