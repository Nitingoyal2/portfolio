import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "../styles/about.css";
import image from "../assests/images/nitin.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const About = () => {
  return (
    <>
      <div className="about-wrapper " id="about">
        <Container>
          <Row>
            <Col className="about-wrapper-image">
              <Image src={image} thumbnail />
            </Col>
            <Col>
              <h1 className="">About Me</h1>
              <p>
                My name is Nitin Kumar, I am a self-motivated web developer with
                a completed Master degree in Computer Application from Punjabi
                University Patiala. I am proficient in a variety of programming
                languages and technologies, including HTML, CSS,
                JavaScript,Bootstrap,React JS.I completed full stack web
                development Internship. During this Internship, I successfully
                created a dynamic Shark Tank named website on my own. I learned
                so much about web development during this internship, and I
                completed courses and earned certificates from top companies
                like Internshala. I am also a quick learner and am always eager
                to take on new challenges.My goal for the future is to become a
                leading web developer. I want to work on challenging projects
                that will allow me to use my skills and knowledge to the
                fullest. I also want to help others learn about web development
                and share my passion for the field. I am excited to continue my
                journey as a web developer and to use my skills to make a
                positive impact on the world.Now I'm working as a React Js
                Developer in Sunfocus Solution Private Limited(Modali).
              </p>

              <div class="social-icons-wrapper">
                <div class="icon instagram">
                  <div class="tooltip">Instagram</div>
                  <a
                    href="https://www.instagram.com/_goyal_nitin._02/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>
                      <InstagramIcon className="icons " />
                    </span>
                  </a>
                </div>
                <div class="icon github">
                  <div class="tooltip">Github</div>
                  <span>
                    <a
                      href="https://github.com/Nitingoyal2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon className="icons " />
                    </a>
                  </span>
                </div>
                <div class="icon youtube">
                  <div class="tooltip">LinkedIn</div>
                  <span>
                    {" "}
                    <a
                      href="https://www.linkedin.com/in/nitin-kumar-a77b181b1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedInIcon className="icons" />
                    </a>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default About;
