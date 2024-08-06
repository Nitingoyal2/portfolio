import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import "../styles/project.css";
import sharktank from "../assests/images/shark_tank.png";
import musicmix from "../assests/images/music_mix.png";
import currencychange from "../assests/images/currency_change.png";

const Project = () => {
  return (
    <div className="project-wrapper" id="project">
      <Container>
        <div className="projects">
          <p className="project-wrapper-header">Projects</p>
          <Row className="project-wrapper-header-row">
            <Row className="project-wrapper-header-row-row">
              <Col className="project-wrapper-header-row-row-image">
                <Image src={sharktank} thumbnail />
              </Col>
              <Col className="project-wrapper-header-row-row-description">
                <p className="project-number">Project 1</p>
                <p className="project-name">Shark Tank Website</p>
                <p className="project-description">
                  Shark Tank is a Investing Platform Website where people Find
                  Investors for taking investments for their Business or
                  startups and Investors Find People or business to invest in
                  their business. they can contact each other for Deal.
                  Technologies used - HTML, CSS, Bootstrap, JavaScript, JQUERY,
                  SQL, Node.js, Ajax, Angular.{" "}
                </p>
                <a
                  href="https://github.com/Nitingoyal2/shark_tank"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="button">View Project</Button>
                </a>
              </Col>
            </Row>
            <Row className="project-wrapper-header-row-row">
              <Col className="project-wrapper-header-row-row-description">
                <p className="project-number">Project 2</p>
                <p className="project-name">Music Mix Website</p>
                <p className="project-description">
                  At Music Mix, we're passionate about music, and our platform
                  is designed to cater to all your musical needs, whether you're
                  a casual listener or a hardcore music aficionado. With a vast
                  collection of songs spanning diverse genres, eras, and
                  cultures, there's something for everyone here.A music website
                  serves as a digital platform for music enthusiasts to explore,
                  discover, and enjoy various genres, artists, albums, and
                  tracks.
                </p>
                <a
                  href="https://github.com/Nitingoyal2/music_mix"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="button">View Project</Button>
                </a>
              </Col>
              <Col className="project-wrapper-header-row-row-image">
                <Image src={musicmix} thumbnail />
              </Col>
            </Row>
          </Row>
        </div>
        <div className="web-page-design">
          <p className="project-wrapper-header">Web Page Design</p>
          <Row className="project-wrapper-header-row">
            <Row className="project-wrapper-header-row-row">
              <Col className="project-wrapper-header-row-row-image">
                <Image src={currencychange} thumbnail />
              </Col>
              <Col className="project-wrapper-header-row-row-description">
                <p className="project-number">Web Page Design 1</p>
                <p className="project-name">Currency Converter</p>
                <p className="project-description">
                  A currency converter is a digital tool designed to facilitate
                  the conversion of one currency to another based on current
                  exchange rates. It enables users to quickly and accurately
                  determine the equivalent value of a specific amount in
                  different currencies, aiding in international transactions,
                  travel planning, and financial management. Technologies used -
                  HTML, CSS, Bootstrap, JavaScript, ReactJS{" "}
                </p>
                <a
                  href="https://nitingoyal2.github.io/currencyconverter/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="button">View Project</Button>
                </a>
              </Col>
            </Row>
            {/* <Row className='project-wrapper-header-row-row'>
                            <Col className='project-wrapper-header-row-row-description'>
                                <p className='project-number'>Project 2</p>
                                <p className='project-name'>Music Mix Website</p>
                                <p className='project-description'>At Music Mix, we're passionate about music, and our platform is designed to cater to all your musical needs, whether you're a casual listener or a hardcore music aficionado. With a vast collection of songs spanning diverse genres, eras, and cultures, there's something for everyone here.A music website serves as a digital platform for music enthusiasts to explore, discover, and enjoy various genres, artists, albums, and tracks.</p>
                                <a href="https://github.com/Nitingoyal2/music_mix" target="_blank" rel="noopener noreferrer"><Button className='button'>View Project</Button></a>
                            </Col>
                            <Col className='project-wrapper-header-row-row-image'>
                                <Image src={musicmix} thumbnail />
                            </Col>

                        </Row> */}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Project;
