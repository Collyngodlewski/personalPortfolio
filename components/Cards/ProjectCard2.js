import { Button, Card, Col, Row, Text } from "@nextui-org/react";

export const ProjectCard2 = () => (
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
          Colly Crypto
        </Text>
        <Text h4 color="black">
          Web3 
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src="https://i.imgur.com/KPdUPvh.jpg"
      objectFit="cover"
      width="100%"
      height={340}
      alt="Card image background"
    />
    <Card.Footer
      css={{ background: "white" }}
    >
      <Row justify="space-evenly" wrap="wrap">
        <Button size="sm" flat color="primary" auto>
        <a href="https://github.com/Collyngodlewski/collycrypto"target="_blank" rel="noreferrer">Github</a>
        </Button>
        <Button size="sm" color="dark">
        <a href="https://collycrypto.com" target="_blank" rel="noreferrer">Website</a>
        </Button>
      </Row>
    </Card.Footer>
  </Card>
);
