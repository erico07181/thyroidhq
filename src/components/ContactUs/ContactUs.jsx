import {
  Container,
  Card,
  Col,
  Text,
  Row,
  Input,
  Spacer,
} from "@nextui-org/react";

function ContactUs() {
  return (
    <Container fluid>
      <Card variant="flat" width="100%" css={{ backgroundColor: "red" }}>
        <Row>
          <Container fluid css={{ display: "flex", minHeight: "100vh" }}>
            <Col css={{ display: "flex" }}>
              <Text h1>Contact Us</Text>
              <Input></Input>
            </Col>
          </Container>
          <Container
            css={{ backgroundColor: "green", minHeight: "100vh" }}
          ></Container>
        </Row>
      </Card>
    </Container>
  );
}

export default ContactUs;
