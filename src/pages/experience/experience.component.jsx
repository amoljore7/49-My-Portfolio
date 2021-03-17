import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_GSLAb from "../../assets/img/experience/GS-Lab-Logo.jpg";
import L_k12 from "../../assets/img/experience/k12.png";
import L_MINDSTIX from "../../assets/img/experience/mindstix.jpg";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header
                as="h5"
                className="d-flex justify-content-center flex-wrap"
              >
                <a
                  href="https://www.gslab.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card.Img
                    variant="top"
                    className="img-resize"
                    src={L_GSLAb}
                    alt="logo"
                  />
                </a>
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">
                    Software Engineer
                  </Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">
                      MERN Stack Developer
                    </strong>
                    <br />
                    <strong>Technology:</strong> React JS, Redux-saga,
                    Redux-Thunk, Material-UI
                    <br />
                    <strong>Duration:</strong> March 2020 - Present
                    <br />
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li>
                        <strong>Developed &amp; enhanced</strong> multiple
                        features with customizability option across web
                        application.
                      </li>
                      <li>
                        <strong>Provided</strong> application maintenance while
                        working as `Production Support`.
                      </li>
                      <li>
                        <strong>Performed</strong> CRUD operations on multiple
                        databases to load/ remove data according to the business
                        requirements.
                      </li>
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}
                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
            <br></br>
            <Card>
              <Card.Header
                as="h5"
                className="d-flex justify-content-center flex-wrap"
              >
                <a
                  href="https://k12technoservices.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card.Img
                    variant="top"
                    className="img-resize"
                    src={L_k12}
                    alt="Accenture logo"
                  />
                </a>
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">
                    Front-End Developer
                  </Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <br />
                    <strong>Technology:</strong> React JS, Redux-Thunk,
                    Material-UI
                    <br />
                    <strong>Duration:</strong> October 2019 - February 2020
                    <br />
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li>
                        <strong>Developed Projects </strong>
                        i) cvBox (similar as naukri.com). ii) UDANTA (like
                        udemy)
                      </li>
                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
            <br></br>
            <Card>
              <Card.Header
                as="h5"
                className="d-flex justify-content-center flex-wrap"
              >
                <a
                  href="https://www.mindstix.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card.Img
                    variant="top"
                    className="img-resize"
                    src={L_MINDSTIX}
                    alt="Accenture logo"
                  />
                </a>
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Intern</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">
                      ReactJS Developer
                    </strong>
                    <br />
                    <strong>Technology:</strong> React JS, Redux-saga,
                    Redux-Thunk,
                    <br />
                    <strong>Duration:</strong> April 2019 - September 2019
                    <br />
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li>
                        <strong>Developed </strong>
                        Desktop Progressive Web App with Google Analytics and
                        Google Tag Manager. multiple features with app
                        intsallation option.
                      </li>
                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
