import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import keralaTour from "../../Assets/Projects/img1.jfif";
import ToDo from "../../Assets/Projects/img2.png";
import Grocery from "../../Assets/Projects/img3.webp";
import Ecommerce from "../../Assets/Projects/img4.jfif";
import Library from "../../Assets/Projects/img5.jpg";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={keralaTour}
              isBlog={false}
              title="Kerala tourism"
              description="Kerala Tourism Website Frontend with validation Html, CSS, Bootstrap, Javascript. Users can view all districts and important attractions of each districts.."
              link="https://github.com/gijigeorge07/kerala-Tourism-validate"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Blog App"
              description="A blog app build with MERN stack which takes the content from makdown files and renders it using React.js. Supports dark mode and easy to write blogs using markdown."
              link="https://github.com/gijigeorge07/Blog-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ToDo}
              isBlog={false}
              title="ToDo App"
              description="A ToDo App developed to list out all day to day activities, After successful login, user can enter dashboard. Created using ajax, json, bootstrap, js, html, css. "
              link="https://github.com/gijigeorge07/ToDo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Grocery}
              isBlog={false}
              title="Grocery List"
              description="A Grocery list implementation with Ajax and json , Fetch json data using Ajax  and display it in  Html tables."
              link="https://gijigeorge07.github.io/Grocery-List/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecommerce}
              isBlog={false}
              title="E-Commerce"
              description="Ecommerce application to view products and purchase, frontend developed using Bootstrap, html, css"
              link="https://github.com/gijigeorge07/E-Commerce_Bootstrap"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Library}
              isBlog={false}
              title="Library Application"
              description="A Library App developed using MERN Stack . User can register and login, admin can  do all crud operations"
              link="https://github.com/gijigeorge07/LibraryApp-CaseStudy2"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
