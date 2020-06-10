import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img from "C:/Users/Avi/my_portfolio/src/components/homepage1.jpg";

function HomeContent(props) {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100 h-50" src={img} alt="First slide" />
        <Carousel.Caption>
          <h1 className="display-2">Hi. I'm AVI.</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img} alt="Second slide" />

        <Carousel.Caption>
          <h1 className="display-2">I like to Read, Write and Draw.</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img} alt="Third slide" />

        <Carousel.Caption>
          <h1 className="display-2">I often Build.</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeContent;
