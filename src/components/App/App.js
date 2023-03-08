"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = App;
require("./App.css");
var _LandingPage = _interopRequireDefault(
  require("../LandingPage/LandingPage")
);
var _react = require("@nextui-org/react");
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var theme = (0, _react.createTheme)({
  type: "light",
  theme: {
    fonts: {
      euclid: "Euclid Circular B",
    },
  },
});
function App() {
  return /*#__PURE__*/ React.createElement(
    "div",
    {
      className: "App",
    },
    /*#__PURE__*/ React.createElement(_LandingPage["default"], null)
  );
}
