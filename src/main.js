"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
var _App = _interopRequireDefault(require("./components/App/App"));
require("./index.css");
var _react2 = require("@nextui-org/react");
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
_client["default"]
  .createRoot(document.getElementById("root"))
  .render(
    /*#__PURE__*/ _react["default"].createElement(
      _react["default"].StrictMode,
      null,
      /*#__PURE__*/ _react["default"].createElement(
        _react2.NextUIProvider,
        null,
        /*#__PURE__*/ _react["default"].createElement(_App["default"], null)
      )
    )
  );
