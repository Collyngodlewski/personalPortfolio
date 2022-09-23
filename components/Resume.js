import { Card, Container, Row } from "@nextui-org/react";
import React from "react";
// import { collyn } from '../assests/Collyn.Godlewski.pdf'
function Resume() {
  return (
    <Container>
      <Row justify="center" >
        <iframe
          src="https://drive.google.com/file/d/1EtLG-aH-gmrd_2knulpPsh0JvZPunJCl/preview"
          width="640"
          height="900"
          allow="autoplay"
        ></iframe>
      </Row>
    </Container>
  );
}

export default Resume;
