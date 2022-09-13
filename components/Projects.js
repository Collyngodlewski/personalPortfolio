import {
  Card,
  Col,
  Container,
  Row,
  Spacer,
  Text,
  Grid,
  Button,
} from "@nextui-org/react";
import React from "react";

function ProjectsPage() {
  return (
    <Grid.Container gap={2} justify="center">
      <Row justify="space-evenly">
        <Grid >
          <Card isPressable isHoverable css={{ mw: "330px" }}>
            <Card.Header>
              <Text b>Meow 1</Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body css={{ py: "$10" }}>
              <Text>This is my first project</Text>
            </Card.Body>
            <Card.Divider />
            <Card.Footer>
              <Row justify="flex-end">
                <Button size="sm" light>
                  Github
                </Button>
                <Button size="sm" color="black">
                  Website
                </Button>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
        <Grid >
          <Card isPressable isHoverable css={{ mw: "330px" }}>
            <Card.Header>
              <Text b>Meow 1</Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body css={{ py: "$10" }}>
              <Text>This is my second project</Text>
            </Card.Body>
            <Card.Divider />
            <Card.Footer>
              <Row justify="flex-end">
                <Button size="sm" light>
                  Github
                </Button>
                <Button size="sm" color="black">
                  Website
                </Button>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      </Row>
      <Row justify="space-evenly">
        <Grid >
          <Card isPressable isHoverable css={{ mw: "330px" }}>
            <Card.Header>
              <Text b>Meow 1</Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body css={{ py: "$10" }}>
              <Text>This is my third project</Text>
            </Card.Body>
            <Card.Divider />
            <Card.Footer>
              <Row justify="flex-end">
                <Button size="sm" light>
                  Github
                </Button>
                <Button size="sm" color="black">
                  Website
                </Button>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
        <Grid >
          <Card isPressable isHoverable css={{ mw: "330px" }}>
            <Card.Header>
              <Text b>Meow 1</Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body css={{ py: "$10" }}>
              <Text>This is my fourth project</Text>
            </Card.Body>
            <Card.Divider />
            <Card.Footer>
              <Row justify="flex-end">
                <Button size="sm" light>
                  Github
                </Button>
                <Button size="sm" color="black">
                  Website
                </Button>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      </Row>
      <Row justify="space-evenly">
        <Grid >
          <Card isPressable isHoverable css={{ mw: "330px" }}>
            <Card.Header>
              <Text b>Meow 1</Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body css={{ py: "$10" }}>
              <Text>This is my fifth project</Text>
            </Card.Body>
            <Card.Divider />
            <Card.Footer>
              <Row justify="flex-end">
                <Button size="sm" light>
                  Github
                </Button>
                <Button size="sm" color="black">
                  Website
                </Button>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
        <Grid >
          <Card isPressable isHoverable css={{ mw: "330px" }}>
            <Card.Header>
              <Text b>Meow 1</Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body css={{ py: "$10" }}>
              <Text>This is my sixth project</Text>
            </Card.Body>
            <Card.Divider />
            <Card.Footer>
              <Row justify="flex-end">
                <Button size="sm" light>
                  Github
                </Button>
                <Button size="sm" color="black">
                  Website
                </Button>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      </Row>
     
    </Grid.Container>
  );
}

export default ProjectsPage;
