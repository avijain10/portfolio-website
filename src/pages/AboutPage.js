import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

function AboutPage(props) {
  return (
    <div
      style={{
        textAlign: "center",

        marginBottom: "50px",

        background: "#090815",
        color: "white",
      }}
    >
      <h1 className="display-3">WHO AM I?</h1>
      <br /> <br />
      <h3 className="display-5">
        I am a computer grad student still persuing my Bachelors in Computer
        Applications. I love exploring new fields and always want to do
        something new and unique.
      </h3>
      <h3 className="display-5">
        If you want to connect with me and explore new things togther, write me
        back.
      </h3>
      <br /> <br /> <br /> <br /> <br />
      <h1 className="display-3">WHAT I DO?</h1>
      <br /> <br />
      <h3 className="display-5">Here are some of my works:</h3>
      <br />
      <CardDeck>
        <Card style={{ width: "100px", height: "150px" }}>
          <Card.Body>
            <Card.Title>Photography</Card.Title>
            <Card.Text>a</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Wb Development</Card.Title>
            <Card.Text>a</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Blogging</Card.Title>
            <Card.Text>a</Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
}

export default AboutPage;
