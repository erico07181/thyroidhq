import React from "react";
import { Container, Text, Card } from "@nextui-org/react";

import Logo from "../../assets/thq-logo-no_background.svg";

export default function MissionStatement() {
  return (
    <Container
      fluid
      css={{
        maxWidth: "100%",
        justifyContent: "center",
        alignContent: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Container
        css={{
          maxWidth: "100%",
          justifyContent: "center",
          alignContent: "center",
          display: "flex",
          paddingTop: "2vw",
          width: "114vh",
        }}
      >
        <img
          src={Logo}
          style={{
            display: "flex",
            paddingTop: "8vw",
            height: "16vw",
            width: "25vw",
          }}
        />
      </Container>

      <Container
        css={{
          maxWidth: "100%",
          justifyContent: "center",
          alignContent: "center",
          display: "flex",
          paddingTop: "2vw",
        }}
      >
        <Text
          h1
          css={{
            fontStyle: "normal",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          Our Mission
        </Text>
      </Container>
      <Container
        css={{
          maxWidth: "100%",
          justifyContent: "center",
          alignContent: "center",
          display: "flex",
          paddingTop: "1.5vh",
        }}
      >
        <Card
          css={{
            background: "#333333",
            width: "10vh",
            height: "1vh",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Card.Body />
        </Card>
        <Container
          css={{
            maxWidth: "100%",
            justifyContent: "center",
            alignContent: "center",
            display: "flex",
            paddingTop: "2vh",
          }}
        >
          <Text h2 css={{ color: "#666666", fontWeight: "400Working" }}>
            Our mission is to make living with hypothyroidism easier.
          </Text>
        </Container>
      </Container>
    </Container>
  );
}
