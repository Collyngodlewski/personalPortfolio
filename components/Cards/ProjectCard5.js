import { Button, Card, Col, Row, Text } from "@nextui-org/react";

export const ProjectCard5 = () => (
  <Card
    align="center"
    // isPressable
    isHoverable
    variant="bordered"
    css={{ mw: "400px" }}
  >
    <Card.Header css={{background: "white"}}>
      <Col>
      <Text size={12} weight="bold" transform="uppercase" color="black">
          Personal Site
        </Text>
        <Text h4 color="black">
          Personal Portfolio
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src="https://i.imgur.com/VvQbYAf.jpg"
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
        <a href="https://github.com/Collyngodlewski/personal"target="_blank" rel="noreferrer">Github</a>
        </Button>
        <Button size="sm" color="dark">
        <a href="https://collyngodlewski.vercel.app/"target="_blank" rel="noreferrer">Website</a>
        </Button>
      </Row>
    </Card.Footer>
  </Card>
);
