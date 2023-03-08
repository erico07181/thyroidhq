"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = LandingPage;
var _react = require("@nextui-org/react");
var _thqLogoNo_background = _interopRequireDefault(
  require("../../assets/thq-logo-no_background.svg")
);
var _Nav = _interopRequireDefault(require("../Navbar/Nav"));
var _Waitlist = _interopRequireDefault(require("../Waitlist/Waitlist"));
var _ContactUs = _interopRequireDefault(require("../ContactUs/ContactUs"));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function LandingPage() {
  return /*#__PURE__*/ React.createElement(
    "div",
    {
      className: "App",
    },
    /*#__PURE__*/ React.createElement(_Nav["default"], null),
    /*#__PURE__*/ React.createElement(
      _react.Container,
      {
        fluid: true,
        css: {
          maxWidth: "100%",
          justifyContent: "center",
          alignContent: "center",
          display: "flex",
          flexDirection: "column",
        },
      },
      /*#__PURE__*/ React.createElement(
        _react.Container,
        {
          css: {
            maxWidth: "100%",
            justifyContent: "center",
            alignContent: "center",
            display: "flex",
            width: "114vh",
          },
        },
        /*#__PURE__*/ React.createElement("img", {
          src: _thqLogoNo_background["default"],
          style: {
            display: "flex",
            paddingTop: "8vw",
            height: "16vw",
            width: "25vw",
          },
        })
      ),
      /*#__PURE__*/ React.createElement(
        _react.Container,
        {
          css: {
            maxWidth: "100%",
            justifyContent: "center",
            alignContent: "center",
            display: "flex",
            paddingTop: "2vw",
          },
        },
        /*#__PURE__*/ React.createElement(
          _react.Text,
          {
            h1: true,
            css: {
              fontStyle: "normal",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
            },
          },
          "Our Mission"
        )
      ),
      /*#__PURE__*/ React.createElement(
        _react.Container,
        {
          css: {
            maxWidth: "100%",
            justifyContent: "center",
            alignContent: "center",
            display: "flex",
            paddingTop: "1.5vh",
          },
        },
        /*#__PURE__*/ React.createElement(
          _react.Card,
          {
            css: {
              background: "#333333",
              width: "10vh",
              height: "1vh",
              justifyContent: "center",
              alignContent: "center",
            },
          },
          /*#__PURE__*/ React.createElement(_react.Card.Body, null)
        ),
        /*#__PURE__*/ React.createElement(
          _react.Container,
          {
            css: {
              maxWidth: "100%",
              justifyContent: "center",
              alignContent: "center",
              display: "flex",
              paddingTop: "2vh",
            },
          },
          /*#__PURE__*/ React.createElement(
            _react.Text,
            {
              h2: true,
              css: {
                color: "#666666",
                fontWeight: "400",
              },
            },
            "Our mission is to make living with hypothyroidism easier."
          )
        )
      )
    ),
    /*#__PURE__*/ React.createElement(
      _react.Container,
      {
        css: {
          maxWidth: "100%",
          justifyContent: "center",
          alignContent: "center",
          display: "flex",
          flexDirection: "column",
          paddingTop: "10vh",
        },
      },
      /*#__PURE__*/ React.createElement(
        _react.Card,
        {
          css: {
            background: "#FAFAFA",
            boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
          },
        },
        /*#__PURE__*/ React.createElement(
          _react.Card.Header,
          {
            css: {
              maxWidth: "100%",
              justifyContent: "center",
              alignContent: "center",
              display: "flex",
            },
          },
          /*#__PURE__*/ React.createElement(
            _react.Text,
            {
              h1: true,
              css: {
                fontStyle: "normal",
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              },
            },
            "Our Vision"
          )
        ),
        /*#__PURE__*/ React.createElement(
          _react.Container,
          {
            css: {
              maxWidth: "100%",
              justifyContent: "center",
              alignContent: "center",
              display: "flex",
              paddingTop: "1vh",
            },
          },
          /*#__PURE__*/ React.createElement(
            _react.Card,
            {
              css: {
                background: "#333333",
                width: "10vh",
                height: "1vh",
                justifyContent: "center",
                alignContent: "center",
              },
            },
            /*#__PURE__*/ React.createElement(_react.Card.Body, null)
          )
        ),
        /*#__PURE__*/ React.createElement(
          _react.Container,
          {
            css: {
              maxWidth: "90vh",
              justifyContent: "center",
              alignContent: "center",
              display: "flex",
              paddingTop: "2vh",
            },
          },
          /*#__PURE__*/ React.createElement(
            _react.Text,
            {
              h2: true,
              css: {
                color: "#666666",
                fontWeight: "400",
                justifyContent: "center",
                alignContent: "center",
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              },
            },
            "Our vision at ThyroidHQ is to empower individuals with accessible and affordable at-home testing options, community support, and educational resources. We put people over profit and are dedicated to improving the hypothyroid healthcare experience."
          )
        )
      )
    ),
    /*#__PURE__*/ React.createElement(
      _react.Container,
      {
        fluid: true,
        css: {
          paddingTop: "10vh",
        },
      },
      /*#__PURE__*/ React.createElement(
        _react.Card,
        {
          variant: "flat",
          width: "100%",
          css: {
            backgroundColor: "#FFFFFF",
          },
        },
        /*#__PURE__*/ React.createElement(
          _react.Row,
          null,
          /*#__PURE__*/ React.createElement(
            _react.Container,
            {
              fluid: true,
              css: {
                display: "flex",
              },
            },
            /*#__PURE__*/ React.createElement(
              _react.Col,
              {
                css: {
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                },
              },
              /*#__PURE__*/ React.createElement(
                _react.Text,
                {
                  h1: true,
                },
                "Our Story"
              )
            ),
            /*#__PURE__*/ React.createElement(
              _react.Container,
              {
                css: {
                  maxWidth: "100%",
                  justifyContent: "center",
                  alignContent: "center",
                  display: "flex",
                  paddingTop: "2vh",
                },
              },
              /*#__PURE__*/ React.createElement(
                _react.Card,
                {
                  css: {
                    background: "#333333",
                    width: "10vh",
                    height: "1vh",
                    justifyContent: "center",
                    alignContent: "center",
                  },
                },
                /*#__PURE__*/ React.createElement(_react.Card.Body, null)
              )
            ),
            /*#__PURE__*/ React.createElement(
              _react.Container,
              {
                css: {
                  maxWidth: "90vh",
                  justifyContent: "center",
                  alignContent: "center",
                  display: "flex",
                  paddingTop: "2vh",
                  maxHeight: "100%",
                },
              },
              /*#__PURE__*/ React.createElement(
                _react.Text,
                {
                  h2: true,
                  css: {
                    color: "#666666",
                    fontWeight: "400",
                    justifyContent: "center",
                    alignContent: "center",
                    display: "block",
                    alignItems: "center",
                    textAlign: "center",
                    wordWrap: "break-word",
                    lineHeight: "1.5em",
                  },
                },
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit"
              )
            )
          ),
          /*#__PURE__*/ React.createElement(
            _react.Container,
            {
              css: {
                minHeight: "100vh",
                justifyContent: "center",
                alignContent: "center",
                display: "flex",
                paddingTop: "15vh",
                background: "#FFFFFF",
                boxShadow: "0",
              },
            },
            /*#__PURE__*/ React.createElement(_react.Card, {
              css: {
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                background: "#D9D9D9",
                width: "54vh",
                height: "90vh",
                boxShadow: "0px",
                borderRadius: "0",
              },
            })
          )
        )
      )
    ),
    /*#__PURE__*/ React.createElement(
      _react.Container,
      {
        fluid: true,
        css: {
          maxWidth: "100%",
          justifyContent: "center",
          alignContent: "center",
          display: "flex",
          flexDirection: "column",
        },
      },
      /*#__PURE__*/ React.createElement(
        _react.Card,
        {
          css: {
            background: "#FAFAFA",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "5px",
          },
        },
        /*#__PURE__*/ React.createElement(
          _react.Container,
          {
            css: {
              maxWidth: "100%",
              justifyContent: "center",
              alignContent: "center",
              display: "flex",
              width: "114vh",
            },
          },
          /*#__PURE__*/ React.createElement("img", {
            src: _thqLogoNo_background["default"],
            style: {
              display: "flex",
              paddingTop: "8vw",
              height: "16vw",
              width: "25vw",
            },
          })
        ),
        /*#__PURE__*/ React.createElement(
          _react.Container,
          {
            css: {
              maxWidth: "30%",
              justifyContent: "center",
              alignContent: "center",
              display: "flex",
              paddingTop: "2vw",
            },
          },
          /*#__PURE__*/ React.createElement(
            _react.Text,
            {
              h1: true,
              css: {
                fontFamily: "Euclid Circular B",
                fontStyle: "normal",
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                fontWeight: "700",
                lineHeight: "81px",
              },
            },
            "Ready to learn more about your thyroid?"
          )
        )
      )
    ),
    /*#__PURE__*/ React.createElement(_Waitlist["default"], null),
    /*#__PURE__*/ React.createElement(_ContactUs["default"], null)
  );
}
