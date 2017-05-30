
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([6],{

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(571);

var _Header2 = _interopRequireDefault(_Header);

var _Main = __webpack_require__(572);

var _Main2 = _interopRequireDefault(_Main);

var _Social = __webpack_require__(575);

var _Social2 = _interopRequireDefault(_Social);

var _Avatar = __webpack_require__(568);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _H = __webpack_require__(569);

var _H2 = _interopRequireDefault(_H);

var _H3 = __webpack_require__(570);

var _H4 = _interopRequireDefault(_H3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/yeison/proyectos/site/pages/index.js?entry";

exports.default = function () {
  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement(_Main2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement(_Avatar2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement(_H2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "Yeison Daza"), _react2.default.createElement(_H4.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "JavaScript Developer | Technical Writer"), _react2.default.createElement(_Social2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  })));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/yeison/proyectos/site/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/yeison/proyectos/site/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"querystring\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 567:
/***/ (function(module, exports) {

module.exports = {
	"menus": [
		{
			"id": 1,
			"external": false,
			"url": "/",
			"text": "Inicio"
		},
		{
			"id": 2,
			"external": false,
			"url": "/proyectos",
			"text": "Proyectos"
		},
		{
			"id": 3,
			"external": true,
			"url": "https://platzi.com/@yeison/",
			"text": "Conocimientos"
		},
		{
			"id": 4,
			"external": true,
			"url": "https://medium.com/@yeion7",
			"text": "Blog"
		},
		{
			"id": 5,
			"external": false,
			"url": "/sobre",
			"text": "Sobre mi"
		}
	],
	"projects": [
		{
			"id": 1,
			"name": "HangoutJS",
			"description": "Evento en linea donde nos reunimos a compartir conocimiento y experiencias sobre JavaScript",
			"url": "https://www.youtube.com/playlist?list=PLH3EFUtS4FBzUYU6BSouy0kiX3cnzyTKc"
		},
		{
			"id": 2,
			"name": "180 websites",
			"description": "Creo 180 miniproyectos en 180 dias, compartiendo el código y las experiencias en la comunidad.",
			"url": "https://www.youtube.com/playlist?list=PLH3EFUtS4FBzUYU6BSouy0kiX3cnzyTKc"
		},
		{
			"id": 3,
			"name": "Impresionante JS",
			"description": "Recopilamos contenido de calidad en español para quienes desean aprender JavaScript.",
			"url": "https://github.com/sergiodxa/impresionante-javascript"
		},
		{
			"id": 4,
			"name": "Canal YouTube",
			"description": "Enseño sobre linux y software libre, publicando un video nuevo cada semana.",
			"URL": "https://www.youtube.com/user/yeison0327/"
		},
		{
			"id": 5,
			"name": "Blog",
			"description": "Escribo un post semanal sobre JavaScript.",
			"URL": "https://medium.com/@yeion7"
		}
	]
};

/***/ }),

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"styled-jsx/style.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/yeison/proyectos/site/components/Avatar.js";

exports.default = function () {
  return _react2.default.createElement("div", {
    "data-jsx": 208995240,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  }, _react2.default.createElement("img", { src: "/static/avatar.jpg", alt: "Avatar", "data-jsx": 208995240,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }), _react2.default.createElement(_style2.default, {
    styleId: 208995240,
    css: "img[data-jsx=\"208995240\"] {border-radius: 50%;width: 140px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQXZhdGFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdnQixBQUNILDJCQUNnQixtQkFDTixhQUNkIiwiZmlsZSI6ImNvbXBvbmVudHMvQXZhdGFyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95ZWlzb24vcHJveWVjdG9zL3NpdGUiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPGltZyBzcmM9XCIvc3RhdGljL2F2YXRhci5qcGdcIiBhbHQ9XCJBdmF0YXJcIiAvPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgd2lkdGg6IDE0MHB4O1xuICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuIl19 */\n/*@ sourceURL=components/Avatar.js */"
  }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/yeison/proyectos/site/components/Avatar.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/yeison/proyectos/site/components/Avatar.js"); } } })();

/***/ }),

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"styled-jsx/style.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/yeison/proyectos/site/components/H1.js";

exports.default = function (_ref) {
  var children = _ref.children;
  return _react2.default.createElement("div", {
    "data-jsx": 1578946440,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  }, _react2.default.createElement("h1", {
    "data-jsx": 1578946440,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, children), _react2.default.createElement(_style2.default, {
    styleId: 1578946440,
    css: "h1[data-jsx=\"1578946440\"] {margin: 5px 0;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSDEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR2dCLEFBQ04sMkJBQ1ksY0FDZiIsImZpbGUiOiJjb21wb25lbnRzL0gxLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95ZWlzb24vcHJveWVjdG9zL3NpdGUiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXY+XG4gICAgPGgxPntjaGlsZHJlbn08L2gxPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGgxIHtcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuIl19 */\n/*@ sourceURL=components/H1.js */"
  }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/yeison/proyectos/site/components/H1.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/yeison/proyectos/site/components/H1.js"); } } })();

/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"styled-jsx/style.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/yeison/proyectos/site/components/H2.js";

exports.default = function (_ref) {
  var children = _ref.children;
  return _react2.default.createElement("div", {
    "data-jsx": 1298310742,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  }, _react2.default.createElement("h2", {
    "data-jsx": 1298310742,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, children), _react2.default.createElement(_style2.default, {
    styleId: 1298310742,
    css: "h2[data-jsx=\"1298310742\"] {margin: 5px 0;text-align: center;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSDIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR2dCLEFBQ04sMkJBQ1ksY0FDSyxtQkFDcEIiLCJmaWxlIjoiY29tcG9uZW50cy9IMi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWVpc29uL3Byb3llY3Rvcy9zaXRlIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2PlxuICAgIDxoMj57Y2hpbGRyZW59PC9oMj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBoMiB7XG4gICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuIl19 */\n/*@ sourceURL=components/H2.js */"
  }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/yeison/proyectos/site/components/H2.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/yeison/proyectos/site/components/H2.js"); } } })();

/***/ }),

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"styled-jsx/style.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _react2 = _interopRequireDefault(_react);

var _nprogress = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"nprogress\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _nprogress2 = _interopRequireDefault(_nprogress);

var _index = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"next/dist/lib/router/index.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _index2 = _interopRequireDefault(_index);

var _Navigation = __webpack_require__(574);

var _Navigation2 = _interopRequireDefault(_Navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/yeison/proyectos/site/components/Header.js";


_index2.default.onRouteChangeStart = function () {
  return _nprogress2.default.start();
};
_index2.default.onRouteChangeComplete = function () {
  return _nprogress2.default.done();
};
_index2.default.onRouteChangeError = function () {
  return _nprogress2.default.done();
};

exports.default = function () {
  return _react2.default.createElement("header", {
    "data-jsx": 828743300,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement(_Navigation2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), _react2.default.createElement(_style2.default, {
    styleId: 828743300,
    css: "header[data-jsx=\"828743300\"] {width: 100%;height: 72px;display:-webkit-flex; display:flex;justify-content: flex-end;align-items: center;position: relative;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdnQixBQUNGLDhCQUNNLFlBQ0MsYUFDQyxtQ0FDWSwwQkFDTixvQkFDRCxtQkFDcEIiLCJmaWxlIjoiY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3llaXNvbi9wcm95ZWN0b3Mvc2l0ZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOUHJvZ3Jlc3MgZnJvbSBcIm5wcm9ncmVzc1wiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBOYXZpdGF0aW9uIGZyb20gXCIuL05hdmlnYXRpb25cIjtcblxuUm91dGVyLm9uUm91dGVDaGFuZ2VTdGFydCA9ICgpID0+IE5Qcm9ncmVzcy5zdGFydCgpO1xuUm91dGVyLm9uUm91dGVDaGFuZ2VDb21wbGV0ZSA9ICgpID0+IE5Qcm9ncmVzcy5kb25lKCk7XG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZUVycm9yID0gKCkgPT4gTlByb2dyZXNzLmRvbmUoKTtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8aGVhZGVyPlxuICAgIDxOYXZpdGF0aW9uIC8+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgaGVhZGVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNzJweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICA8L2hlYWRlcj5cbik7XG4iXX0= */\n/*@ sourceURL=components/Header.js */"
  }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/yeison/proyectos/site/components/Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/yeison/proyectos/site/components/Header.js"); } } })();

/***/ }),

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"styled-jsx/style.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/yeison/proyectos/site/components/Main.js";

exports.default = function (_ref) {
  var children = _ref.children;
  return _react2.default.createElement("main", { id: "app", "data-jsx": 1291852995,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  }, children, _react2.default.createElement(_style2.default, {
    styleId: 1291852995,
    css: "main[data-jsx=\"1291852995\"] {display:-webkit-flex; display:flex;-webkit-flex: 1;-moz-flex: 1;flex: 1;-webkit-flex-direction: column;-moz-flex-direction: column;flex-direction: column;justify-content: center;align-items: center;width: 100%;min-height: 600px;height: calc(100vh - 75px);}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHZ0IsQUFDSiw2QkFDVSxtQ0FDTixxQ0FDZSxrRkFDQyx3QkFDSixvQkFDUixZQUNNLGtCQUNTLDJCQUM1QiIsImZpbGUiOiJjb21wb25lbnRzL01haW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3llaXNvbi9wcm95ZWN0b3Mvc2l0ZSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPG1haW4gaWQ9XCJhcHBcIj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgbWFpbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWluLWhlaWdodDogNjAwcHg7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDc1cHgpO1xuICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICA8L21haW4+XG4pO1xuIl19 */\n/*@ sourceURL=components/Main.js */"
  }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/yeison/proyectos/site/components/Main.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/yeison/proyectos/site/components/Main.js"); } } })();

/***/ }),

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"styled-jsx/style.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _style2 = _interopRequireDefault(_style);

var _link = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"next/dist/lib/link.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _link2 = _interopRequireDefault(_link);

var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/yeison/proyectos/site/components/Menu.js";

exports.default = function (_ref) {
  var external = _ref.external,
      url = _ref.url,
      text = _ref.text;
  return _react2.default.createElement("div", {
    "data-jsx": 174917328,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, external ? _react2.default.createElement("a", { href: url, className: "link", target: "_blank", noopener: true, noreferrer: true, "data-jsx": 174917328,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, text) : _react2.default.createElement(_link2.default, { href: url, __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement("a", { className: "link", "data-jsx": 174917328,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, text)), _react2.default.createElement(_style2.default, {
    styleId: 174917328,
    css: ".link[data-jsx=\"174917328\"] {display: block;padding: 1em;width: 100%;text-align: center;cursor: pointer;}.link[data-jsx=\"174917328\"]:hover {border: 1px solid #ccc;border-radius: 5px;}@media screen and (min-width: 769px) {.link[data-jsx=\"174917328\"] {border-bottom: none;width: auto;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVZ0IsQUFDSCw2QkFDVSxlQUNGLGFBQ0QsWUFDTyxtQkFDSCxnQkFDakIsQ0FDWSxtQ0FDWSx1QkFDSixtQkFDcEIsQ0FDcUMsc0NBQzdCLDZCQUNlLG9CQUNSLFlBQ2IsQ0FDRiIsImZpbGUiOiJjb21wb25lbnRzL01lbnUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3llaXNvbi9wcm95ZWN0b3Mvc2l0ZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHsgZXh0ZXJuYWwsIHVybCwgdGV4dCB9KSA9PiAoXG4gIDxkaXY+XG4gICAge2V4dGVybmFsXG4gICAgICA/IDxhIGhyZWY9e3VybH0gY2xhc3NOYW1lPVwibGlua1wiIHRhcmdldD1cIl9ibGFua1wiIG5vb3BlbmVyIG5vcmVmZXJyZXI+XG4gICAgICAgICAge3RleHR9XG4gICAgICAgIDwvYT5cbiAgICAgIDogPExpbmsgaHJlZj17dXJsfT48YSBjbGFzc05hbWU9XCJsaW5rXCI+e3RleHR9PC9hPjwvTGluaz59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmxpbmsge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgICAubGluazpob3ZlciB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gICAgICAgIC5saW5rIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcbiJdfQ== */\n/*@ sourceURL=components/Menu.js */"
  }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/yeison/proyectos/site/components/Menu.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/yeison/proyectos/site/components/Menu.js"); } } })();

/***/ }),

/***/ 574:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"babel-runtime/helpers/extends\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"babel-runtime/core-js/object/get-prototype-of\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"babel-runtime/helpers/classCallCheck\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"babel-runtime/helpers/createClass\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"babel-runtime/helpers/possibleConstructorReturn\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"babel-runtime/helpers/inherits\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"styled-jsx/style.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _react2 = _interopRequireDefault(_react);

var _Menu = __webpack_require__(573);

var _Menu2 = _interopRequireDefault(_Menu);

var _data = __webpack_require__(567);

var _menu = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-icons/lib/md/menu\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/yeison/proyectos/site/components/Navigation.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/yeison/proyectos/site/components/Navigation.js"); } } })();

/***/ }),

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"styled-jsx/style.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _react2 = _interopRequireDefault(_react);

var _twitter = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-icons/lib/fa/twitter\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _twitter2 = _interopRequireDefault(_twitter);

var _github = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-icons/lib/fa/github\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _github2 = _interopRequireDefault(_github);

var _youtubePlay = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-icons/lib/fa/youtube-play\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _youtubePlay2 = _interopRequireDefault(_youtubePlay);

var _medium = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-icons/lib/fa/medium\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _medium2 = _interopRequireDefault(_medium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/yeison/proyectos/site/components/Social.js";

exports.default = function () {
  return _react2.default.createElement("div", {
    "data-jsx": 3387341426,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement("a", { href: "https://twitter.com/yeion7", target: "_blank", noopener: true, noreferrer: true, "data-jsx": 3387341426,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(_twitter2.default, { size: 30, color: "#aaa", __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  })), _react2.default.createElement("a", { href: "https://github.com/yeion7/", target: "_blank", noopener: true, noreferrer: true, "data-jsx": 3387341426,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement(_github2.default, { size: 30, color: "#aaa", __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  })), _react2.default.createElement("a", {
    href: "https://www.youtube.com/user/yeison0327/",
    target: "_blank",
    noopener: true,
    noreferrer: true,
    "data-jsx": 3387341426,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement(_youtubePlay2.default, { size: 30, color: "#aaa", __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  })), _react2.default.createElement("a", { href: "https://medium.com/@yeion7", target: "_blank", noopener: true, noreferrer: true, "data-jsx": 3387341426,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, _react2.default.createElement(_medium2.default, { size: 30, color: "#aaa", __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  })), _react2.default.createElement(_style2.default, {
    styleId: 3387341426,
    css: "div[data-jsx=\"3387341426\"] {margin: 1em 0;}a[data-jsx=\"3387341426\"] {padding: 1em 0.8em;}a[data-jsx=\"3387341426\"]:hover {border: 1px solid #ccc;border-radius: 4px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU29jaWFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCZ0IsQUFDTCw0QkFDVyxjQUNmLENBQ0UsMEJBQ2tCLG1CQUNwQixDQUNRLGdDQUNnQix1QkFDSixtQkFDcEIiLCJmaWxlIjoiY29tcG9uZW50cy9Tb2NpYWwuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3llaXNvbi9wcm95ZWN0b3Mvc2l0ZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUd2l0dGVyIGZyb20gXCJyZWFjdC1pY29ucy9saWIvZmEvdHdpdHRlclwiO1xuaW1wb3J0IEdpdGh1YiBmcm9tIFwicmVhY3QtaWNvbnMvbGliL2ZhL2dpdGh1YlwiO1xuaW1wb3J0IFlvdXR1YmUgZnJvbSBcInJlYWN0LWljb25zL2xpYi9mYS95b3V0dWJlLXBsYXlcIjtcbmltcG9ydCBNZWRpdW0gZnJvbSBcInJlYWN0LWljb25zL2xpYi9mYS9tZWRpdW1cIjtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8ZGl2PlxuICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL3llaW9uN1wiIHRhcmdldD1cIl9ibGFua1wiIG5vb3BlbmVyIG5vcmVmZXJyZXI+XG4gICAgICA8VHdpdHRlciBzaXplPXszMH0gY29sb3I9XCIjYWFhXCIgLz5cbiAgICA8L2E+XG4gICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS95ZWlvbjcvXCIgdGFyZ2V0PVwiX2JsYW5rXCIgbm9vcGVuZXIgbm9yZWZlcnJlcj5cbiAgICAgIDxHaXRodWIgc2l6ZT17MzB9IGNvbG9yPVwiI2FhYVwiIC8+XG4gICAgPC9hPlxuICAgIDxhXG4gICAgICBocmVmPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vdXNlci95ZWlzb24wMzI3L1wiXG4gICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgbm9vcGVuZXJcbiAgICAgIG5vcmVmZXJyZXJcbiAgICA+XG4gICAgICA8WW91dHViZSBzaXplPXszMH0gY29sb3I9XCIjYWFhXCIgLz5cbiAgICA8L2E+XG4gICAgPGEgaHJlZj1cImh0dHBzOi8vbWVkaXVtLmNvbS9AeWVpb243XCIgdGFyZ2V0PVwiX2JsYW5rXCIgbm9vcGVuZXIgbm9yZWZlcnJlcj5cbiAgICAgIDxNZWRpdW0gc2l6ZT17MzB9IGNvbG9yPVwiI2FhYVwiIC8+XG4gICAgPC9hPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGRpdiB7XG4gICAgICAgIG1hcmdpbjogMWVtIDA7XG4gICAgICB9XG4gICAgICBhIHtcbiAgICAgICAgcGFkZGluZzogMWVtIDAuOGVtO1xuICAgICAgfVxuICAgICAgYTpob3ZlciB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuIl19 */\n/*@ sourceURL=components/Social.js */"
  }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/yeison/proyectos/site/components/Social.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/yeison/proyectos/site/components/Social.js"); } } })();

/***/ }),

/***/ 584:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(564);


/***/ })

},[584]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzP2M2YzhiNzAiLCJ3ZWJwYWNrOi8vLy4vZGF0YS5qc29uP2M2YzhiNzAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BdmF0YXIuanM/YzZjOGI3MCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0gxLmpzP2M2YzhiNzAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IMi5qcz9jNmM4YjcwIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyLmpzP2M2YzhiNzAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NYWluLmpzP2M2YzhiNzAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NZW51LmpzP2M2YzhiNzAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uLmpzP2M2YzhiNzAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Tb2NpYWwuanM/YzZjOGI3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IE1haW4gZnJvbSBcIi4uL2NvbXBvbmVudHMvTWFpblwiO1xuaW1wb3J0IFNvY2lhbCBmcm9tIFwiLi4vY29tcG9uZW50cy9Tb2NpYWxcIjtcbmltcG9ydCBBdmF0YXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXZhdGFyXCI7XG5pbXBvcnQgSDEgZnJvbSBcIi4uL2NvbXBvbmVudHMvSDFcIjtcbmltcG9ydCBIMiBmcm9tIFwiLi4vY29tcG9uZW50cy9IMlwiO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWRlciAvPlxuICAgIDxNYWluPlxuICAgICAgPEF2YXRhciAvPlxuICAgICAgPEgxPlllaXNvbiBEYXphPC9IMT5cbiAgICAgIDxIMj5KYXZhU2NyaXB0IERldmVsb3BlciB8IFRlY2huaWNhbCBXcml0ZXI8L0gyPlxuICAgICAgPFNvY2lhbCAvPlxuICAgIDwvTWFpbj5cbiAgPC9kaXY+XG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtZW51c1wiOiBbXG5cdFx0e1xuXHRcdFx0XCJpZFwiOiAxLFxuXHRcdFx0XCJleHRlcm5hbFwiOiBmYWxzZSxcblx0XHRcdFwidXJsXCI6IFwiL1wiLFxuXHRcdFx0XCJ0ZXh0XCI6IFwiSW5pY2lvXCJcblx0XHR9LFxuXHRcdHtcblx0XHRcdFwiaWRcIjogMixcblx0XHRcdFwiZXh0ZXJuYWxcIjogZmFsc2UsXG5cdFx0XHRcInVybFwiOiBcIi9wcm95ZWN0b3NcIixcblx0XHRcdFwidGV4dFwiOiBcIlByb3llY3Rvc1wiXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRcImlkXCI6IDMsXG5cdFx0XHRcImV4dGVybmFsXCI6IHRydWUsXG5cdFx0XHRcInVybFwiOiBcImh0dHBzOi8vcGxhdHppLmNvbS9AeWVpc29uL1wiLFxuXHRcdFx0XCJ0ZXh0XCI6IFwiQ29ub2NpbWllbnRvc1wiXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRcImlkXCI6IDQsXG5cdFx0XHRcImV4dGVybmFsXCI6IHRydWUsXG5cdFx0XHRcInVybFwiOiBcImh0dHBzOi8vbWVkaXVtLmNvbS9AeWVpb243XCIsXG5cdFx0XHRcInRleHRcIjogXCJCbG9nXCJcblx0XHR9LFxuXHRcdHtcblx0XHRcdFwiaWRcIjogNSxcblx0XHRcdFwiZXh0ZXJuYWxcIjogZmFsc2UsXG5cdFx0XHRcInVybFwiOiBcIi9zb2JyZVwiLFxuXHRcdFx0XCJ0ZXh0XCI6IFwiU29icmUgbWlcIlxuXHRcdH1cblx0XSxcblx0XCJwcm9qZWN0c1wiOiBbXG5cdFx0e1xuXHRcdFx0XCJpZFwiOiAxLFxuXHRcdFx0XCJuYW1lXCI6IFwiSGFuZ291dEpTXCIsXG5cdFx0XHRcImRlc2NyaXB0aW9uXCI6IFwiRXZlbnRvIGVuIGxpbmVhIGRvbmRlIG5vcyByZXVuaW1vcyBhIGNvbXBhcnRpciBjb25vY2ltaWVudG8geSBleHBlcmllbmNpYXMgc29icmUgSmF2YVNjcmlwdFwiLFxuXHRcdFx0XCJ1cmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9wbGF5bGlzdD9saXN0PVBMSDNFRlV0UzRGQnpVWVU2QlNvdXkwa2lYM2NuenlUS2NcIlxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0XCJpZFwiOiAyLFxuXHRcdFx0XCJuYW1lXCI6IFwiMTgwIHdlYnNpdGVzXCIsXG5cdFx0XHRcImRlc2NyaXB0aW9uXCI6IFwiQ3JlbyAxODAgbWluaXByb3llY3RvcyBlbiAxODAgZGlhcywgY29tcGFydGllbmRvIGVsIGPDs2RpZ28geSBsYXMgZXhwZXJpZW5jaWFzIGVuIGxhIGNvbXVuaWRhZC5cIixcblx0XHRcdFwidXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vcGxheWxpc3Q/bGlzdD1QTEgzRUZVdFM0RkJ6VVlVNkJTb3V5MGtpWDNjbnp5VEtjXCJcblx0XHR9LFxuXHRcdHtcblx0XHRcdFwiaWRcIjogMyxcblx0XHRcdFwibmFtZVwiOiBcIkltcHJlc2lvbmFudGUgSlNcIixcblx0XHRcdFwiZGVzY3JpcHRpb25cIjogXCJSZWNvcGlsYW1vcyBjb250ZW5pZG8gZGUgY2FsaWRhZCBlbiBlc3Bhw7FvbCBwYXJhIHF1aWVuZXMgZGVzZWFuIGFwcmVuZGVyIEphdmFTY3JpcHQuXCIsXG5cdFx0XHRcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9zZXJnaW9keGEvaW1wcmVzaW9uYW50ZS1qYXZhc2NyaXB0XCJcblx0XHR9LFxuXHRcdHtcblx0XHRcdFwiaWRcIjogNCxcblx0XHRcdFwibmFtZVwiOiBcIkNhbmFsIFlvdVR1YmVcIixcblx0XHRcdFwiZGVzY3JpcHRpb25cIjogXCJFbnNlw7FvIHNvYnJlIGxpbnV4IHkgc29mdHdhcmUgbGlicmUsIHB1YmxpY2FuZG8gdW4gdmlkZW8gbnVldm8gY2FkYSBzZW1hbmEuXCIsXG5cdFx0XHRcIlVSTFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3VzZXIveWVpc29uMDMyNy9cIlxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0XCJpZFwiOiA1LFxuXHRcdFx0XCJuYW1lXCI6IFwiQmxvZ1wiLFxuXHRcdFx0XCJkZXNjcmlwdGlvblwiOiBcIkVzY3JpYm8gdW4gcG9zdCBzZW1hbmFsIHNvYnJlIEphdmFTY3JpcHQuXCIsXG5cdFx0XHRcIlVSTFwiOiBcImh0dHBzOi8vbWVkaXVtLmNvbS9AeWVpb243XCJcblx0XHR9XG5cdF1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9kYXRhLmpzb25cbi8vIG1vZHVsZSBpZCA9IDU2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCJleHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPGltZyBzcmM9XCIvc3RhdGljL2F2YXRhci5qcGdcIiBhbHQ9XCJBdmF0YXJcIiAvPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgd2lkdGg6IDE0MHB4O1xuICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9BdmF0YXIuanMiLCJleHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXY+XG4gICAgPGgxPntjaGlsZHJlbn08L2gxPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGgxIHtcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IMS5qcyIsImV4cG9ydCBkZWZhdWx0ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdj5cbiAgICA8aDI+e2NoaWxkcmVufTwvaDI+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgaDIge1xuICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvSDIuanMiLCJpbXBvcnQgTlByb2dyZXNzIGZyb20gXCJucHJvZ3Jlc3NcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTmF2aXRhdGlvbiBmcm9tIFwiLi9OYXZpZ2F0aW9uXCI7XG5cblJvdXRlci5vblJvdXRlQ2hhbmdlU3RhcnQgPSAoKSA9PiBOUHJvZ3Jlc3Muc3RhcnQoKTtcblJvdXRlci5vblJvdXRlQ2hhbmdlQ29tcGxldGUgPSAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpO1xuUm91dGVyLm9uUm91dGVDaGFuZ2VFcnJvciA9ICgpID0+IE5Qcm9ncmVzcy5kb25lKCk7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPGhlYWRlcj5cbiAgICA8TmF2aXRhdGlvbiAvPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGhlYWRlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDcycHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgPC9oZWFkZXI+XG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJleHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxtYWluIGlkPVwiYXBwXCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIG1haW4ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3NXB4KTtcbiAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgPC9tYWluPlxuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTWFpbi5qcyIsImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHsgZXh0ZXJuYWwsIHVybCwgdGV4dCB9KSA9PiAoXG4gIDxkaXY+XG4gICAge2V4dGVybmFsXG4gICAgICA/IDxhIGhyZWY9e3VybH0gY2xhc3NOYW1lPVwibGlua1wiIHRhcmdldD1cIl9ibGFua1wiIG5vb3BlbmVyIG5vcmVmZXJyZXI+XG4gICAgICAgICAge3RleHR9XG4gICAgICAgIDwvYT5cbiAgICAgIDogPExpbmsgaHJlZj17dXJsfT48YSBjbGFzc05hbWU9XCJsaW5rXCI+e3RleHR9PC9hPjwvTGluaz59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmxpbmsge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgICAubGluazpob3ZlciB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gICAgICAgIC5saW5rIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTWVudS5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNZW51IGZyb20gXCIuL01lbnVcIjtcbmltcG9ydCB7IG1lbnVzIH0gZnJvbSBcIi4uL2RhdGEuanNvblwiO1xuaW1wb3J0IE1lbnVJY29uIGZyb20gXCJyZWFjdC1pY29ucy9saWIvbWQvbWVudVwiO1xuXG5jbGFzcyBOYXZpZ2F0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgc2hvdzogZmFsc2VcbiAgfTtcblxuICBoYW5kbGVNZW51ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93OiAhdGhpcy5zdGF0ZS5zaG93IH0pO1xuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgaWYgKHdpbmRvd1dpZHRoID4gNzY5KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2hvdzogdHJ1ZSB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc2hvdyB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LXJlc3BvbnNpdmVcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZU1lbnV9PlxuICAgICAgICAgIDxNZW51SWNvbiBzaXplPXs0MH0gY29sb3I9XCIjYWFhXCIgaWQ9XCJtZW51XCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxuYXYgc3R5bGU9e3sgZGlzcGxheTogc2hvdyA/IFwiZmxleFwiIDogXCJub25lXCIgfX0+XG4gICAgICAgICAge21lbnVzLm1hcChtZW51ID0+IDxNZW51IGtleT17bWVudS5pZH0gey4uLm1lbnV9IC8+KX1cbiAgICAgICAgPC9uYXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1lbnUtcmVzcG9uc2l2ZSB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gICAgICAgICAgLm1lbnUtcmVzcG9uc2l2ZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBuYXYge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB0b3A6IDcycHg7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcbiAgICAgICAgICBuYXYge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgICAgICAgICBoZWlnaHQ6IDcycHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDAuM2VtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL05hdmlnYXRpb24uanMiLCJpbXBvcnQgVHdpdHRlciBmcm9tIFwicmVhY3QtaWNvbnMvbGliL2ZhL3R3aXR0ZXJcIjtcbmltcG9ydCBHaXRodWIgZnJvbSBcInJlYWN0LWljb25zL2xpYi9mYS9naXRodWJcIjtcbmltcG9ydCBZb3V0dWJlIGZyb20gXCJyZWFjdC1pY29ucy9saWIvZmEveW91dHViZS1wbGF5XCI7XG5pbXBvcnQgTWVkaXVtIGZyb20gXCJyZWFjdC1pY29ucy9saWIvZmEvbWVkaXVtXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPGRpdj5cbiAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS95ZWlvbjdcIiB0YXJnZXQ9XCJfYmxhbmtcIiBub29wZW5lciBub3JlZmVycmVyPlxuICAgICAgPFR3aXR0ZXIgc2l6ZT17MzB9IGNvbG9yPVwiI2FhYVwiIC8+XG4gICAgPC9hPlxuICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20veWVpb243L1wiIHRhcmdldD1cIl9ibGFua1wiIG5vb3BlbmVyIG5vcmVmZXJyZXI+XG4gICAgICA8R2l0aHViIHNpemU9ezMwfSBjb2xvcj1cIiNhYWFcIiAvPlxuICAgIDwvYT5cbiAgICA8YVxuICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3VzZXIveWVpc29uMDMyNy9cIlxuICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgIG5vb3BlbmVyXG4gICAgICBub3JlZmVycmVyXG4gICAgPlxuICAgICAgPFlvdXR1YmUgc2l6ZT17MzB9IGNvbG9yPVwiI2FhYVwiIC8+XG4gICAgPC9hPlxuICAgIDxhIGhyZWY9XCJodHRwczovL21lZGl1bS5jb20vQHllaW9uN1wiIHRhcmdldD1cIl9ibGFua1wiIG5vb3BlbmVyIG5vcmVmZXJyZXI+XG4gICAgICA8TWVkaXVtIHNpemU9ezMwfSBjb2xvcj1cIiNhYWFcIiAvPlxuICAgIDwvYT5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBkaXYge1xuICAgICAgICBtYXJnaW46IDFlbSAwO1xuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIHBhZGRpbmc6IDFlbSAwLjhlbTtcbiAgICAgIH1cbiAgICAgIGE6aG92ZXIge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvU29jaWFsLmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFFQTtBQUNBOzs7Ozs7O0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQVBBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRUE7QUFDQTs7Ozs7OztBQURBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7O0FBREE7QUFBQTtBQUFBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7Ozs7Ozs7QUFEQTtBQUFBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7Ozs7Ozs7QUFEQTtBQUFBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7Ozs7Ozs7QUFEQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBRUE7QUFDQTs7Ozs7OztBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFBQTtBQUFBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBMENBO0FBMUNBOzs7OztBQTZDQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBRUE7QUFDQTs7Ozs7OztBQURBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFKQTtBQUFBOztBQUFBO0FBTUE7QUFOQTtBQUNBO0FBS0E7QUFFQTtBQUZBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBaEJBO0FBQUE7QUFBQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        