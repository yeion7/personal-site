"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

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


var Navigation = function (_Component) {
  (0, _inherits3.default)(Navigation, _Component);

  function Navigation() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Navigation);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Navigation.__proto__ || (0, _getPrototypeOf2.default)(Navigation)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      show: false
    }, _this.handleMenu = function () {
      _this.setState({ show: !_this.state.show });
    }, _this.componentDidMount = function () {
      var windowWidth = window.innerWidth;
      if (windowWidth > 769) {
        _this.setState({ show: true });
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Navigation, [{
    key: "render",
    value: function render() {
      var show = this.state.show;

      return _react2.default.createElement("div", {
        "data-jsx": 2725659763,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement("div", { className: "menu-responsive", onClick: this.handleMenu, "data-jsx": 2725659763,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement(_menu2.default, { size: 40, color: "#aaa", id: "menu", __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      })), _react2.default.createElement("nav", { style: { display: show ? "flex" : "none" }, "data-jsx": 2725659763,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _data.menus.map(function (menu) {
        return _react2.default.createElement(_Menu2.default, (0, _extends3.default)({ key: menu.id }, menu, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        }));
      })), _react2.default.createElement(_style2.default, {
        styleId: 2725659763,
        css: ".menu-responsive[data-jsx=\"2725659763\"] {cursor: pointer;}@media screen and (min-width: 769px) {.menu-responsive[data-jsx=\"2725659763\"] {display: none;}}nav[data-jsx=\"2725659763\"] {position: absolute;display: none;-webkit-flex-direction: column;-moz-flex-direction: column;flex-direction: column;align-items: center;justify-content: center;top: 72px;left: 0;background: #fff;width: 100%;-webkit-transition: all 0.5s ease;-moz-transition: all 0.5s ease;-ms-transition: all 0.5s ease;transition: all 0.5s ease;}@media screen and (min-width: 769px) {nav[data-jsx=\"2725659763\"] {display:-webkit-flex; display:flex;-webkit-flex-direction: row;-moz-flex-direction: row;flex-direction: row;justify-content: flex-end;align-items: center;position: static;height: 72px;padding: 0 0.3em;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2aWdhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQm9CLEFBQ00seUNBQ0EsZ0JBQ2pCLENBQ3FDLHNDQUNsQix5Q0FDRixjQUNmLENBQ0YsQ0FDSSw0QkFDZ0IsbUJBQ0wsY0FDUyxrRkFDSCxvQkFDSSx3QkFDZCxVQUNGLFFBQ1MsaUJBQ0wsWUFDYyx5SEFDM0IsQ0FDcUMsc0NBQy9CLDRCQUNXLG1DQUNNLHlFQUNNLDBCQUNOLG9CQUNILGlCQUNKLGFBQ0ksaUJBQ2xCLENBQ0YiLCJmaWxlIjoiY29tcG9uZW50cy9OYXZpZ2F0aW9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95ZWlzb24vcHJveWVjdG9zL3NpdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTWVudSBmcm9tIFwiLi9NZW51XCI7XG5pbXBvcnQgeyBtZW51cyB9IGZyb20gXCIuLi9kYXRhLmpzb25cIjtcbmltcG9ydCBNZW51SWNvbiBmcm9tIFwicmVhY3QtaWNvbnMvbGliL21kL21lbnVcIjtcblxuY2xhc3MgTmF2aWdhdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHNob3c6IGZhbHNlXG4gIH07XG5cbiAgaGFuZGxlTWVudSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvdzogIXRoaXMuc3RhdGUuc2hvdyB9KTtcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICBjb25zdCB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGlmICh3aW5kb3dXaWR0aCA+IDc2OSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3c6IHRydWUgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHNob3cgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1yZXNwb25zaXZlXCIgb25DbGljaz17dGhpcy5oYW5kbGVNZW51fT5cbiAgICAgICAgICA8TWVudUljb24gc2l6ZT17NDB9IGNvbG9yPVwiI2FhYVwiIGlkPVwibWVudVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8bmF2IHN0eWxlPXt7IGRpc3BsYXk6IHNob3cgPyBcImZsZXhcIiA6IFwibm9uZVwiIH19PlxuICAgICAgICAgIHttZW51cy5tYXAobWVudSA9PiA8TWVudSBrZXk9e21lbnUuaWR9IHsuLi5tZW51fSAvPil9XG4gICAgICAgIDwvbmF2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tZW51LXJlc3BvbnNpdmUge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xuICAgICAgICAgIC5tZW51LXJlc3BvbnNpdmUge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbmF2IHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgdG9wOiA3MnB4O1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gICAgICAgICAgbmF2IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgICAgICAgICAgaGVpZ2h0OiA3MnB4O1xuICAgICAgICAgICAgcGFkZGluZzogMCAwLjNlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uO1xuIl19 */\n/*@ sourceURL=components/Navigation.js */"
      }));
    }
  }]);

  return Navigation;
}(_react.Component);

exports.default = Navigation;