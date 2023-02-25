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
import React, { useState } from "react";

function Waitlist() {
  const [userEmail, setUserEmail] = useState("");
  const [sentEmail, setSentEmail] = useState();
  const [errors, setErrors] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);
  const [form, setForm] = useState({
    email: "null",
  });

  const emailRegex = /[^@]+@[^@]+\.[^@]+/;

  function validateEmail(email) {
    return String(email).toLowerCase().match(emailRegex);
  }

  const onChange = (event) => {
    if (event.target?.name === "email") {
      if (!validateEmail(event.target.value)) {
        setErrors((e) => ({ ...e, email: "Please enter a valid email." }));
      } else {
        setUserEmail(event.target.value);
        setIsDisabled(false);
        delete errors.email;
      }
    }
  };

  const handleOnSubmit = async (e) => {
    fetch(
      "https://t2ji24x1v8.execute-api.us-east-1.amazonaws.com/default/orderNowSignUp",
      {
        mode: "no-cors",
        method: "POST",
        header: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          senderEmail: userEmail,
        }),
      }
    ).then(function (response) {
      console.log(response.status);
      if (response.status == 0) {
        setSentEmail(true);
      }
    });
  };

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
        {sentEmail ? "Success! You have signed up :)" : <br></br>}
        <Row justify="center" align="center">
          <Input
            width="60%"
            size="xl"
            name="email"
            placeholder="Enter your email"
            onChange={onChange}
          ></Input>
          <Button
            auto
            onPress={handleOnSubmit}
            css={{
              backgroundColor: "#b65a60",
              height: "3.6vw",
            }}
            disabled={isDisabled}
          >
            Join Waitlist
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Waitlist;
