import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Geetesh Karjavkar </span>
            from <span className="purple"> Pune, India.</span>
            <br />
            I am currently pursuing BE from RMD Sinhgad School of Engineering, Warje, Pune. 
            {/* <br />
            I have completed Integrated MSc (IMSc) in Maths and Computing at BIT
            Mesra.
            <br /> */}
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Motorcycle Riding
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "THE ONLY THING CONSTANT IN LIFE IS CHANGE"{" "}
          </p>
          <footer className="blockquote-footer">UNKNOWN</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
