"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _document = require("next/dist/server/document.js");

var _document2 = _interopRequireDefault(_document);

var _server = require("styled-jsx/server");

var _server2 = _interopRequireDefault(_server);

var _nprogress = require("nprogress");

var _nprogress2 = _interopRequireDefault(_nprogress);

var _index = require("next/dist/lib/router/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/yeison/proyectos/site/pages/_document.js?entry";


_index2.default.onRouteChangeStart = function () {
  return _nprogress2.default.start();
};
_index2.default.onRouteChangeComplete = function () {
  return _nprogress2.default.done();
};
_index2.default.onRouteChangeError = function () {
  return _nprogress2.default.done();
};

var MyDocument = function (_Document) {
  (0, _inherits3.default)(MyDocument, _Document);

  function MyDocument() {
    (0, _classCallCheck3.default)(this, MyDocument);

    return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(MyDocument, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement("html", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement("meta", { charset: "UTF-8", "data-jsx": 972774799,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), _react2.default.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
        "data-jsx": 972774799,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }), _react2.default.createElement("meta", { name: "theme-color", content: "#333", "data-jsx": 972774799,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), _react2.default.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Montserrat",
        rel: "stylesheet",
        "data-jsx": 972774799,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), _react2.default.createElement("meta", { property: "og:url", content: "https://yeion7.now.sh", "data-jsx": 972774799,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }), _react2.default.createElement("meta", { property: "og:type", content: "website", "data-jsx": 972774799,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), _react2.default.createElement("meta", { property: "og:title", content: "Yeison Daza", "data-jsx": 972774799,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }), _react2.default.createElement("meta", { property: "og:description", content: "Build platforms with read", "data-jsx": 972774799,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }), _react2.default.createElement("meta", { property: "og:image", content: "/static/avatar.jpg", "data-jsx": 972774799,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }), _react2.default.createElement("meta", { name: "twitter:card", content: "summary_large_image", "data-jsx": 972774799,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }), _react2.default.createElement("meta", { name: "twitter:site", content: "@yeion7", "data-jsx": 972774799,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }), _react2.default.createElement("meta", { name: "twitter:creator", content: "@yeion7", "data-jsx": 972774799,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }), _react2.default.createElement("meta", { name: "twitter:title", content: "Yeison Daza", "data-jsx": 972774799,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }), _react2.default.createElement("meta", { name: "twitter:description", content: "Personal page", "data-jsx": 972774799,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), _react2.default.createElement("meta", { name: "twitter:image", content: "/static/avatar.jpg", "data-jsx": 972774799,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }), _react2.default.createElement("link", { href: "/static/favicon.ico", rel: "icon", type: "image/x-icon", "data-jsx": 972774799,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }), _react2.default.createElement("meta", { name: "description", content: "Build platforms with read", "data-jsx": 972774799,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }), _react2.default.createElement("title", {
        "data-jsx": 972774799,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, "Yeison Daza"), _react2.default.createElement(_style2.default, {
        styleId: 972774799,
        css: "\n      * {\n        margin: 0;\n        box-sizing: border-box;\n      }\n\n      body {\n        margin: 0;\n        padding: 0;\n        font-family: 'Montserrat', sans-serif;\n        color: #333;\n        font-size: 16px;\n        padding: 0 15px;\n      }\n\n      a {\n        text-decoration: none;\n        color: inherit;\n      }\n\n      #nprogress {\n        pointer-events: none;\n      }\n\n      #nprogress .bar {\n        background: #48929B;\n        position: fixed;\n        z-index: 1031;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 2px;\n      }\n\n      #nprogress .peg {\n        display: block;\n        position: absolute;\n        right: 0px;\n        width: 100px;\n        height: 100%;\n        box-shadow: 0 0 10px #22BAD9, 0 0 5px #48929B;\n        opacity: 1.0;\n        transform: rotate(3deg) translate(0px, -4px);\n\n    "
      })), _react2.default.createElement("body", { className: "custom_class", __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, this.props.customValue, _react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var renderPage = _ref.renderPage;

      var _renderPage = renderPage(),
          html = _renderPage.html,
          head = _renderPage.head,
          errorHtml = _renderPage.errorHtml,
          chunks = _renderPage.chunks;

      var styles = (0, _server2.default)();
      return { html: html, head: head, errorHtml: errorHtml, chunks: chunks, styles: styles };
    }
  }]);

  return MyDocument;
}(_document2.default);

exports.default = MyDocument;