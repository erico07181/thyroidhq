import { Card, Container, Text } from "@nextui-org/react";

export default function Vision() {
  return (
    <Container
      css={{
        maxWidth: "100%",
        justifyContent: "center",
        alignContent: "center",
        display: "flex",
        flexDirection: "column",
        paddingTop: "10vh",
      }}
    >
      <Card
        css={{
          background: "#FAFAFA",
          boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
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
            }}
          >
            Our Vision
          </Text>
        </Card.Header>
        <Container
          css={{
            maxWidth: "100%",
            justifyContent: "center",
            alignContent: "center",
            display: "flex",
            paddingTop: "1vh",
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
        </Container>
        <Container
          css={{
            maxWidth: "90vh",
            justifyContent: "center",
            alignContent: "center",
            display: "flex",
            paddingTop: "2vh",
          }}
        >
          <Text
            h2
            css={{
              color: "#666666",
              fontWeight: "400",
              justifyContent: "center",
              alignContent: "center",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            Our vision at ThyroidHQ is to empower individuals with accessible
            and affordable at-home testing options, community support, and
            educational resources. We put people over profit and are dedicated
            to improving the hypothyroid healthcare experience.
          </Text>
        </Container>
      </Card>
    </Container>
  );
}
