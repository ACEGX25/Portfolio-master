import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import todo from "../../Assets/Projects/todo.png";
import snake from "../../Assets/Projects/snake.png";
import weather from "../../Assets/Projects/weather.png";
import background from "../../Assets/Projects/background.png";
import chat from "../../Assets/Projects/chat.png";
import quiz from "../../Assets/Projects/quiz.png";

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
              imgPath={background}
              isBlog={false}
              title="FilmFinder"
              description="Film Finder is a site where you can search for any movie to get detailed information including plot summaries, cast and crew details, ratings, reviews, and much more, all powered by IMDb. Discover a world of movies with FILM FINDER."
              ghLink="https://github.com/ACEGX25/FilmFinder-Using-Java"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="Quiz Application "
              description="This repository contains the source code for a Quiz Application built using Java, Apache Tomcat, Servlets, HTML, CSS, and JavaScript."
              ghLink="https://github.com/ACEGX25/Quiz-application-using-java"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Personal Weather Application"
              description=" Personal Weather Application, the Java web application provides real-time weather updates by integrating various technologies such as JSP, Servlets, the OpenWeather API, Apache Tomcat server, Java I/O, Jakarta EE, JSON, and Gson. Additionally, it features a user-friendly interface designed with HTML and CSS."
              ghLink="https://github.com/ACEGX25/Myweatherapplication"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="TO-DO-APPLICATON"
              description="This project is a simple and interactive TO DO List application built using HTML, CSS, and JavaScript. It allows users to add, delete, and mark tasks as complete, providing a streamlined way to manage daily tasks."
              ghLink="https://github.com/ACEGX25/TO-DO--APPLICATION"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Chat Application Using Java"
              description="ChatApp, a real-time chat room application built using Java and Spring Boot WebSocket. This application allows users to log in with a username and communicate with each other in real-time through a modern, intuitive interface."
              ghLink="https://github.com/ACEGX25/Chat-Application-Using-Java"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snake}
              isBlog={false}
              title="Snake Game"
              description="This is a classic Snake Game implemented using Java, JavaFX, and Swing. The game involves controlling a snake to eat food, grow in length, and avoid collisions with the walls and itself."
              ghLink="https://github.com/ACEGX25/snake-game"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
