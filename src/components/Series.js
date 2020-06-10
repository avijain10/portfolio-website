import React from "react";
import marsplay from "C:/Users/Avi/my_portfolio/src/components/mars.jpg";
import kohinoor from "C:/Users/Avi/my_portfolio/src/components/kohi.jpg";
import symbiosis from "C:/Users/Avi/my_portfolio/src/components/symbi.jpg";
import Blocks from "../components/Blocks";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Series extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: "0",
          title: "Internship at Marsplay",
          subTitle: "Digital Marketing Intern",
          imgSrc: marsplay,
          subMatter:
            "My work was there to market my brand and get more & more subscribers.",
          selected: false,
        },

        {
          id: "1",
          title: "Internship at Kohinoor",
          subTitle: "Digital Marketing Intern & Content Writer",
          imgSrc: kohinoor,
          subMatter:
            "My work was there to create blogs and help the company in marketing their product.",
          selected: false,
        },

        {
          id: "2",
          title: "Undergraduation at Symbiosis",
          subTitle: "Computer Grad Student",
          imgSrc: symbiosis,
          subMatter:
            "I am persuing my under-graduation studies in Computer applications.",
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id, Blocks) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });
    this.setState({
      items,
    });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Blocks
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Series;
