"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/welcome-screen.jsx":
/*!***************************************!*\
  !*** ./components/welcome-screen.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_player_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/player-context */ \"./contexts/player-context.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar WelcomeScreen = function() {\n    _s();\n    // PLayer DATA via playerContext\n    var ref = (0,_contexts_player_context__WEBPACK_IMPORTED_MODULE_2__.usePlayerContext)(), playerData = ref.playerData, setPlayerData = ref.setPlayerData;\n    var _name;\n    var name = ((_name = playerData.name) !== null && _name !== void 0 ? _name : \"\").name;\n    // TEXT INPUT PLAYER name\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), nameInput = ref1[0], setNameInput = ref1[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"welcome-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Your name is \",\n                    !!name ? \"not \" : \"\",\n                    \"empty.\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shenendoaht/CODE/shen-game-next/components/welcome-screen.jsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, _this),\n            !!name ? \"not \" : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"input-el\",\n                        placeholder: \"name yoself\",\n                        value: nameInput,\n                        onChange: function(e) {\n                            return setNameInput(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/shenendoaht/CODE/shen-game-next/components/welcome-screen.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \" Submit \"\n                    }, void 0, false, {\n                        fileName: \"/Users/shenendoaht/CODE/shen-game-next/components/welcome-screen.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shenendoaht/CODE/shen-game-next/components/welcome-screen.jsx\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: \"/town\",\n                children: \"town\"\n            }, void 0, false, {\n                fileName: \"/Users/shenendoaht/CODE/shen-game-next/components/welcome-screen.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shenendoaht/CODE/shen-game-next/components/welcome-screen.jsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, _this));\n};\n_s(WelcomeScreen, \"aROzZsAEalKxBp/tW9vwui01Dm0=\", false, function() {\n    return [\n        _contexts_player_context__WEBPACK_IMPORTED_MODULE_2__.usePlayerContext\n    ];\n});\n_c = WelcomeScreen;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WelcomeScreen); // const Header = ({ greeting }) => {\n //   const pData = usePlayerContext();\n //   return (\n //     <header>\n //       <h1>Welcome, {greeting}</h1>\n //       <p>{JSON.stringify(pData, null, 2)}</p>\n //     </header>\n //   );\n // };\n // export default Header;\nvar _c;\n$RefreshReg$(_c, \"WelcomeScreen\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3dlbGNvbWUtc2NyZWVuLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWdDO0FBQzZCO0FBQ2pDOzs7QUFFNUIsR0FBSyxDQUFDRyxhQUFhLEdBQUcsUUFDdEIsR0FENEIsQ0FBQzs7SUFDM0IsRUFBZ0M7SUFDaEMsR0FBSyxDQUFpQ0YsR0FBa0IsR0FBbEJBLDBFQUFnQixJQUE5Q0csVUFBVSxHQUFvQkgsR0FBa0IsQ0FBaERHLFVBQVUsRUFBRUMsYUFBYSxHQUFLSixHQUFrQixDQUFwQ0ksYUFBYTtRQUNoQkQsS0FBZTtJQUFoQyxHQUFLLENBQUdFLElBQUksS0FBS0YsS0FBZSxHQUFmQSxVQUFVLENBQUNFLElBQUksY0FBZkYsS0FBZSxjQUFmQSxLQUFlLEdBQUksQ0FBRSxHQUE5QkUsSUFBSTtJQUNaLEVBQXlCO0lBQ3pCLEdBQUssQ0FBNkJOLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFFLElBQXRDTyxTQUFTLEdBQWtCUCxJQUFZLEtBQTVCUSxZQUFZLEdBQUlSLElBQVk7SUFDOUMsTUFBTSw2RUFDSFMsQ0FBTztRQUFDQyxFQUFFLEVBQUMsQ0FBZ0I7O3dGQUN6QkMsQ0FBQzs7b0JBQUMsQ0FBYTtzQkFBR0wsSUFBSSxHQUFHLENBQU0sUUFBRyxDQUFFO29CQUFDLENBQU07Ozs7Ozs7Y0FDekNBLElBQUksR0FDTCxDQUFNLG9GQUVMTSxDQUFJOztnR0FDRkMsQ0FBSzt3QkFDSkMsSUFBSSxFQUFDLENBQU07d0JBQ1hKLEVBQUUsRUFBQyxDQUFVO3dCQUNiSyxXQUFXLEVBQUMsQ0FBYTt3QkFDekJDLEtBQUssRUFBRVQsU0FBUzt3QkFDaEJVLFFBQVEsRUFBRSxRQUFRLENBQVBDLENBQUM7NEJBQUtWLE1BQU0sQ0FBTkEsWUFBWSxDQUFDVSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7OztnR0FFN0NJLENBQU07d0JBQUNOLElBQUksRUFBQyxDQUFRO2tDQUFDLENBQVE7Ozs7Ozs7Ozs7Ozt3RkFHakNaLGtEQUFJO2dCQUFDbUIsSUFBSSxFQUFDLENBQU87MEJBQUMsQ0FBSTs7Ozs7Ozs7Ozs7O0FBRzdCLENBQUM7R0ExQktsQixhQUFhOztRQUVxQkYsc0VBQWdCOzs7S0FGbERFLGFBQWE7QUEyQm5CLCtEQUFlQSxhQUFhLEVBRTVCLENBQXFDO0FBQ3JDLENBQXNDO0FBQ3RDLENBQWE7QUFDYixDQUFlO0FBQ2YsQ0FBcUM7QUFDckMsQ0FBZ0Q7QUFDaEQsQ0FBZ0I7QUFDaEIsQ0FBTztBQUNQLENBQUs7QUFDTCxDQUF5QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3dlbGNvbWUtc2NyZWVuLmpzeD8yNmFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VQbGF5ZXJDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL3BsYXllci1jb250ZXh0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IFdlbGNvbWVTY3JlZW4gPSAoKSA9PiB7XG4gIC8vIFBMYXllciBEQVRBIHZpYSBwbGF5ZXJDb250ZXh0XG4gIGNvbnN0IHsgcGxheWVyRGF0YSwgc2V0UGxheWVyRGF0YSB9ID0gdXNlUGxheWVyQ29udGV4dCgpO1xuICBjb25zdCB7IG5hbWUgfSA9IHBsYXllckRhdGEubmFtZSA/PyBcIlwiO1xuICAvLyBURVhUIElOUFVUIFBMQVlFUiBuYW1lXG4gIGNvbnN0IFtuYW1lSW5wdXQsIHNldE5hbWVJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD1cIndlbGNvbWUtc2NyZWVuXCI+XG4gICAgICA8cD5Zb3VyIG5hbWUgaXMgeyEhbmFtZSA/IFwibm90IFwiIDogXCJcIn1lbXB0eS48L3A+XG4gICAgICB7ISFuYW1lID8gKFxuICAgICAgICBcIm5vdCBcIlxuICAgICAgKSA6IChcbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBpZD1cImlucHV0LWVsXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwibmFtZSB5b3NlbGZcIlxuICAgICAgICAgICAgdmFsdWU9e25hbWVJbnB1dH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZUlucHV0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPiBTdWJtaXQgPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICl9XG4gICAgICA8TGluayBocmVmPVwiL3Rvd25cIj50b3duPC9MaW5rPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBXZWxjb21lU2NyZWVuO1xuXG4vLyBjb25zdCBIZWFkZXIgPSAoeyBncmVldGluZyB9KSA9PiB7XG4vLyAgIGNvbnN0IHBEYXRhID0gdXNlUGxheWVyQ29udGV4dCgpO1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDxoZWFkZXI+XG4vLyAgICAgICA8aDE+V2VsY29tZSwge2dyZWV0aW5nfTwvaDE+XG4vLyAgICAgICA8cD57SlNPTi5zdHJpbmdpZnkocERhdGEsIG51bGwsIDIpfTwvcD5cbi8vICAgICA8L2hlYWRlcj5cbi8vICAgKTtcbi8vIH07XG4vLyBleHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VQbGF5ZXJDb250ZXh0IiwiTGluayIsIldlbGNvbWVTY3JlZW4iLCJwbGF5ZXJEYXRhIiwic2V0UGxheWVyRGF0YSIsIm5hbWUiLCJuYW1lSW5wdXQiLCJzZXROYW1lSW5wdXQiLCJzZWN0aW9uIiwiaWQiLCJwIiwiZm9ybSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/welcome-screen.jsx\n");

/***/ })

});