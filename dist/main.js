/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/amazonlogocut.png":
/*!*******************************!*\
  !*** ./src/amazonlogocut.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"7972647f72c1f79cb3a5c46e21f3d817.png\");\n\n//# sourceURL=webpack:///./src/amazonlogocut.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_amazonlogocut_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../src/amazonlogocut.png */ \"./src/amazonlogocut.png\");\n\r\n\r\nconst apiRoute = \"http://localhost\";\r\n\r\nconst Api = {\r\n    getArticles: () => {\r\n        return fetch(apiRoute).then((response) => response.json());\r\n    }\r\n};\r\n\r\nconst QuerySearch = {\r\n    getArticles: (query) => {\r\n        return fetch(`${apiRoute}/${query}`).then((response) => response.json());\r\n    }\r\n}\r\n\r\nconst TopTen = {\r\n    getTopTen : () => {\r\n        return fetch(`${apiRoute}/top10`).then((response) => response.json());\r\n    }\r\n}\r\n\r\nconst navbar = () => {\r\n    const navbarContent = `\r\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-light fixed-top\">\r\n        <span id=\"logo\" class=\"logo navbar-brand\" href=\"#\"><img class=\"logo\" src=${_src_amazonlogocut_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"]} alt=\"\">NEWSFEED</span>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n            <ul class=\"navbar-nav mr-auto\">\r\n                <li class=\"nav-item\">\r\n                    <span class=\"nav-link\" id=\"bezos\">Jeff Bezos</span>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <span class=\"nav-link\" id=\"alexa\">Alexa</span>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <span class=\"nav-link\" id=\"prime\">Prime Video</span>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <span class=\"nav-link\" id=\"grandtour\">Grand Tour</span>\r\n                </li>\r\n            </ul>\r\n            <form class=\"form-inline my-2 my-lg-0\">\r\n                <input id=\"querysearch\" class=\"form-control mr-sm-2\" navbartype=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n                <button id=\"searchbtn\" class=\"btn btn-outline-secondary my-2 my-sm-0\" type=\"submit\">Search</button>\r\n            </form>\r\n        </div>\r\n    </nav>\r\n    `;\r\n    document.getElementById(\"navbar\").innerHTML = navbarContent;\r\n    document.getElementById(\"logo\").onclick = (event) => showArticles();\r\n    document.getElementById(\"searchbtn\").onclick = (event) => {\r\n        event.preventDefault();\r\n        let query = document.getElementById(\"querysearch\").value;\r\n        showArticles(query);\r\n    };\r\n    document.getElementById(\"bezos\").onclick = (event) => showArticles(\"Jeff Bezos\");\r\n    document.getElementById(\"alexa\").onclick = (event) => showArticles(\"Alexa\");\r\n    document.getElementById(\"prime\").onclick = (event) => showArticles(\"Prime Video\");\r\n    document.getElementById(\"grandtour\").onclick = (event) => showArticles(\"Grand Tour\");\r\n};\r\n\r\nfunction showArticles(queryPhrase) {\r\n\r\n    const removeReadMoreFromDescription = (description) => {\r\n        const regex = /(.*)(Read more\\.\\.\\.)/;\r\n        let result = description.match(regex);\r\n        if (result){\r\n            return result[1];\r\n        }\r\n        return description;\r\n    };\r\n    const removeCharsFromContent = (content) => {\r\n        const regex = /(.*)(\\[\\+\\d+ chars\\])$/s;\r\n        let result = content.match(regex);\r\n        if(result){\r\n            return result[1];\r\n        }\r\n        return content;\r\n    };\r\n\r\n    const articleCard = ({urlToImage, title, description, content, url}) => `\r\n    <div class=\"card mb-3\">\r\n        <img src=\"${urlToImage}\" class=\"card-img-top\" alt=\"...\">\r\n        <div class=\"card-body\">\r\n            <h4 class=\"card-title font-weight-bolder\">${title}</h4>\r\n            <h5 class=\"card-subtitle mb-2\">${description ? removeReadMoreFromDescription(description) : description}</h5>\r\n            <p class=\"card-text\">${content ? removeCharsFromContent(content) : content}</p>\r\n            <button type=\"button\" class=\"btn btn-secondary\" onclick=\"window.open('${url}')\">Read more</button>\r\n        </div>\r\n    </div>\r\n    `;\r\n\r\n    const topTenCardContent = ({title, url}) => `<li class=\"list-group-item\" onclick=\"window.open('${url}')\">${title}</li>`;\r\n\r\n    const getFilteredArticles = (query) => {\r\n        QuerySearch.getArticles(query)\r\n        .catch((err) => {\r\n            document.getElementById(\"main\").innerHTML = `\r\n            <h1 style=\"color: red\">${err}</h1>\r\n            <h2>${err.message}</h2>\r\n            `;\r\n            throw err;\r\n        })\r\n        .then((response) => {\r\n            const articlesContainer = `\r\n            <div class=\"page-content container\">\r\n                <div class=\"row\">\r\n                    <div id=\"articles\" class=\"col col-md-8 p-0\">\r\n                        ${(response).map(data => (articleCard(data))).join(\"\")}\r\n                    </div>\r\n                    <div id=\"top-articles\" class=\"col-4 d-none d-md-block p-0\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            `;\r\n            document.getElementById(\"main\").innerHTML = articlesContainer;\r\n            getTopTenArticles();\r\n        });\r\n    }\r\n\r\n    const getTopTenArticles = () => TopTen.getTopTen()\r\n    .catch((err) => {\r\n        document.getElementById(\"main\").innerHTML = `\r\n        <h1 style=\"color: red\">${err}</h1>\r\n        <h2>${err.message}</h2>\r\n        `;\r\n        throw err;\r\n    })\r\n    .then((response) => {\r\n        const topTenCard = `\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">\r\n                Top 10 articles\r\n            </div>\r\n            <ul class=\"list-group list-group-flush\">\r\n                ${(response).map(data => (topTenCardContent(data))).join(\"\")}\r\n            </ul>\r\n        </div>\r\n        `;\r\n        document.getElementById(\"top-articles\").innerHTML = topTenCard;\r\n    });\r\n\r\n    const getArticles = () => Api.getArticles()\r\n    .catch((err) => {\r\n        document.getElementById(\"main\").innerHTML = `\r\n        <h1 style=\"color: red\">${err}</h1>\r\n        <h2>${err.message}</h2>\r\n        `;\r\n        throw err;\r\n    })\r\n    .then((response) => {\r\n        const articlesContainer = `\r\n        <div class=\"page-content container\">\r\n            <div class=\"row\">\r\n                <div id=\"articles\" class=\"col col-md-8 p-0\">\r\n                    ${(response).map(data => (articleCard(data))).join(\"\")}\r\n                </div>\r\n                <div id=\"top-articles\" class=\"col-4 d-none d-md-block p-0\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        `;\r\n        document.getElementById(\"main\").innerHTML = articlesContainer;\r\n        getTopTenArticles();\r\n    });\r\n\r\n    if (queryPhrase) getFilteredArticles(queryPhrase);\r\n    else getArticles();\r\n    \r\n}\r\nnavbar();\r\nshowArticles();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/style.scss?");

/***/ })

/******/ });