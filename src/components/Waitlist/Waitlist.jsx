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
import { fontFamily } from "@mui/system";

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
    <Card
      css={{
        boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
        backgroundColor: "#FAFAFA",
        height: "70vh",
        maxWidth: "100%",
      }}
    >
      <Card.Header
        css={{
          maxWidth: "100%",
          justifyContent: "center",
          alignContent: "center",
          display: "flex",
        }}
      >
        <Text
          h1
          css={{
            fontStyle: "normal",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            paddingTop: "10vh",
          }}
        >
          Join Our Mailing Waitlist
        </Text>
      </Card.Header>

      <Container fluid>
        {sentEmail ? "Success! You have signed up :)" : <br></br>}
        <Row justify="center" align="center">
          <Input
            width="45%"
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
              width: "20vh",
            }}
            disabled={isDisabled}
          >
            Join Waitlist
          </Button>
        </Row>
      </Container>
      <Container
        css={{
          maxWidth: "100%",
          justifyContent: "center",
          alignContent: "center",
          display: "flex",
          paddingTop: "1vh",
          flexDirection: "column",
        }}
      >
        <Text css={{ color: "white" }}>HHHH</Text>
        <Text
          h2
          css={{
            color: "#666666",
            fontWeight: "400",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            maxWidth: "60%",
          }}
        >
          When you join our mailing list, you’ll get first access to special
          sales, exciting product updates, and thyroid-function educational
          content, all for free.
        </Text>
      </Container>
    </Card>
  );
}

export default Waitlist;
