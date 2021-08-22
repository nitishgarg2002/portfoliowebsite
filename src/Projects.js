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
        <Container style={{}} className=" container-fluid">
          <div className="h2 font-weight-bold">My Projects</div>
          <hr
            style={{
              backgroundColor: "#fa8143",
              color: "#fa8143",
              height: 3,
              width: "10%",
            }}
          />
          <Row className="mt-4">
            <Col sm className="">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/nitishgarg2002/TIES"
              >
                <Image
                  className="shadow"
                  src={image}
                  width="80%"
                  height="80%"
                />
              </a>
            </Col>
            <Col sm className="">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/nitishgarg2002/covid19-VijayApp-1"
              >
                <Image className="shadow" src={ties} width="80%" height="80%" />
              </a>
            </Col>
            <Col sm className="">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/nitishgarg2002/flutter_news"
              >
                <Image className="shadow" src={news} width="80%" height="80%" />
              </a>
            </Col>
          </Row>
        </Container>

        <Button
          onClick={() => this.openInNewTab("https://github.com/nitishgarg2002")}
          className="btn "
          style={{
            backgroundColor: "#000000",
            borderColor: "#000000",
            marginTop: "0px",
            onMouseOver: " this.backgroundColor: '#ffffff'",
            onMouseOut: " backgroundColor: '#fa8143'",
            borderRadius: "0px",
          }}
        >
          View More on Github
        </Button>
      </div>
    );
  }
}

export default Projects;
