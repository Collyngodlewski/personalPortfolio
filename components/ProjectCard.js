import { Card, Col, Text } from "@nextui-org/react";

export const ProjectCard = () => (
  <Card
    align="center"
    isPressable
    isHoverable
    variant="bordered"
    css={{ mw: "400px" }}
  >
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          Projects
        </Text>
        <Text h4 color="white">
          Here will be my projects
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src="https://media.wnyc.org/i/320/320/l/80/1/blackbox.jpeg"
      objectFit="cover"
      width="100%"
      height={340}
      alt="Card image background"
    />
  </Card>
);
