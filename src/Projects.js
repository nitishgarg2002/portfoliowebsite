import React, { Component } from "react";
import { Col, Image, Container, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import image from "./assets/1.png";
import ties from "./assets/2.png";
import news from "./assets/3.png";

class Projects extends Component {
  openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  render() {
    return (
      <div id="projects">
        <div style={{ height: "60px" }} />
        <Container className="text-left pl-3">
          <div className="h2 font-weight-bold">Projects</div>
          <Row className="mt-4">
            <Col sm={4}>
              <a href="https://github.com/nitishgarg2002/TIES">
                <Image
                  className="shadow"
                  src={image}
                  width="80%"
                  height="80%"
                />
              </a>
            </Col>
            <Col sm={4}>
              <a href="https://github.com/nitishgarg2002/covid19-VijayApp-1">
                <Image className="shadow" src={ties} width="80%" height="80%" />
              </a>
            </Col>
            <Col sm={4}>
              <a href="https://github.com/nitishgarg2002/flutter_news">
                <Image className="shadow" src={news} width="80%" height="80%" />
              </a>
            </Col>
          </Row>
        </Container>

        <Button
          onClick={() => this.openInNewTab("https://github.com/nitishgarg2002")}
          className="btn btn-dark"
        >
          View More on Github
        </Button>
      </div>
    );
  }
}

export default Projects;
