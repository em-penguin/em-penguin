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

/***/ "./styles/Home.module.scss":
/*!*********************************!*\
  !*** ./styles/Home.module.scss ***!
  \*********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"main\": \"Home_main__OVLM4\",\n\t\"title\": \"Home_title__q0Qg4\",\n\t\"publishedAt\": \"Home_publishedAt__ez3IT\",\n\t\"post\": \"Home_post__u_k7Z\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2tvamltYS1ibG9nLy4vc3R5bGVzL0hvbWUubW9kdWxlLnNjc3M/N2Y2OSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtYWluXCI6IFwiSG9tZV9tYWluX19PVkxNNFwiLFxuXHRcInRpdGxlXCI6IFwiSG9tZV90aXRsZV9fcTBRZzRcIixcblx0XCJwdWJsaXNoZWRBdFwiOiBcIkhvbWVfcHVibGlzaGVkQXRfX2V6M0lUXCIsXG5cdFwicG9zdFwiOiBcIkhvbWVfcG9zdF9fdV9rN1pcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Home.module.scss\n");

/***/ }),

/***/ "./libs/client.js":
/*!************************!*\
  !*** ./libs/client.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => (/* binding */ client)\n/* harmony export */ });\n/* harmony import */ var microcms_js_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! microcms-js-sdk */ \"microcms-js-sdk\");\n/* harmony import */ var microcms_js_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(microcms_js_sdk__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = (0,microcms_js_sdk__WEBPACK_IMPORTED_MODULE_0__.createClient)({\n    serviceDomain: \"em-penguin\",\n    apiKey: process.env.API_KEY\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWJzL2NsaWVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0M7QUFFeEMsTUFBTUMsU0FBU0QsNkRBQVlBLENBQUM7SUFDL0JFLGVBQWU7SUFDZkMsUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxPQUFPO0FBQy9CLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2ppbWEtYmxvZy8uL2xpYnMvY2xpZW50LmpzP2Q5ZDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSAnbWljcm9jbXMtanMtc2RrJztcblxuZXhwb3J0IGNvbnN0IGNsaWVudCA9IGNyZWF0ZUNsaWVudCh7XG4gICAgc2VydmljZURvbWFpbjogJ2VtLXBlbmd1aW4nLFxuICAgIGFwaUtleTogcHJvY2Vzcy5lbnYuQVBJX0tFWSxcbn0pOyJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJjbGllbnQiLCJzZXJ2aWNlRG9tYWluIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIkFQSV9LRVkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./libs/client.js\n");

/***/ }),

/***/ "./pages/blog/[id].js":
/*!****************************!*\
  !*** ./pages/blog/[id].js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BlogId),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/client */ \"./libs/client.js\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Home.module.scss */ \"./styles/Home.module.scss\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n// pages/blog/[id].js\n\n\n\nfunction BlogId({ blog  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default().title),\n                children: blog.title\n            }, void 0, false, {\n                fileName: \"/Users/kojima/Documents/create/git/em-penguin/pages/blog/[id].js\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default().publishedAt),\n                children: blog.publishedAt\n            }, void 0, false, {\n                fileName: \"/Users/kojima/Documents/create/git/em-penguin/pages/blog/[id].js\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"category\",\n                children: blog.category && `${blog.category.name}`\n            }, void 0, false, {\n                fileName: \"/Users/kojima/Documents/create/git/em-penguin/pages/blog/[id].js\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                dangerouslySetInnerHTML: {\n                    __html: `${blog.body}`\n                },\n                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default().post)\n            }, void 0, false, {\n                fileName: \"/Users/kojima/Documents/create/git/em-penguin/pages/blog/[id].js\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kojima/Documents/create/git/em-penguin/pages/blog/[id].js\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, this);\n}\n// 静的生成のためのパスを指定します\nconst getStaticPaths = async ()=>{\n    const data = await _libs_client__WEBPACK_IMPORTED_MODULE_1__.client.get({\n        endpoint: \"blog\"\n    });\n    const paths = data.contents.map((content)=>`/blog/${content.id}`);\n    return {\n        paths,\n        fallback: false\n    };\n};\n// データをテンプレートに受け渡す部分の処理を記述します\nconst getStaticProps = async (context)=>{\n    const id = context.params.id;\n    const data = await _libs_client__WEBPACK_IMPORTED_MODULE_1__.client.get({\n        endpoint: \"blog\",\n        contentId: id\n    });\n    return {\n        props: {\n            blog: data\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nL1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxxQkFBcUI7QUFDckI7QUFBMkM7QUFDUTtBQUVwQyxTQUFTRSxPQUFPLEVBQUVDLEtBQUksRUFBRSxFQUFFO0lBQ3JDLHFCQUNJLDhEQUFDQztRQUFLQyxXQUFZSixzRUFBVzs7MEJBQ3pCLDhEQUFDSztnQkFBR0QsV0FBWUosdUVBQVk7MEJBQUtFLEtBQUtJLEtBQUs7Ozs7OzswQkFDM0MsOERBQUNDO2dCQUFFSCxXQUFZSiw2RUFBa0I7MEJBQUtFLEtBQUtNLFdBQVc7Ozs7OzswQkFDdEQsOERBQUNEO2dCQUFFSCxXQUFVOzBCQUFhRixLQUFLTyxRQUFRLElBQUksQ0FBQyxFQUFFUCxLQUFLTyxRQUFRLENBQUNDLElBQUksQ0FBQyxDQUFDOzs7Ozs7MEJBQ2xFLDhEQUFDQztnQkFDR0MseUJBQTBCO29CQUN0QkMsUUFBUSxDQUFDLEVBQUVYLEtBQUtZLElBQUksQ0FBQyxDQUFDO2dCQUMxQjtnQkFDQVYsV0FBWUosc0VBQVc7Ozs7Ozs7Ozs7OztBQUl2QyxDQUFDO0FBRUQsbUJBQW1CO0FBQ1osTUFBTWdCLGlCQUFpQixVQUFZO0lBQ3RDLE1BQU1DLE9BQU8sTUFBTWxCLG9EQUFVLENBQUM7UUFBRW9CLFVBQVU7SUFBTztJQUVqRCxNQUFNQyxRQUFRSCxLQUFLSSxRQUFRLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxVQUFZLENBQUMsTUFBTSxFQUFFQSxRQUFRQyxFQUFFLENBQUMsQ0FBQztJQUNsRSxPQUFPO1FBQUVKO1FBQU9LLFVBQVUsS0FBSztJQUFDO0FBQ3BDLEVBQUU7QUFFRiw2QkFBNkI7QUFDdEIsTUFBTUMsaUJBQWlCLE9BQU9DLFVBQVk7SUFDN0MsTUFBTUgsS0FBS0csUUFBUUMsTUFBTSxDQUFDSixFQUFFO0lBQzVCLE1BQU1QLE9BQU8sTUFBTWxCLG9EQUFVLENBQUM7UUFBRW9CLFVBQVU7UUFBUVUsV0FBV0w7SUFBRztJQUVoRSxPQUFPO1FBQ0hNLE9BQU87WUFDSDVCLE1BQU1lO1FBQ1Y7SUFDSjtBQUNKLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2ppbWEtYmxvZy8uL3BhZ2VzL2Jsb2cvW2lkXS5qcz81YzllIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL2Jsb2cvW2lkXS5qc1xuaW1wb3J0IHsgY2xpZW50IH0gZnJvbSBcIi4uLy4uL2xpYnMvY2xpZW50XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZ0lkKHsgYmxvZyB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPXsgc3R5bGVzLm1haW4gfT5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9eyBzdHlsZXMudGl0bGUgfT57IGJsb2cudGl0bGUgfTwvaDE+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9eyBzdHlsZXMucHVibGlzaGVkQXQgfT57IGJsb2cucHVibGlzaGVkQXQgfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhdGVnb3J5XCI+eyBibG9nLmNhdGVnb3J5ICYmIGAke2Jsb2cuY2F0ZWdvcnkubmFtZX1gIH08L3A+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7XG4gICAgICAgICAgICAgICAgICAgIF9faHRtbDogYCR7YmxvZy5ib2R5fWAsXG4gICAgICAgICAgICAgICAgfSB9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgc3R5bGVzLnBvc3QgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9tYWluPlxuICAgICk7XG59XG5cbi8vIOmdmeeahOeUn+aIkOOBruOBn+OCgeOBruODkeOCueOCkuaMh+WumuOBl+OBvuOBmVxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBjbGllbnQuZ2V0KHsgZW5kcG9pbnQ6IFwiYmxvZ1wiIH0pO1xuXG4gICAgY29uc3QgcGF0aHMgPSBkYXRhLmNvbnRlbnRzLm1hcCgoY29udGVudCkgPT4gYC9ibG9nLyR7Y29udGVudC5pZH1gKTtcbiAgICByZXR1cm4geyBwYXRocywgZmFsbGJhY2s6IGZhbHNlIH07XG59O1xuXG4vLyDjg4fjg7zjgr/jgpLjg4bjg7Pjg5fjg6zjg7zjg4jjgavlj5fjgZHmuKHjgZnpg6jliIbjga7lh6bnkIbjgpLoqJjov7DjgZfjgb7jgZlcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gICAgY29uc3QgaWQgPSBjb250ZXh0LnBhcmFtcy5pZDtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgY2xpZW50LmdldCh7IGVuZHBvaW50OiBcImJsb2dcIiwgY29udGVudElkOiBpZCB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBibG9nOiBkYXRhLFxuICAgICAgICB9LFxuICAgIH07XG59OyJdLCJuYW1lcyI6WyJjbGllbnQiLCJzdHlsZXMiLCJCbG9nSWQiLCJibG9nIiwibWFpbiIsImNsYXNzTmFtZSIsImgxIiwidGl0bGUiLCJwIiwicHVibGlzaGVkQXQiLCJjYXRlZ29yeSIsIm5hbWUiLCJkaXYiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImJvZHkiLCJwb3N0IiwiZ2V0U3RhdGljUGF0aHMiLCJkYXRhIiwiZ2V0IiwiZW5kcG9pbnQiLCJwYXRocyIsImNvbnRlbnRzIiwibWFwIiwiY29udGVudCIsImlkIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJwYXJhbXMiLCJjb250ZW50SWQiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog/[id].js\n");

/***/ }),

/***/ "microcms-js-sdk":
/*!**********************************!*\
  !*** external "microcms-js-sdk" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("microcms-js-sdk");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/blog/[id].js"));
module.exports = __webpack_exports__;

})();