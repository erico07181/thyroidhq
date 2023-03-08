"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = Nav;
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@nextui-org/react");
var _thqLogoNo_background = _interopRequireDefault(
  require("../../assets/thq-logo-no_background.svg")
);
var _material = require("@mui/material");
var _system = require("@mui/system");
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function Nav() {
  return /*#__PURE__*/ _react["default"].createElement(
    _material.AppBar,
    {
      sx: {
        background: "#F9F5EB",
      },
      position: "static",
    },
    /*#__PURE__*/ _react["default"].createElement(
      _material.Toolbar,
      {
        sx: {
          height: "4.5vh",
          justifyContent: "space-between",
        },
      },
      /*#__PURE__*/ _react["default"].createElement(
        "div",
        {
          style: {
            display: "flex",
          },
        },
        /*#__PURE__*/ _react["default"].createElement(
          _react2.Link,
          {
            style: {
              display: "flex",
              alignItems: "center",
              marginRight: "2vw",
              color: "black",
              fontFamily: "DM Sans",
            },
          },
          /*#__PURE__*/ _react["default"].createElement("img", {
            src: _thqLogoNo_background["default"],
            width: "50vw",
            style: {
              marginLeft: "5vw",
            },
          }),
          /*#__PURE__*/ _react["default"].createElement(
            "h3",
            {
              style: {
                margin: "0",
                marginTop: "0.15vw",
                fontFamily: "'Euclid Circular B', sans-serif",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "24px",
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              },
              to: "/",
            },
            "ThyroidHQ"
          )
        )
      ),
      /*#__PURE__*/ _react["default"].createElement(
        "div",
        {
          style: {
            justifyContent: "right",
            marginTop: "3px",
          },
        },
        /*#__PURE__*/ _react["default"].createElement(
          _system.Stack,
          {
            direction: "row",
            spacing: 4,
          },
          /*#__PURE__*/ _react["default"].createElement(
            _react2.Button,
            {
              size: "sm",
              light: true,
              color: "error",
              css: {
                color: "black",
              },
              auto: true,
            },
            "Our App"
          ),
          /*#__PURE__*/ _react["default"].createElement(
            _react2.Button,
            {
              size: "sm",
              light: true,
              color: "error",
              css: {
                color: "black",
              },
              auto: true,
            },
            "Our Sercice"
          ),
          /*#__PURE__*/ _react["default"].createElement(
            _react2.Button,
            {
              size: "sm",
              light: true,
              color: "error",
              css: {
                color: "black",
              },
              auto: true,
            },
            "Contact Us"
          ),
          /*#__PURE__*/ _react["default"].createElement(
            _react2.Button,
            {
              size: "sm",
              css: {
                background: "#B65A60",
              },
            },
            "Sign Up"
          )
        )
      )
    )
  );
}
