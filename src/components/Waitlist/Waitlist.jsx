import {
  Container,
  Card,
  Row,
  Text,
  Input,
  Button,
  Spacer,
} from "@nextui-org/react";
import Logo from "../../assets/thq-logo-no_background.svg";

function Waitlist() {
  return (
    <Container fluid css={{ maxWidth: "100%" }}>
      <Container
        css={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <img src={Logo} width="150vw" style={{ display: "flex" }} />
      </Container>
      <Card variant="flat">
        <Card.Body
          css={{
            backgroundColor: "white",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Text h1>Get yours today</Text>
          <Text
            h2
            css={{ fontSize: "2.5vw", color: "#666666", maxWidth: "75%" }}
          >
            The 1st online platform for minority patients with hypothyroidism{" "}
          </Text>
        </Card.Body>
      </Card>
      <Container fluid>
        <Row justify="center" align="center">
          <Input width="60%" size="xl" placeholder="Enter your email"></Input>
          <Button
            auto
            css={{
              backgroundColor: "#b65a60",
              height: "3.6vw",
            }}
          >
            Join Waitlist
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Waitlist;
