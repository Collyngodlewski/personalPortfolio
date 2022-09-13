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
    <Grid.Container gap={1}  display="flex"  wrap="wrap" justify="space-around">
  
        <Grid sm={12} md={2}>
          <Card isPressable isHoverable  css={{ mw: "330px" }}>
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
        <Grid sm={12} md={2} >
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
    
     
        <Grid sm={12} md={2} >
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
        <Grid sm={12} md={2}>
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
  
     
        <Grid sm={12} md={2}>
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
        <Grid sm={12} md={2}>
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
     
     
    </Grid.Container>
  );
}

export default ProjectsPage;
