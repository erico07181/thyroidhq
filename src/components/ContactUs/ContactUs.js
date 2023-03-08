"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = void 0;
var _react = require("@nextui-org/react");
function ContactUs() {
  return /*#__PURE__*/ React.createElement(
    _react.Container,
    {
      fluid: true,
    },
    /*#__PURE__*/ React.createElement(
      _react.Card,
      {
        variant: "flat",
        width: "100%",
        css: {
          backgroundColor: "red",
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
              minHeight: "100vh",
            },
          },
          /*#__PURE__*/ React.createElement(
            _react.Col,
            {
              css: {
                display: "flex",
              },
            },
            /*#__PURE__*/ React.createElement(
              _react.Text,
              {
                h1: true,
              },
              "Contact Us"
            ),
            /*#__PURE__*/ React.createElement(_react.Input, null)
          )
        ),
        /*#__PURE__*/ React.createElement(_react.Container, {
          css: {
            backgroundColor: "green",
            minHeight: "100vh",
          },
        })
      )
    )
  );
}
var _default = ContactUs;
exports["default"] = _default;
