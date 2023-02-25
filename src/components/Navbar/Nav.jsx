import React from "react";

import { Navbar, Button, Link } from "@nextui-org/react";
import Logo from "../../assets/thq-logo-no_background.svg";
import { AppBar, Toolbar } from "@mui/material";
import { Stack } from "@mui/system";

export default function Nav() {
  return (
    <AppBar sx={{ background: "#F9F5EB" }} position="static">
      <Toolbar sx={{ height: "4.5vh", justifyContent: "space-between" }}>
        <div style={{ display: "flex" }}>
          <Link
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "2vw",
              color: "black",
              fontFamily: "DM Sans",
            }}
          >
            <img src={Logo} width="50vw" style={{ marginLeft: "5vw" }}></img>
            <h3
              style={{
                margin: "0",
                marginTop: "0.15vw",
                fontFamily: "'Euclid Circular B', sans-serif",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "24px",
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}
              to="/"
            >
              ThyroidHQ
            </h3>
          </Link>
        </div>
        <div style={{ justifyContent: "right", marginTop: "3px" }}>
          <Stack direction="row" spacing={4}>
            <Button size="sm" light color="error" css={{ color: "black" }} auto>
              Our App
            </Button>
            <Button size="sm" light color="error" css={{ color: "black" }} auto>
              Our Sercice
            </Button>
            <Button size="sm" light color="error" css={{ color: "black" }} auto>
              Contact Us
            </Button>
            <Button size="sm" css={{ background: "#B65A60" }}>
              Sign Up
            </Button>
          </Stack>
        </div>
      </Toolbar>
    </AppBar>
  );
}
