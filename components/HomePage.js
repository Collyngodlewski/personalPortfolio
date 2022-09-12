import { Container, Card, Row, Text, Spacer } from "@nextui-org/react";
import React from "react";
import TypewriterComponent from "typewriter-effect";

const HomePage = () => {
  return (
    <Container>
      <Spacer y={10} />

      <Row justify="center" align="center">
        <Text size={24} color="black" css={{ m: 0 }}>
          <TypewriterComponent
            options={{
              strings: ["Hello World"],
              autoStart: true,
              loop: true,
            }}
          />
        </Text>
      </Row>
      <Spacer y={4} />
      <Row justify="center" align="center">
      <Text size={28} color="black" css={{ m: 0 }}>
        Full Stack Web Developer
      </Text>
      </Row>
    </Container>
  );
};

export default HomePage;
