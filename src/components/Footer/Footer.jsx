import React from "react";

import { Navbar, Button, Link } from "@nextui-org/react";
import Insta from "../../assets/icons8-instagram.svg";
import { AppBar, Toolbar } from "@mui/material";
import { Stack } from "@mui/system";

export default function Footer() {
  return (
    <AppBar sx={{ background: "#F9F5EB" }} position="static">
      <Toolbar sx={{ height: "4.5vh", justifyContent: "space-between" }}>
        <div style={{ display: "flex" }}>
          <p
            style={{
              margin: "0",
              marginTop: "0.15vw",
              fontFamily: "'Euclid Circular B', sans-serif",
              fontStyle: "normal",
              color: "black",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            Copyright © 2023 | 2.1.0
          </p>
        </div>
        <div style={{ justifyContent: "right", marginTop: "3px" }}>
          <Stack direction="row" spacing={4}>
            <Button size="sm" light color="error" css={{ color: "black" }} auto>
              About Us
            </Button>
            <Button size="sm" light color="error" css={{ color: "black" }} auto>
              Terms and Conditions
            </Button>
            <Button size="sm" light color="error" css={{ color: "black" }} auto>
              Privacy Policy
            </Button>
            <Button size="sm" light color="error" css={{ color: "black" }} auto>
              Contact Us
            </Button>
            <Button size="sm" light color="error" css={{ color: "black" }} auto>
              Follow Us
              <img src={Insta} width="25vw" />
            </Button>
          </Stack>
        </div>
      </Toolbar>
    </AppBar>
  );
}
