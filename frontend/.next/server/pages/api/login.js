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
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "next-iron-session":
/*!************************************!*\
  !*** external "next-iron-session" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("next-iron-session");

/***/ }),

/***/ "(api)/./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_iron_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-iron-session */ \"next-iron-session\");\n/* harmony import */ var next_iron_session__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_iron_session__WEBPACK_IMPORTED_MODULE_1__);\n // You should hash passwords before storing them\n\nconst handler = async (req, res)=>{\n    if (req.method !== \"POST\") {\n        return res.status(405).end();\n    }\n    const { username, password } = req.body;\n    const hardcodedUser = {\n        id: 1,\n        username: \"asunny\",\n        password: \"sunnya\"\n    };\n    if (username !== hardcodedUser.username || password !== hardcodedUser.password) {\n        res.status(401).json({\n            message: \"Invalid username or password\"\n        });\n        return;\n    }\n    // If login was successful:\n    req.session.set(\"user\", {\n        id: hardcodedUser.id\n    }); // Replace 'user.id' with actual user ID\n    await req.session.save();\n    res.status(200).json({\n        message: \"Logged in successfully\"\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_iron_session__WEBPACK_IMPORTED_MODULE_1__.withIronSession)(handler, {\n    password: process.env.SECRET_COOKIE_PASSWORD,\n    cookieName: \"MY_APP_COOKIE\",\n    cookieOptions: {\n        secure: \"development\" === \"production\"\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBbUMsQ0FBQyxnREFBZ0Q7QUFDaEM7QUFFcEQsTUFBTUUsVUFBVSxPQUFPQyxLQUFLQztJQUMxQixJQUFJRCxJQUFJRSxXQUFXLFFBQVE7UUFDekIsT0FBT0QsSUFBSUUsT0FBTyxLQUFLQztJQUN6QjtJQUVBLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxRQUFRLEVBQUUsR0FBR04sSUFBSU87SUFFbkMsTUFBTUMsZ0JBQWdCO1FBQ3BCQyxJQUFJO1FBQ0pKLFVBQVU7UUFDVkMsVUFBVTtJQUNaO0lBRUEsSUFDRUQsYUFBYUcsY0FBY0gsWUFDM0JDLGFBQWFFLGNBQWNGLFVBQzNCO1FBQ0FMLElBQUlFLE9BQU8sS0FBS08sS0FBSztZQUFFQyxTQUFTO1FBQStCO1FBQy9EO0lBQ0Y7SUFFQSwyQkFBMkI7SUFDM0JYLElBQUlZLFFBQVFDLElBQUksUUFBUTtRQUFFSixJQUFJRCxjQUFjQztJQUFHLElBQUksd0NBQXdDO0lBQzNGLE1BQU1ULElBQUlZLFFBQVFFO0lBRWxCYixJQUFJRSxPQUFPLEtBQUtPLEtBQUs7UUFBRUMsU0FBUztJQUF5QjtBQUMzRDtBQUVBLGlFQUFlYixrRUFBZUEsQ0FBQ0MsU0FBUztJQUN0Q08sVUFBVVMsUUFBUUMsSUFBSUM7SUFDdEJDLFlBQVk7SUFDWkMsZUFBZTtRQUNiQyxRQUFRTCxrQkFBeUI7SUFDbkM7QUFDRixFQUFFLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbXMtc29mdHdhcmUvLi9wYWdlcy9hcGkvbG9naW4uanM/YWU4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21wYXJlIH0gZnJvbSBcImJjcnlwdGpzXCI7IC8vIFlvdSBzaG91bGQgaGFzaCBwYXNzd29yZHMgYmVmb3JlIHN0b3JpbmcgdGhlbVxuaW1wb3J0IHsgd2l0aElyb25TZXNzaW9uIH0gZnJvbSBcIm5leHQtaXJvbi1zZXNzaW9uXCI7XG5cbmNvbnN0IGhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgaWYgKHJlcS5tZXRob2QgIT09IFwiUE9TVFwiKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5lbmQoKTtcbiAgfVxuXG4gIGNvbnN0IHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0gPSByZXEuYm9keTtcblxuICBjb25zdCBoYXJkY29kZWRVc2VyID0ge1xuICAgIGlkOiAxLCAvLyBNb2NrIHVzZXIgSURcbiAgICB1c2VybmFtZTogXCJhc3VubnlcIixcbiAgICBwYXNzd29yZDogXCJzdW5ueWFcIixcbiAgfTtcblxuICBpZiAoXG4gICAgdXNlcm5hbWUgIT09IGhhcmRjb2RlZFVzZXIudXNlcm5hbWUgfHxcbiAgICBwYXNzd29yZCAhPT0gaGFyZGNvZGVkVXNlci5wYXNzd29yZFxuICApIHtcbiAgICByZXMuc3RhdHVzKDQwMSkuanNvbih7IG1lc3NhZ2U6IFwiSW52YWxpZCB1c2VybmFtZSBvciBwYXNzd29yZFwiIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIElmIGxvZ2luIHdhcyBzdWNjZXNzZnVsOlxuICByZXEuc2Vzc2lvbi5zZXQoXCJ1c2VyXCIsIHsgaWQ6IGhhcmRjb2RlZFVzZXIuaWQgfSk7IC8vIFJlcGxhY2UgJ3VzZXIuaWQnIHdpdGggYWN0dWFsIHVzZXIgSURcbiAgYXdhaXQgcmVxLnNlc3Npb24uc2F2ZSgpO1xuXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogXCJMb2dnZWQgaW4gc3VjY2Vzc2Z1bGx5XCIgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoSXJvblNlc3Npb24oaGFuZGxlciwge1xuICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuU0VDUkVUX0NPT0tJRV9QQVNTV09SRCxcbiAgY29va2llTmFtZTogXCJNWV9BUFBfQ09PS0lFXCIsXG4gIGNvb2tpZU9wdGlvbnM6IHtcbiAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIixcbiAgfSxcbn0pO1xuIl0sIm5hbWVzIjpbImNvbXBhcmUiLCJ3aXRoSXJvblNlc3Npb24iLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwiZW5kIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImJvZHkiLCJoYXJkY29kZWRVc2VyIiwiaWQiLCJqc29uIiwibWVzc2FnZSIsInNlc3Npb24iLCJzZXQiLCJzYXZlIiwicHJvY2VzcyIsImVudiIsIlNFQ1JFVF9DT09LSUVfUEFTU1dPUkQiLCJjb29raWVOYW1lIiwiY29va2llT3B0aW9ucyIsInNlY3VyZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/login.js"));
module.exports = __webpack_exports__;

})();