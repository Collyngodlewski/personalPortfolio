import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  Textarea,
  Input,
  Button,
  Grid,
  Row,
  Col,
  Text,
  Card,
  Spacer,
  Link
} from "@nextui-org/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mjvlpwlk");
  if (state.succeeded) {
    return (
      <>
        <Spacer y={4} />
        <Row justify="center">
          <Text size={35} color="black" css={{ m: 0 }}>
            Thanks for reaching out!
          </Text>
        </Row>
        <Row justify="center">
        <Link color="dark" href="/contact">Back</Link>
        </Row>
      </>
    );
  }
  return (
    <>
      <Spacer y={4} />
      <Grid.Container justify="center">
        <form onSubmit={handleSubmit}>
          <Grid>
            <Card variant="bordered" css={{ mw: "330px" }}>
              <Card.Header>
                <Text b>Contact Me</Text>
              </Card.Header>
              <Card.Divider />
              <Card.Body css={{ py: "$10" }}>
                <Col>
                  <Row justify="space-between">
                    <Text size={15} color="black" css={{ m: 0 }}>
                      Name:
                    </Text>
                    <Spacer x={1} />
                    <Input
                      type="text"
                      id="Name"
                      name="Name"
                      placeholder="Name"
                      clearable
                      bordered
                    />
                  </Row>
                  <Spacer y={1} />
                  <Row justify="space-between">
                    <Text size={15} color="black" css={{ m: 0 }}>
                      Email:
                    </Text>
                    <Spacer x={1} />
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      clearable
                      bordered
                    />
                  </Row>
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                  <Spacer y={1} />
                  <Row justify="space-between">
                    <Text size={15} color="black" css={{ m: 0 }}>
                      Message:
                    </Text>
                    <Spacer x={2} />
                    <Textarea
                      placeholder="Please leave a message"
                      clearable
                      bordered
                    />
                  </Row>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </Col>
              </Card.Body>
              <Card.Divider />
              <Card.Footer>
                <Row justify="center">
                  <Button
                    size="sm"
                    color="dark"
                    type="submit"
                    disabled={state.submitting}
                  >
                    Submit
                  </Button>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        </form>
      </Grid.Container>
    </>
  );
};
export default ContactForm;
