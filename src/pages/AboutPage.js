import React from "react";
import Figure from "react-bootstrap/Figure";

import img1 from "C:/Users/Avi/my_portfolio/src/components/card1.jpg";
import img2 from "C:/Users/Avi/my_portfolio/src/components/card2.jpg";
import img3 from "C:/Users/Avi/my_portfolio/src/components/card3.jpg";

function AboutPage(props) {
  return (
    <div
      style={{
        textAlign: "center",
        marginBottom: "120px",
        background: "white",
        color: "#090815",
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
        If you want to connect with me and explore new things together, write me
        back.
      </h3>
      <br /> <br /> <br /> <br /> <br />
      <h1 className="display-3">WHAT I DO?</h1>
      <br /> <br />
      <h3 className="display-5">Here are some of my works:</h3>
      <br />
      <Figure>
        <Figure.Image width={171} height={180} alt="171x180" src={img1} />
        <Figure.Caption>
          <h2>Photography</h2>
          <h4>
            I have done photography at many events.
            <br />
            And i'm still learning new things about it.
          </h4>
        </Figure.Caption>
      </Figure>
      <br />
      <Figure>
        <Figure.Image width={171} height={180} alt="171x180" src={img2} />
        <Figure.Caption>
          <h2>Blogging</h2>

          <h4>
            I've written many blogs.
            <br />
            And now i've become so good that i <br />
            can write about anything in few minutes.
          </h4>
        </Figure.Caption>
      </Figure>
      <br />
      <Figure>
        <Figure.Image width={190} height={200} alt="171x180" src={img3} />
        <Figure.Caption>
          <h2>Web Development</h2>

          <h4>
            I've experience in building websites using
            <br />
            HTML,CSS,Javascript,
            <br />
            Bootstrap,React.
          </h4>
        </Figure.Caption>
      </Figure>
    </div>
  );
}

export default AboutPage;
