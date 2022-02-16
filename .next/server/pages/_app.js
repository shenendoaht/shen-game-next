/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./contexts/player-context.jsx":
/*!*************************************!*\
  !*** ./contexts/player-context.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PlayerContext\": () => (/* binding */ PlayerContext),\n/* harmony export */   \"PlayerProvider\": () => (/* binding */ PlayerProvider),\n/* harmony export */   \"usePlayerContext\": () => (/* binding */ usePlayerContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst defaultValues = {\n    name: \"\"\n};\nconst PlayerContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(defaultValues);\nconst PlayerProvider = (props)=>{\n    const { 0: playerData , 1: setPlayerData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultValues);\n    const context = {\n        playerData,\n        setPlayerData\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlayerContext.Provider, {\n        value: context,\n        children: props.children\n    }, void 0, false, {\n        fileName: \"/Users/shenendoaht/CODE/shen-game-next/contexts/player-context.jsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined));\n};\nconst usePlayerContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(PlayerContext)\n;\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9wbGF5ZXItY29udGV4dC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBa0U7QUFFbEUsS0FBSyxDQUFDSSxhQUFhLEdBQUcsQ0FBQztJQUFDQyxJQUFJLEVBQUUsQ0FBRTtBQUFDLENBQUM7QUFFbEMsS0FBSyxDQUFDQyxhQUFhLGlCQUFHTCxvREFBYSxDQUFDRyxhQUFhO0FBRWpELEtBQUssQ0FBQ0csY0FBYyxJQUFJQyxLQUFLLEdBQUssQ0FBQztJQUNqQyxLQUFLLE1BQUVDLFVBQVUsTUFBRUMsYUFBYSxNQUFJUCwrQ0FBUSxDQUFDQyxhQUFhO0lBQzFELEtBQUssQ0FBQ08sT0FBTyxHQUFHLENBQUM7UUFBQ0YsVUFBVTtRQUFFQyxhQUFhO0lBQUMsQ0FBQztJQUM3QyxNQUFNLDZFQUNISixhQUFhLENBQUNNLFFBQVE7UUFBQ0MsS0FBSyxFQUFFRixPQUFPO2tCQUNuQ0gsS0FBSyxDQUFDTSxRQUFROzs7Ozs7QUFHckIsQ0FBQztBQUVELEtBQUssQ0FBQ0MsZ0JBQWdCLE9BQVNiLGlEQUFVLENBQUNJLGFBQWE7O0FBQ0kiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaGVuLWdhbWUtbmV4dC8uL2NvbnRleHRzL3BsYXllci1jb250ZXh0LmpzeD8zM2FlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBkZWZhdWx0VmFsdWVzID0geyBuYW1lOiBcIlwiIH07XG5cbmNvbnN0IFBsYXllckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KGRlZmF1bHRWYWx1ZXMpO1xuXG5jb25zdCBQbGF5ZXJQcm92aWRlciA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbcGxheWVyRGF0YSwgc2V0UGxheWVyRGF0YV0gPSB1c2VTdGF0ZShkZWZhdWx0VmFsdWVzKTtcbiAgY29uc3QgY29udGV4dCA9IHsgcGxheWVyRGF0YSwgc2V0UGxheWVyRGF0YSB9O1xuICByZXR1cm4gKFxuICAgIDxQbGF5ZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0fT5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L1BsYXllckNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5jb25zdCB1c2VQbGF5ZXJDb250ZXh0ID0gKCkgPT4gdXNlQ29udGV4dChQbGF5ZXJDb250ZXh0KTtcbmV4cG9ydCB7IFBsYXllckNvbnRleHQsIFBsYXllclByb3ZpZGVyLCB1c2VQbGF5ZXJDb250ZXh0IH07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiZGVmYXVsdFZhbHVlcyIsIm5hbWUiLCJQbGF5ZXJDb250ZXh0IiwiUGxheWVyUHJvdmlkZXIiLCJwcm9wcyIsInBsYXllckRhdGEiLCJzZXRQbGF5ZXJEYXRhIiwiY29udGV4dCIsIlByb3ZpZGVyIiwidmFsdWUiLCJjaGlsZHJlbiIsInVzZVBsYXllckNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./contexts/player-context.jsx\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_player_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/player-context */ \"./contexts/player-context.jsx\");\n\n\n\nconst App = ({ Component , pageProps  })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_player_context__WEBPACK_IMPORTED_MODULE_2__.PlayerProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/shenendoaht/CODE/shen-game-next/pages/_app.js\",\n            lineNumber: 6,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/shenendoaht/CODE/shen-game-next/pages/_app.js\",\n        lineNumber: 5,\n        columnNumber: 3\n    }, undefined)\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEI7QUFDNkI7QUFFM0QsS0FBSyxDQUFDQyxHQUFHLElBQUksQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFNBQVMsRUFBQyxDQUFDLCtFQUNsQ0gsb0VBQWM7OEZBQ1pFLFNBQVM7ZUFBS0MsU0FBUzs7Ozs7Ozs7Ozs7O0FBRzVCLGlFQUFlRixHQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaGVuLWdhbWUtbmV4dC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB7IFBsYXllclByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbnRleHRzL3BsYXllci1jb250ZXh0XCI7XG5cbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IChcbiAgPFBsYXllclByb3ZpZGVyPlxuICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgPC9QbGF5ZXJQcm92aWRlcj5cbik7XG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwibmFtZXMiOlsiUGxheWVyUHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();