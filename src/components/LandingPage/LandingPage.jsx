import { Card, Container, Text, Row, Col, Button } from "@nextui-org/react";
import Logo from "../../assets/thq-logo-no_background.svg";
import Insta from "../../assets/icons8-instagram.svg";
import Facebook from "../../assets/icons8-facebook.svg";
import Nav from "../Navbar/Nav.jsx";
import Waitlist from "../Waitlist/Waitlist.jsx";
import Footer from "../Footer/Footer";

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
                  h3
                  css={{
                    color: "#666666",
                    fontWeight: "400",
                    justifyContent: "center",
                    alignContent: "center",
                    display: "block",
                    alignItems: "center",
                    wordWrap: "break-word",
                    lineHeight: "1.5em",
                  }}
                >
                  At ThyroidHQ, we understand the struggles of living with
                  hypothyroidism all too well.
                </Text>
                <Text css={{ color: "white" }}>HHHH</Text>
                <Text
                  h3
                  css={{
                    color: "#666666",
                    fontWeight: "400",
                    justifyContent: "center",
                    alignContent: "center",
                    display: "block",
                    alignItems: "center",
                    wordWrap: "break-word",
                    lineHeight: "1.5em",
                  }}
                >
                  Our company was founded by three friends– all personally
                  affected by the condition– who are dedicated to making
                  personal healthcare cheaper, easier, and more accessible.
                </Text>
                <Text css={{ color: "white" }}>HHHH</Text>
                <Text
                  h3
                  css={{
                    color: "#666666",
                    fontWeight: "400",
                    justifyContent: "center",
                    alignContent: "center",
                    display: "block",
                    alignItems: "center",
                    wordWrap: "break-word",
                    lineHeight: "1.5em",
                  }}
                >
                  Founded in 2020 by three co-founders, Our team is constantly
                  searching for new ways to improve the current, outdated
                  thyroid healthcare experience, which is why we’ll be proud to
                  expand our services in the near future to deliver personalized
                  hypothyroidism treatment.
                </Text>
                <Text css={{ color: "white" }}>HHHH</Text>
                <Text
                  h3
                  css={{
                    color: "#666666",
                    fontWeight: "400",
                    justifyContent: "center",
                    alignContent: "center",
                    display: "block",
                    alignItems: "center",
                    wordWrap: "break-word",
                    lineHeight: "1.5em",
                  }}
                >
                  Together, we hope to help you take better control of your
                  hypothyroidism and pave the way for a healthier and happier
                  life.
                </Text>
              </Container>
            </Container>

            <Container
              css={{
                minHeight: "70vh",
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
                  height: "80vh",
                  boxShadow: "0px",
                  borderRadius: "10",
                }}
              ></Card>
            </Container>
          </Row>
        </Card>
      </Container>
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
        <Card
          css={{
            background: "#FAFAFA",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "5px",
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
              maxWidth: "40%",
              justifyContent: "center",
              alignContent: "center",
              paddingTop: "2vw",
              height: "40vh",
            }}
          >
            <Text
              h1
              css={{
                fontFamily: "Euclid Circular B",
                fontStyle: "normal",
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                fontWeight: "700",
                lineHeight: "81px",
                width: "100%",
              }}
            >
              Ready to learn more about your thyroid?
            </Text>
            <Button css={{ background: "#B65A60", width: "35vw" }}>
              <Text
                css={{
                  fontFamily: "Euclid Circular B",
                  fontStyle: "normal",
                  display: "flex",
                  fontWeight: "600",
                  maxWidth: "100%",
                  color: "white",
                }}
              >
                Order Your Test Kit
              </Text>
            </Button>
          </Container>
        </Card>
      </Container>
      <Container css={{ paddingBottom: "1vw" }}>
        <Container
          css={{
            maxWidth: "100%",
            justifyContent: "center",
            alignContent: "center",
            display: "flex",
            paddingTop: "5vw",
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
            Follow Us
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
              flexDirection: "row",
            }}
          >
            <a href="https://www.instagram.com/thyroidhq/" target="_blank">
              <img
                src={Insta}
                style={{
                  display: "flex",
                  height: "20vh",
                }}
              />
            </a>

            <img
              src={Facebook}
              style={{
                display: "flex",
                height: "20vh",
              }}
            ></img>
          </Container>
        </Container>
      </Container>
      <Container
        fluid
        css={{
          maxWidth: "100%",
          justifyContent: "center",
          alignContent: "center",
          display: "flex",
          flexDirection: "column",
          paddingBottom: "10vh",
        }}
      >
        <Waitlist />
      </Container>
      <Footer />
    </div>
  );
}
