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
exports.id = "pages/api/stablediffusion";
exports.ids = ["pages/api/stablediffusion"];
exports.modules = {

/***/ "replicate":
/*!****************************!*\
  !*** external "replicate" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("replicate");

/***/ }),

/***/ "(api)/./pages/api/stablediffusion.js":
/*!**************************************!*\
  !*** ./pages/api/stablediffusion.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var replicate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! replicate */ \"replicate\");\n/* harmony import */ var replicate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(replicate__WEBPACK_IMPORTED_MODULE_0__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nconst handler = async (req, res)=>{\n    if (req.method !== \"POST\") {\n        res.status(405).json({\n            message: \"Method not allowed\"\n        });\n        return;\n    }\n    const { value  } = req.body;\n    try {\n        const replicate = new (replicate__WEBPACK_IMPORTED_MODULE_0___default())({\n            auth: process.env.REPLICATE_API_TOKEN\n        });\n        const output = await replicate.run(\"stability-ai/stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf\", {\n            input: {\n                prompt: value,\n                image_dimensions: \"512x512\",\n                num_inference_steps: 12,\n                num_outputs: 1,\n                guideance_scale: 3.5,\n                scheduler: \"K_EULER\"\n            }\n        });\n        console.log(output);\n        res.status(200).json(output);\n    //res.status(200).json([\n    //   'https://replicate.delivery/pbxt/neqGIe66cYuPOUPM0JqokMfqsX9CRYgvkycUxyqlCKUjwJchA/out-0.png'\n    //  ]\n    //);\n    } catch (error) {\n        console.error(error);\n        res.status(500).json({\n            message: \"Internal server error\",\n            error\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3RhYmxlZGlmZnVzaW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDZFQUE2RTtBQUUzQztBQUVsQyxNQUFNQyxVQUFVLE9BQU9DLEtBQUtDLE1BQVE7SUFDbEMsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDekJELElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUztRQUFxQjtRQUNyRDtJQUNGLENBQUM7SUFFRCxNQUFNLEVBQUVDLE1BQUssRUFBRSxHQUFHTixJQUFJTyxJQUFJO0lBRTFCLElBQUk7UUFDRixNQUFNQyxZQUFZLElBQUlWLGtEQUFTQSxDQUFDO1lBQzlCVyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLG1CQUFtQjtRQUN2QztRQUdBLE1BQU1DLFNBQVMsTUFBTUwsVUFBVU0sR0FBRyxDQUNoQyxrR0FDQTtZQUNFQyxPQUFPO2dCQUNMQyxRQUFRVjtnQkFDUlcsa0JBQWtCO2dCQUNsQkMscUJBQXFCO2dCQUNyQkMsYUFBYTtnQkFDYkMsaUJBQWlCO2dCQUNqQkMsV0FBVztZQUNiO1FBQ0Y7UUFJRkMsUUFBUUMsR0FBRyxDQUFDVjtRQUNaWixJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDUztJQUNyQix3QkFBd0I7SUFDdkIsa0dBQWtHO0lBQ25HLEtBQUs7SUFDTCxJQUFJO0lBQ04sRUFBRSxPQUFPVyxPQUFPO1FBQ2RGLFFBQVFFLEtBQUssQ0FBQ0E7UUFDZHZCLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUztZQUF5Qm1CO1FBQU07SUFDakU7QUFDRjtBQUVBLGlFQUFlekIsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YWJsZS1kaWZmLXZlcmNlbC8uL3BhZ2VzL2FwaS9zdGFibGVkaWZmdXNpb24uanM/YmE5YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxyXG5cclxuaW1wb3J0IFJlcGxpY2F0ZSBmcm9tICdyZXBsaWNhdGUnO1xyXG5cclxuY29uc3QgaGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIGlmIChyZXEubWV0aG9kICE9PSAnUE9TVCcpIHtcclxuICAgIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgbWVzc2FnZTogJ01ldGhvZCBub3QgYWxsb3dlZCcgfSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBjb25zdCB7IHZhbHVlIH0gPSByZXEuYm9keTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcGxpY2F0ZSA9IG5ldyBSZXBsaWNhdGUoe1xyXG4gICAgICBhdXRoOiBwcm9jZXNzLmVudi5SRVBMSUNBVEVfQVBJX1RPS0VOLFxyXG4gICAgfSk7XHJcblxyXG4gICBcclxuICAgIGNvbnN0IG91dHB1dCA9IGF3YWl0IHJlcGxpY2F0ZS5ydW4oXHJcbiAgICAgIFwic3RhYmlsaXR5LWFpL3N0YWJsZS1kaWZmdXNpb246ZGIyMWU0NWQzZjcwMjNhYmMyYTQ2ZWUzOGEyMzk3M2Y2ZGNlMTZiYjA4MmE5MzBiMGM0OTg2MWY5NmQxZTViZlwiLFxyXG4gICAgICB7XHJcbiAgICAgICAgaW5wdXQ6IHtcclxuICAgICAgICAgIHByb21wdDogdmFsdWUsXHJcbiAgICAgICAgICBpbWFnZV9kaW1lbnNpb25zOiBcIjUxMng1MTJcIixcclxuICAgICAgICAgIG51bV9pbmZlcmVuY2Vfc3RlcHM6IDEyLFxyXG4gICAgICAgICAgbnVtX291dHB1dHM6IDEsXHJcbiAgICAgICAgICBndWlkZWFuY2Vfc2NhbGU6IDMuNSxcclxuICAgICAgICAgIHNjaGVkdWxlcjogXCJLX0VVTEVSXCIgLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuXHJcbiAgICBjb25zb2xlLmxvZyhvdXRwdXQpXHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihvdXRwdXQpXHJcbiAgICAvL3Jlcy5zdGF0dXMoMjAwKS5qc29uKFtcclxuICAgICAvLyAgICdodHRwczovL3JlcGxpY2F0ZS5kZWxpdmVyeS9wYnh0L25lcUdJZTY2Y1l1UE9VUE0wSnFva01mcXNYOUNSWWd2a3ljVXh5cWxDS1Vqd0pjaEEvb3V0LTAucG5nJ1xyXG4gICAgLy8gIF1cclxuICAgIC8vKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdJbnRlcm5hbCBzZXJ2ZXIgZXJyb3InLCBlcnJvciB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyOyJdLCJuYW1lcyI6WyJSZXBsaWNhdGUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJ2YWx1ZSIsImJvZHkiLCJyZXBsaWNhdGUiLCJhdXRoIiwicHJvY2VzcyIsImVudiIsIlJFUExJQ0FURV9BUElfVE9LRU4iLCJvdXRwdXQiLCJydW4iLCJpbnB1dCIsInByb21wdCIsImltYWdlX2RpbWVuc2lvbnMiLCJudW1faW5mZXJlbmNlX3N0ZXBzIiwibnVtX291dHB1dHMiLCJndWlkZWFuY2Vfc2NhbGUiLCJzY2hlZHVsZXIiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/stablediffusion.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/stablediffusion.js"));
module.exports = __webpack_exports__;

})();