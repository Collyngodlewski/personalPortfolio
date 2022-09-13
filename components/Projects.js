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
import { ProjectCard } from "./ProjectCard.js";

function ProjectsPage() {
  return (
    <Grid.Container gap={2} display="flex" justify="space-evenly"  wrap="wrap" >
      <Col>
      <Row justify="center">
      
      <Grid xs={12} sm={6} lg={2}>
      <ProjectCard/>
      </Grid>
      <Grid xs={12} sm={6} lg={2}>
      <ProjectCard />
      </Grid>
      </Row>
      </Col>
      <Col>
      <Row justify="center">
      
      <Grid xs={12} sm={6} lg={2}>
      <ProjectCard/>
      </Grid>
      <Grid xs={12} sm={6} lg={2}>
      <ProjectCard />
      </Grid>
      </Row>
      </Col>
     
   
    </Grid.Container>
    // <Container gap={0}  display="flex"  >
    //   <Row >
    //     <Col>
    //       <Card isPressable isHoverable >
    //         <Card.Header>
    //           <Text b>Meow 1</Text>
    //         </Card.Header>
    //         <Card.Divider />
    //         <Card.Body css={{ py: "$10" }}>
    //           <Text>This is my first project</Text>
    //         </Card.Body>
    //         <Card.Divider />
    //         <Card.Footer>
    //           <Row justify="flex-end">
    //             <Button size="sm" light>
    //               Github
    //             </Button>
    //             <Button size="sm" color="black">
    //               Website
    //             </Button>
    //           </Row>
    //         </Card.Footer>
    //       </Card>
    //       </Col>
    //     <Col>
    //       <Card isPressable isHoverable >
    //         <Card.Header>
    //           <Text b>Meow 1</Text>
    //         </Card.Header>
    //         <Card.Divider />
    //         <Card.Body css={{ py: "$10" }}>
    //           <Text>This is my second project</Text>
    //         </Card.Body>
    //         <Card.Divider />
    //         <Card.Footer>
    //           <Row justify="flex-end">
    //             <Button size="sm" light>
    //               Github
    //             </Button>
    //             <Button size="sm" color="black">
    //               Website
    //             </Button>
    //           </Row>
    //         </Card.Footer>
    //       </Card>
    //       </Col>
    //     </Row>
  //   </Container>
  );
}

export default ProjectsPage;
