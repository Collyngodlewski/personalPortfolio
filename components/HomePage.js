import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Container, Card, Row, Text, Spacer, Link } from "@nextui-org/react";
import React from "react";
import TypewriterComponent from "typewriter-effect";

const HomePage = () => {
  return (
    <Container>
      <Spacer y={10} />

      <Row justify="center" align="center">
        <Text size={30} color="black" css={{ m: 0 }}>
          <TypewriterComponent
            options={{
              strings: ["Hello World!", "Full Stack Web Developer."],
              autoStart: true,
              loop: true,
            }}
          />
        </Text>
      </Row>
      <Spacer y={12} />
      <Row justify="center" align="center">
        <Link href="https://github.com/Collyngodlewski" target="_blank">
          <FontAwesomeIcon icon={faGithub} size="3x" color="black" />
        </Link>
        <Spacer x={2} />
        <Link
          href="https://www.linkedin.com/in/collyngodlewski/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} size="3x" color="black" />
        </Link>
      </Row>
    </Container>
  );
};

export default HomePage;
