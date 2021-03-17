import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../assets/img/profile/profile.webp";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image
                  className="profile justify-content-end"
                  alt="profile"
                  src={Profile}
                  thumbnail
                  fluid
                />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hello, I'm <strong>&nbsp;Amol Jore</strong>
                <br />
                <p>
                  I'm a Software Engineer specialized in Web application
                  development, having fluent knowledge in the ReactJS library
                  and developed many web applications from various domains such
                  as (Payment-Paypal, eCommerce-Website & ToDo App & MERN
                  applications) In terms of the Web framework having experience
                  in both back-end and front-end development, developed many
                  full-stack based web application using Node.js, React.js &
                  MongoDB.
                </p>
                <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a
                      href="https://drive.google.com/drive/u/1/folders/19qjPU2u5mZZgTrnAiUjXlP_o440Szh5q"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-primary">
                        Certificates
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://drive.google.com/file/d/1Gg9s04DhBaKrg9lFTYYDvo1ygIi3Q_1N/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-success">
                        Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/amoljore7"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/amol-jore-833bb1152/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
