import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img from "C:/Users/Avi/my_portfolio/src/components/Blue Medical Conference Events Website.png";

function HomeContent(props) {
  return (
    <div>
      <Jumbotron className="bg-dark jumbotron-fluid text-light text-monospace  p-0  ">
        <Container fluid={true}>
          <Row className="justify-content-center">
            <Col md={5}>
              {props.title && <h1 className=" float-left">{props.title}</h1>}
            </Col>
          </Row>
          <img width={1650} height={700} src={img} fluid />
        </Container>
      </Jumbotron>
    </div>
  );
}

export default HomeContent;
