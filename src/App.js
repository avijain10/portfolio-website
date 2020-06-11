import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Scroll from "./components/Scroll";
import Footer from "./components/Footer";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import InternshipsPage from "./pages/InternshipsPage";
import ProjectsPage from "./pages/ProjectsPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Avi Jain",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Internships", path: "/internships" },
        { title: "Projects", path: "/projects" },
        { title: "Contact", path: "/contact" },
      ],

      home: {
        title: "THE SECRET OF GETTING AHEAD IS GETTING STARTED !! ",
      },

      about: {
        title: "About ",
      },

      internships: {
        title: "Internships ",
      },

      projects: {
        title: "Projects ",
      },

      contact: {
        title: "Contact ",
      },
    };
  }
  render() {
    return (
      <div>
        <Scroll>
          <Router>
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
                    <Link className="nav-link" to="/">
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
                        className="hover-text"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="mailto: avijain1001@gmail.com"
                        href="#"
                      >
                        Email
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>

              <Route
                path="/"
                exact
                render={() => (
                  <HomePage
                    title={this.state.home.title}
                    subTitle={this.state.home.subTitle}
                    text={this.state.home.text}
                  />
                )}
              />

              <Route
                path="/about"
                exact
                render={() => <AboutPage title={this.state.about.title} />}
              />

              <Route
                path="/internships"
                exact
                render={() => (
                  <InternshipsPage title={this.state.internships.title} />
                )}
              />

              <Route
                path="/projects"
                exact
                render={() => (
                  <ProjectsPage title={this.state.projects.title} />
                )}
              />
            </Container>
          </Router>
        </Scroll>
        <Footer />
      </div>
    );
  }
}

export default App;
