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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_player_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/player-context */ \"./contexts/player-context.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar WelcomeScreen = function() {\n    _s();\n    // PLayer DATA via playerContext\n    var ref = (0,_contexts_player_context__WEBPACK_IMPORTED_MODULE_2__.usePlayerContext)(), playerData = ref.playerData, setPlayerData = ref.setPlayerData;\n    var name = (pData !== null && pData !== void 0 ? pData : \"\").name;\n    // TEXT INPUT PLAYER name\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), nameInput = ref1[0], setNameInput = ref1[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"welcome-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Your name is \",\n                    !!name ? \"not \" : \"\",\n                    \"empty.\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shenendoaht/CODE/shen-game-next/components/welcome-screen.jsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, _this),\n            !!name ? \"not \" : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"input-el\",\n                        placeholder: \"name yoself\",\n                        value: nameInput,\n                        onChange: function(e) {\n                            return setNameInput(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/shenendoaht/CODE/shen-game-next/components/welcome-screen.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \" Submit \"\n                    }, void 0, false, {\n                        fileName: \"/Users/shenendoaht/CODE/shen-game-next/components/welcome-screen.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shenendoaht/CODE/shen-game-next/components/welcome-screen.jsx\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: \"/town\",\n                children: \"town\"\n            }, void 0, false, {\n                fileName: \"/Users/shenendoaht/CODE/shen-game-next/components/welcome-screen.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shenendoaht/CODE/shen-game-next/components/welcome-screen.jsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, _this));\n};\n_s(WelcomeScreen, \"aROzZsAEalKxBp/tW9vwui01Dm0=\", false, function() {\n    return [\n        _contexts_player_context__WEBPACK_IMPORTED_MODULE_2__.usePlayerContext\n    ];\n});\n_c = WelcomeScreen;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WelcomeScreen); // const Header = ({ greeting }) => {\n //   const pData = usePlayerContext();\n //   return (\n //     <header>\n //       <h1>Welcome, {greeting}</h1>\n //       <p>{JSON.stringify(pData, null, 2)}</p>\n //     </header>\n //   );\n // };\n // export default Header;\nvar _c;\n$RefreshReg$(_c, \"WelcomeScreen\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3dlbGNvbWUtc2NyZWVuLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWdDO0FBQzZCO0FBQ2pDOzs7QUFFNUIsR0FBSyxDQUFDRyxhQUFhLEdBQUcsUUFDdEIsR0FENEIsQ0FBQzs7SUFDM0IsRUFBZ0M7SUFDaEMsR0FBSyxDQUFpQ0YsR0FBa0IsR0FBbEJBLDBFQUFnQixJQUE5Q0csVUFBVSxHQUFvQkgsR0FBa0IsQ0FBaERHLFVBQVUsRUFBRUMsYUFBYSxHQUFLSixHQUFrQixDQUFwQ0ksYUFBYTtJQUNqQyxHQUFLLENBQUdDLElBQUksSUFBS0MsS0FBSyxhQUFMQSxLQUFLLGNBQUxBLEtBQUssR0FBSSxDQUFFLEdBQXBCRCxJQUFJO0lBQ1osRUFBeUI7SUFDekIsR0FBSyxDQUE2Qk4sSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBdENRLFNBQVMsR0FBa0JSLElBQVksS0FBNUJTLFlBQVksR0FBSVQsSUFBWTtJQUM5QyxNQUFNLDZFQUNIVSxDQUFPO1FBQUNDLEVBQUUsRUFBQyxDQUFnQjs7d0ZBQ3pCQyxDQUFDOztvQkFBQyxDQUFhO3NCQUFHTixJQUFJLEdBQUcsQ0FBTSxRQUFHLENBQUU7b0JBQUMsQ0FBTTs7Ozs7OztjQUN6Q0EsSUFBSSxHQUNMLENBQU0sb0ZBRUxPLENBQUk7O2dHQUNGQyxDQUFLO3dCQUNKQyxJQUFJLEVBQUMsQ0FBTTt3QkFDWEosRUFBRSxFQUFDLENBQVU7d0JBQ2JLLFdBQVcsRUFBQyxDQUFhO3dCQUN6QkMsS0FBSyxFQUFFVCxTQUFTO3dCQUNoQlUsUUFBUSxFQUFFLFFBQVEsQ0FBUEMsQ0FBQzs0QkFBS1YsTUFBTSxDQUFOQSxZQUFZLENBQUNVLENBQUMsQ0FBQ0MsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7O2dHQUU3Q0ksQ0FBTTt3QkFBQ04sSUFBSSxFQUFDLENBQVE7a0NBQUMsQ0FBUTs7Ozs7Ozs7Ozs7O3dGQUdqQ2Isa0RBQUk7Z0JBQUNvQixJQUFJLEVBQUMsQ0FBTzswQkFBQyxDQUFJOzs7Ozs7Ozs7Ozs7QUFHN0IsQ0FBQztHQTFCS25CLGFBQWE7O1FBRXFCRixzRUFBZ0I7OztLQUZsREUsYUFBYTtBQTJCbkIsK0RBQWVBLGFBQWEsRUFFNUIsQ0FBcUM7QUFDckMsQ0FBc0M7QUFDdEMsQ0FBYTtBQUNiLENBQWU7QUFDZixDQUFxQztBQUNyQyxDQUFnRDtBQUNoRCxDQUFnQjtBQUNoQixDQUFPO0FBQ1AsQ0FBSztBQUNMLENBQXlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvd2VsY29tZS1zY3JlZW4uanN4PzI2YWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVBsYXllckNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvcGxheWVyLWNvbnRleHRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgV2VsY29tZVNjcmVlbiA9ICgpID0+IHtcbiAgLy8gUExheWVyIERBVEEgdmlhIHBsYXllckNvbnRleHRcbiAgY29uc3QgeyBwbGF5ZXJEYXRhLCBzZXRQbGF5ZXJEYXRhIH0gPSB1c2VQbGF5ZXJDb250ZXh0KCk7XG4gIGNvbnN0IHsgbmFtZSB9ID0gcERhdGEgPz8gXCJcIjtcbiAgLy8gVEVYVCBJTlBVVCBQTEFZRVIgbmFtZVxuICBjb25zdCBbbmFtZUlucHV0LCBzZXROYW1lSW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gaWQ9XCJ3ZWxjb21lLXNjcmVlblwiPlxuICAgICAgPHA+WW91ciBuYW1lIGlzIHshIW5hbWUgPyBcIm5vdCBcIiA6IFwiXCJ9ZW1wdHkuPC9wPlxuICAgICAgeyEhbmFtZSA/IChcbiAgICAgICAgXCJub3QgXCJcbiAgICAgICkgOiAoXG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgaWQ9XCJpbnB1dC1lbFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIm5hbWUgeW9zZWxmXCJcbiAgICAgICAgICAgIHZhbHVlPXtuYW1lSW5wdXR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWVJbnB1dChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj4gU3VibWl0IDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICApfVxuICAgICAgPExpbmsgaHJlZj1cIi90b3duXCI+dG93bjwvTGluaz5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgV2VsY29tZVNjcmVlbjtcblxuLy8gY29uc3QgSGVhZGVyID0gKHsgZ3JlZXRpbmcgfSkgPT4ge1xuLy8gICBjb25zdCBwRGF0YSA9IHVzZVBsYXllckNvbnRleHQoKTtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8aGVhZGVyPlxuLy8gICAgICAgPGgxPldlbGNvbWUsIHtncmVldGluZ308L2gxPlxuLy8gICAgICAgPHA+e0pTT04uc3RyaW5naWZ5KHBEYXRhLCBudWxsLCAyKX08L3A+XG4vLyAgICAgPC9oZWFkZXI+XG4vLyAgICk7XG4vLyB9O1xuLy8gZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUGxheWVyQ29udGV4dCIsIkxpbmsiLCJXZWxjb21lU2NyZWVuIiwicGxheWVyRGF0YSIsInNldFBsYXllckRhdGEiLCJuYW1lIiwicERhdGEiLCJuYW1lSW5wdXQiLCJzZXROYW1lSW5wdXQiLCJzZWN0aW9uIiwiaWQiLCJwIiwiZm9ybSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/welcome-screen.jsx\n");

/***/ })

});