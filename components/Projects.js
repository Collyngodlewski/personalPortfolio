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
import { ProjectCard } from "./Cards/ProjectCard.js";
import { ProjectCard2 } from "./Cards/ProjectCard2.js";
import { ProjectCard3 } from "./Cards/ProjectCard3.js";
import { ProjectCard4 } from "./Cards/ProjectCard4.js";
import { ProjectCard5 } from "./Cards/ProjectCard5.js";
import { ProjectCard6 } from "./Cards/ProjectCard6.js";

function ProjectsPage() {
  return (
    <Grid.Container gap={3} display="flex" justify="center" wrap="wrap">
      <Col>
        <Row display="flex" justify="center" wrap="wrap">
          <Grid xs={8} sm={5} md={3}  >
            <ProjectCard />
          </Grid>
          <Grid xs={8} sm={5} md={3} >
            <ProjectCard2 />
          </Grid>
        </Row>
      </Col>
      <Col>
        <Row justify="center" wrap="wrap">
          <Grid xs={8} sm={5} md={3} >
            <ProjectCard3 />
          </Grid>
          <Grid xs={8} sm={5} md={3}>
            <ProjectCard4 />
          </Grid>
        </Row>
      </Col>
      <Col>
        <Row justify="center" wrap="wrap">
          <Grid xs={8} sm={5} md={3} >
            <ProjectCard5 />
          </Grid>
          <Grid xs={8} sm={5} md={3}>
            <ProjectCard6 />
          </Grid>
        </Row>
      </Col>
    </Grid.Container>
  );
}

export default ProjectsPage;
