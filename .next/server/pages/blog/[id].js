"use strict";
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
exports.id = "pages/blog/[id]";
exports.ids = ["pages/blog/[id]"];
exports.modules = {

/***/ "./libs/client.js":
/*!************************!*\
  !*** ./libs/client.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => (/* binding */ client)\n/* harmony export */ });\n/* harmony import */ var microcms_js_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! microcms-js-sdk */ \"microcms-js-sdk\");\n/* harmony import */ var microcms_js_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(microcms_js_sdk__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = (0,microcms_js_sdk__WEBPACK_IMPORTED_MODULE_0__.createClient)({\n    serviceDomain: \"em-penguin\",\n    apiKey: process.env.API_KEY\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWJzL2NsaWVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0M7QUFFeEMsTUFBTUMsU0FBU0QsNkRBQVlBLENBQUM7SUFDL0JFLGVBQWU7SUFDZkMsUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxPQUFPO0FBQy9CLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2ppbWEtYmxvZy8uL2xpYnMvY2xpZW50LmpzP2Q5ZDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSAnbWljcm9jbXMtanMtc2RrJztcblxuZXhwb3J0IGNvbnN0IGNsaWVudCA9IGNyZWF0ZUNsaWVudCh7XG4gICAgc2VydmljZURvbWFpbjogJ2VtLXBlbmd1aW4nLFxuICAgIGFwaUtleTogcHJvY2Vzcy5lbnYuQVBJX0tFWSxcbn0pOyJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJjbGllbnQiLCJzZXJ2aWNlRG9tYWluIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIkFQSV9LRVkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./libs/client.js\n");

/***/ }),

/***/ "./pages/blog/[id].js":
/*!****************************!*\
  !*** ./pages/blog/[id].js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BlogId),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/client */ \"./libs/client.js\");\n// pages/blog/[id].js\n\n\nfunction BlogId({ blog  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: blog.title\n            }, void 0, false, {\n                fileName: \"/Users/kojima/Documents/create/git/next-blog/pages/blog/[id].js\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: blog.publishedAt\n            }, void 0, false, {\n                fileName: \"/Users/kojima/Documents/create/git/next-blog/pages/blog/[id].js\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                dangerouslySetInnerHTML: {\n                    __html: `${blog.body}`\n                }\n            }, void 0, false, {\n                fileName: \"/Users/kojima/Documents/create/git/next-blog/pages/blog/[id].js\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kojima/Documents/create/git/next-blog/pages/blog/[id].js\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, this);\n}\n// 静的生成のためのパスを指定します\nconst getStaticPaths = async ()=>{\n    const data = await _libs_client__WEBPACK_IMPORTED_MODULE_1__.client.get({\n        endpoint: \"blog\"\n    });\n    const paths = data.contents.map((content)=>`/blog/${content.id}`);\n    return {\n        paths,\n        fallback: false\n    };\n};\n// データをテンプレートに受け渡す部分の処理を記述します\nconst getStaticProps = async (context)=>{\n    const id = context.params.id;\n    const data = await _libs_client__WEBPACK_IMPORTED_MODULE_1__.client.get({\n        endpoint: \"blog\",\n        contentId: id\n    });\n    return {\n        props: {\n            blog: data\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nL1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUJBQXFCO0FBQ3JCO0FBQTJDO0FBRTVCLFNBQVNDLE9BQU8sRUFBRUMsS0FBSSxFQUFFLEVBQUU7SUFDckMscUJBQ0ksOERBQUNDOzswQkFDRyw4REFBQ0M7MEJBQUtGLEtBQUtHLEtBQUs7Ozs7OzswQkFDaEIsOERBQUNDOzBCQUFJSixLQUFLSyxXQUFXOzs7Ozs7MEJBQ3JCLDhEQUFDQztnQkFDR0MseUJBQTBCO29CQUN0QkMsUUFBUSxDQUFDLEVBQUVSLEtBQUtTLElBQUksQ0FBQyxDQUFDO2dCQUMxQjs7Ozs7Ozs7Ozs7O0FBSWhCLENBQUM7QUFFRCxtQkFBbUI7QUFDWixNQUFNQyxpQkFBaUIsVUFBWTtJQUN0QyxNQUFNQyxPQUFPLE1BQU1iLG9EQUFVLENBQUM7UUFBRWUsVUFBVTtJQUFPO0lBRWpELE1BQU1DLFFBQVFILEtBQUtJLFFBQVEsQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLFVBQVksQ0FBQyxNQUFNLEVBQUVBLFFBQVFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xFLE9BQU87UUFBRUo7UUFBT0ssVUFBVSxLQUFLO0lBQUM7QUFDcEMsRUFBRTtBQUVGLDZCQUE2QjtBQUN0QixNQUFNQyxpQkFBaUIsT0FBT0MsVUFBWTtJQUM3QyxNQUFNSCxLQUFLRyxRQUFRQyxNQUFNLENBQUNKLEVBQUU7SUFDNUIsTUFBTVAsT0FBTyxNQUFNYixvREFBVSxDQUFDO1FBQUVlLFVBQVU7UUFBUVUsV0FBV0w7SUFBRztJQUVoRSxPQUFPO1FBQ0hNLE9BQU87WUFDSHhCLE1BQU1XO1FBQ1Y7SUFDSjtBQUNKLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2ppbWEtYmxvZy8uL3BhZ2VzL2Jsb2cvW2lkXS5qcz81YzllIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL2Jsb2cvW2lkXS5qc1xuaW1wb3J0IHsgY2xpZW50IH0gZnJvbSBcIi4uLy4uL2xpYnMvY2xpZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2dJZCh7IGJsb2cgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxtYWluPlxuICAgICAgICAgICAgPGgxPnsgYmxvZy50aXRsZSB9PC9oMT5cbiAgICAgICAgICAgIDxwPnsgYmxvZy5wdWJsaXNoZWRBdCB9PC9wPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsge1xuICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IGAke2Jsb2cuYm9keX1gLFxuICAgICAgICAgICAgICAgIH0gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9tYWluPlxuICAgICk7XG59XG5cbi8vIOmdmeeahOeUn+aIkOOBruOBn+OCgeOBruODkeOCueOCkuaMh+WumuOBl+OBvuOBmVxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBjbGllbnQuZ2V0KHsgZW5kcG9pbnQ6IFwiYmxvZ1wiIH0pO1xuXG4gICAgY29uc3QgcGF0aHMgPSBkYXRhLmNvbnRlbnRzLm1hcCgoY29udGVudCkgPT4gYC9ibG9nLyR7Y29udGVudC5pZH1gKTtcbiAgICByZXR1cm4geyBwYXRocywgZmFsbGJhY2s6IGZhbHNlIH07XG59O1xuXG4vLyDjg4fjg7zjgr/jgpLjg4bjg7Pjg5fjg6zjg7zjg4jjgavlj5fjgZHmuKHjgZnpg6jliIbjga7lh6bnkIbjgpLoqJjov7DjgZfjgb7jgZlcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gICAgY29uc3QgaWQgPSBjb250ZXh0LnBhcmFtcy5pZDtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgY2xpZW50LmdldCh7IGVuZHBvaW50OiBcImJsb2dcIiwgY29udGVudElkOiBpZCB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBibG9nOiBkYXRhLFxuICAgICAgICB9LFxuICAgIH07XG59OyJdLCJuYW1lcyI6WyJjbGllbnQiLCJCbG9nSWQiLCJibG9nIiwibWFpbiIsImgxIiwidGl0bGUiLCJwIiwicHVibGlzaGVkQXQiLCJkaXYiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImJvZHkiLCJnZXRTdGF0aWNQYXRocyIsImRhdGEiLCJnZXQiLCJlbmRwb2ludCIsInBhdGhzIiwiY29udGVudHMiLCJtYXAiLCJjb250ZW50IiwiaWQiLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsInBhcmFtcyIsImNvbnRlbnRJZCIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blog/[id].js\n");

/***/ }),

/***/ "microcms-js-sdk":
/*!**********************************!*\
  !*** external "microcms-js-sdk" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("microcms-js-sdk");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/blog/[id].js"));
module.exports = __webpack_exports__;

})();