"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Menu = require("./Menu");

var _Menu2 = _interopRequireDefault(_Menu);

var _data = require("../data.json");

var _menu = require("react-icons/lib/md/menu");

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/yeison/proyectos/site/components/Navigation.js";

exports.default = function () {
  return _react2.default.createElement("div", {
    "data-jsx": 3413587315,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement("div", { className: "menu-responsive", "data-jsx": 3413587315,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_menu2.default, { size: 40, color: "#aaa", id: "menu", __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  })), _react2.default.createElement("nav", {
    "data-jsx": 3413587315,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _data.menus.map(function (menu) {
    return _react2.default.createElement(_Menu2.default, (0, _extends3.default)({ key: menu.id }, menu, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }));
  })), _react2.default.createElement(_style2.default, {
    styleId: 3413587315,
    css: ".menu-responsive[data-jsx=\"3413587315\"] {cursor: pointer;}@media screen and (min-width: 769px) {.menu-responsive[data-jsx=\"3413587315\"] {display: none;}}nav[data-jsx=\"3413587315\"] {position: absolute;display: none;-webkit-flex-direction: column;-moz-flex-direction: column;flex-direction: column;align-items: center;justify-content: center;top: 72px;left: 0;background: #fff;width: 100%;-webkit-transition: all 0.5s ease;-moz-transition: all 0.5s ease;-ms-transition: all 0.5s ease;transition: all 0.5s ease;}@media screen and (min-width: 769px) {nav[data-jsx=\"3413587315\"] {display:-webkit-flex; display:flex;-webkit-flex-direction: row;-moz-flex-direction: row;flex-direction: row;justify-content: flex-end;align-items: center;position: static;height: 72px;padding: 0 0.3em;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2aWdhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZZ0IsQUFDTSx5Q0FDQSxnQkFDakIsQ0FDcUMsc0NBQ2xCLHlDQUNGLGNBQ2YsQ0FDRixDQUNJLDRCQUNnQixtQkFDTCxjQUNTLGtGQUNILG9CQUNJLHdCQUNkLFVBQ0YsUUFDUyxpQkFDTCxZQUNjLHlIQUMzQixDQUNxQyxzQ0FDL0IsNEJBQ1csbUNBQ00seUVBQ00sMEJBQ04sb0JBQ0gsaUJBQ0osYUFDSSxpQkFDbEIsQ0FDRiIsImZpbGUiOiJjb21wb25lbnRzL05hdmlnYXRpb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3llaXNvbi9wcm95ZWN0b3Mvc2l0ZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZW51IGZyb20gXCIuL01lbnVcIjtcbmltcG9ydCB7IG1lbnVzIH0gZnJvbSBcIi4uL2RhdGEuanNvblwiO1xuaW1wb3J0IE1lbnVJY29uIGZyb20gXCJyZWFjdC1pY29ucy9saWIvbWQvbWVudVwiO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LXJlc3BvbnNpdmVcIj5cbiAgICAgIDxNZW51SWNvbiBzaXplPXs0MH0gY29sb3I9XCIjYWFhXCIgaWQ9XCJtZW51XCIgLz5cbiAgICA8L2Rpdj5cbiAgICA8bmF2PlxuICAgICAge21lbnVzLm1hcChtZW51ID0+IDxNZW51IGtleT17bWVudS5pZH0gey4uLm1lbnV9IC8+KX1cbiAgICA8L25hdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgLm1lbnUtcmVzcG9uc2l2ZSB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gICAgICAubWVudS1yZXNwb25zaXZlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gICAgbmF2IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgdG9wOiA3MnB4O1xuICAgICAgbGVmdDogMDtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4gICAgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gICAgICBuYXYge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgICAgICBoZWlnaHQ6IDcycHg7XG4gICAgICAgIHBhZGRpbmc6IDAgMC4zZW07XG4gICAgICB9XG4gICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuIl19 */\n/*@ sourceURL=components/Navigation.js */"
  }));
};