import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <div
      className="mt-5 footer-dark bg-dark text-light"
      style={{ bottom: "0%", position: "sticky" }}
    >
      <Container fluid={true}>
        <Row className=" justify-content-between p-3">
          <Col className="p-0" md={3} sm={12}>
            <a href="./" style={{ textDecoration: "none", color: "white" }}>
              {" "}
              A V I - J A I N
            </a>
          </Col>
          <Col className="p-0 d-flex justify-content-end" md={3}>
            Designed & Developed by Avi Jain.
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
