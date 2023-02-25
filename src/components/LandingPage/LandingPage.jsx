import { Card, Container, Text, Row, Col } from "@nextui-org/react";
import Logo from "../../assets/thq-logo-no_background.svg";
import Nav from "../Navbar/Nav";
import Waitlist from "../Waitlist/Waitlist";
import ContactUs from "../ContactUs/ContactUs";

export default function LandingPage() {
  return (
    <div className="App">
      <Nav />
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
            <Text h2 css={{ color: "#666666", fontWeight: "400" }}>
              Our mission is to make living with hypothyroidism easier.
            </Text>
          </Container>
        </Container>
      </Container>
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
      <Container fluid css={{ paddingTop: "10vh" }}>
        <Card variant="flat" width="100%" css={{ backgroundColor: "#FFFFFF" }}>
          <Row>
            <Container fluid css={{ display: "flex" }}>
              <Col
                css={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <Text h1>Our Story</Text>
              </Col>
              <Container
                css={{
                  maxWidth: "100%",
                  justifyContent: "center",
                  alignContent: "center",
                  display: "flex",
                  paddingTop: "2vh",
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
                  maxHeight: "100%",
                }}
              >
                <Text
                  h2
                  css={{
                    color: "#666666",
                    fontWeight: "400",
                    justifyContent: "center",
                    alignContent: "center",
                    display: "block",
                    alignItems: "center",
                    textAlign: "center",
                    wordWrap: "break-word",
                    lineHeight: "1.5em",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.
                  Maecenas eget condimentum velit, sit amet feugiat lectus.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Praesent auctor purus luctus
                  enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus
                  ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel
                  bibendum lorem. Morbi convallis convallis diam sit
                </Text>
              </Container>
            </Container>

            <Container
              css={{
                minHeight: "100vh",
                justifyContent: "center",
                alignContent: "center",
                display: "flex",
                paddingTop: "15vh",
                background: "#FFFFFF",
                boxShadow: "0",
              }}
            >
              <Card
                css={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                  background: "#D9D9D9",
                  width: "54vh",
                  height: "90vh",
                  boxShadow: "0px",
                  borderRadius: "0",
                }}
              ></Card>
            </Container>
          </Row>
        </Card>
      </Container>
      <Waitlist />
      <ContactUs />
    </div>
  );
}
