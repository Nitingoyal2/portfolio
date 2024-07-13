import React from "react";
import "../styles/skill.css";
import { Col, Container, Row } from "react-bootstrap";
import html from "../assests/images/html.png";
import css from "../assests/images/css-3.png";
import bootstrap from "../assests/images/bootstrap.png";
import javascript from "../assests/images/java-script.png";
import reactjs from "../assests/images/atom.png";
import microsoft from "../assests/images/office.png";
import AntdImg from "../assests/images/antd.png";
import ReduxImg from "../assests/images/redux.png";
const Skill = () => {
  return (
    <div className="skill-wrapper" id="skills">
      <Container>
        <p className="skill-wrapper-header">Skills</p>
        <div className="technical-skill-wrapper">
          <p className="technical-skill-wrapper-header">Technical Skills</p>
          <Row className="my-3">
            <Col className="technical-skill-wrapper-icon-image">
              <img src={html} alt="" />
              <p className="my-2">HTML</p>
            </Col>
            <Col className="technical-skill-wrapper-icon-image">
              <img src={css} alt="" />
              <p className="my-2">CSS</p>
            </Col>
            <Col className="technical-skill-wrapper-icon-image">
              <img src={bootstrap} alt="" />
              <p className="my-2">Bootstrap</p>
            </Col>
            <Col className="technical-skill-wrapper-icon-image">
              <img src={javascript} alt="" />
              <p className="my-2">JavaScript</p>
            </Col>
            <Col className="technical-skill-wrapper-icon-image">
              <img src={reactjs} alt="" />
              <p className="my-2">ReactJS</p>
            </Col>
            <Col className="technical-skill-wrapper-icon-image">
              <img src={AntdImg} alt="" />
              <p className="my-2">Antd</p>
              <span style={{ fontSize: "0.7rem", textAlign: "center" }}>
                (React UI Library)
              </span>
            </Col>
            <Col className="technical-skill-wrapper-icon-image">
              <img src={ReduxImg} alt="" />
              <p className="my-2">Redux</p>
              <span style={{ fontSize: "0.7rem", textAlign: "center" }}>
                (For State management)
              </span>
            </Col>
          </Row>
        </div>
        <div className="other-skill-wrapper">
          <p className="other-skill-wrapper-header">Other Skills</p>
          <Row className="my-3">
            <Col className="other-skill-wrapper-icon-image">
              <img src={microsoft} alt="" />
              <p className="my-2">MS Office</p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Skill;
