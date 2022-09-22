import { Button, Card, Col, Row, Text } from "@nextui-org/react";

export const ProjectCard4 = () => (
  <Card
    align="center"
    // isPressable
    isHoverable
    variant="bordered"
    css={{ mw: "400px" }}
  >
    <Card.Header css={{ background: "white" }}>
      <Col>
      <Text size={12} weight="bold" transform="uppercase" color="black">
          Anytime Fitness
        </Text>
        <Text h4 color="black">
          Backend
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src="https://i.imgur.com/7Tqp60x.jpg"
      objectFit="fill"
      width="100%"
      height={340}
      alt="Card image background"
    />
        <Card.Footer
      css={{ background: "white" }}
    >
      <Row justify="space-evenly" wrap="wrap">
        <Button size="sm" flat color="primary" auto>
        <a href="https://github.com/Collyngodlewski/back-end" target="_blank" rel="noreferrer">Github</a>
        </Button>
        <Button disabled size="sm" color="dark">
        <a href="#" target="_blank" rel="noreferrer">Website</a>
        </Button>
      </Row>
    </Card.Footer>
  </Card>
);
