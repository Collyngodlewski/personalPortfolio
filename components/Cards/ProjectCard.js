import { Button, Card, Col, Row, Text } from "@nextui-org/react";

export const ProjectCard = () => (
  <Card
    align="center"
    // isPressable
    isHoverable
    variant="bordered"
    css={{ mw: "400px" }}
  >
    <Card.Header css={{ background: "white"  }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="black">
          Potluck Planner
        </Text>
        <Text h4 color="black">
          Frontend
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src="https://i.imgur.com/WDpfgQu.jpg"
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
        <a href="https://github.com/Build-Week-ft-potluck-planner-8/front-end"target="_blank" rel="noreferrer">Github</a>
        </Button>
        <Button size="sm" color="dark">
        <a href="https://front-end-pearl-eight.vercel.app/" target="_blank" rel="noreferrer">Website</a>
        </Button>
      </Row>
    </Card.Footer>
  </Card>
);
