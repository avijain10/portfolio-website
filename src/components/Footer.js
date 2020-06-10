import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <div className="mt-5 footer-dark bg-dark text-light">
      <Container fluid={true}>
        <Row className="border-top justify-content-between p-3">
          <Col className="p-0" md={3} sm={12}>
            <a href="./home"> A V I - J A I N</a>
          </Col>
          <Col className="p-0 d-flex justify-content-end" md={3}>
            This site was made by Avi.
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
