import { Button, Card, Col, Row, Text } from "@nextui-org/react";

export const ProjectCard2 = () => (
  <Card
    align="center"
    isPressable
    isHoverable
    variant="bordered"
    css={{ mw: "400px" }}
  >
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="white">
          Colly Crypto
        </Text>
        <Text h4 color="white">
          Web3 
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg"
      objectFit="fill"
      width="100%"
      height={340}
      alt="Card image background"
    />
    <Card.Footer
      css={{ position: "absolute", zIndex: 1, bottom: -4, background: "white" }}
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