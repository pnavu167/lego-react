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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/frontend/frontend.js":
/*!*******************************************!*\
  !*** ./resources/js/frontend/frontend.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./layouts/AppComponent */ "./resources/js/frontend/layouts/AppComponent.js");

window.addEventListener("scroll", function (event) {
  var scroll = this.scrollY;

  if (scroll >= 100) {
    toggleClassOntop(false);
  } else {
    toggleClassOntop(true);
  }
});

function toggleClassOntop(onTop) {
  var topBar = $('#top-bar').find('.home-topbar');

  if (onTop == true) {
    if (!topBar.hasClass('on-top')) {
      topBar.addClass('on-top');
    }
  } else {
    if (topBar.hasClass('on-top')) {
      topBar.removeClass('on-top');
    }
  }
}

$('.home-slider').slick({
  dots: false,
  infinite: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  variableHeight: true,
  vertical: true
});
$(document).ready(function () {
  $('.popoverData').popover();
});

/***/ }),

/***/ "./resources/js/frontend/layouts/AppComponent.js":
/*!*******************************************************!*\
  !*** ./resources/js/frontend/layouts/AppComponent.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\xampp\\htdocs\\lego-react\\resources\\js\\frontend\\layouts\\AppComponent.js: Identifier 'Home' has already been declared (14:7)\n\n\u001b[0m \u001b[90m 12 | \u001b[39m\u001b[36mimport\u001b[39m \u001b[33mPostTwo\u001b[39m from \u001b[32m'../News/PostTwoComponent'\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 13 | \u001b[39m\u001b[36mimport\u001b[39m \u001b[33mPostThree\u001b[39m from \u001b[32m'../News/PostThreeComponent'\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 14 | \u001b[39m\u001b[36mimport\u001b[39m \u001b[33mHome\u001b[39m from \u001b[32m'@/home/HomeComponent'\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m       \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 15 | \u001b[39m\u001b[36mimport\u001b[39m \u001b[33mProductList\u001b[39m from \u001b[32m'@/product/list/ListComponent'\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 16 | \u001b[39m\u001b[36mimport\u001b[39m \u001b[33mProductDetail\u001b[39m from \u001b[32m'@/product/detail/DetailComponent'\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 17 | \u001b[39m\u001b[0m\n    at Object.raise (C:\\xampp\\htdocs\\lego-react\\node_modules\\@babel\\parser\\lib\\index.js:6325:17)\n    at ScopeHandler.checkRedeclarationInScope (C:\\xampp\\htdocs\\lego-react\\node_modules\\@babel\\parser\\lib\\index.js:3759:12)\n    at ScopeHandler.declareName (C:\\xampp\\htdocs\\lego-react\\node_modules\\@babel\\parser\\lib\\index.js:3725:12)\n    at Object.checkLVal (C:\\xampp\\htdocs\\lego-react\\node_modules\\@babel\\parser\\lib\\index.js:8021:22)\n    at Object.parseImportSpecifierLocal (C:\\xampp\\htdocs\\lego-react\\node_modules\\@babel\\parser\\lib\\index.js:11187:10)\n    at Object.maybeParseDefaultImportSpecifier (C:\\xampp\\htdocs\\lego-react\\node_modules\\@babel\\parser\\lib\\index.js:11193:12)\n    at Object.parseImport (C:\\xampp\\htdocs\\lego-react\\node_modules\\@babel\\parser\\lib\\index.js:11164:31)\n    at Object.parseStatementContent (C:\\xampp\\htdocs\\lego-react\\node_modules\\@babel\\parser\\lib\\index.js:9927:27)\n    at Object.parseStatement (C:\\xampp\\htdocs\\lego-react\\node_modules\\@babel\\parser\\lib\\index.js:9829:17)\n    at Object.parseBlockOrModuleBlockBody (C:\\xampp\\htdocs\\lego-react\\node_modules\\@babel\\parser\\lib\\index.js:10405:25)\n    at Object.parseBlockBody (C:\\xampp\\htdocs\\lego-react\\node_modules\\@babel\\parser\\lib\\index.js:10392:10)\n    at Object.parseTopLevel (C:\\xampp\\htdocs\\lego-react\\node_modules\\@babel\\parser\\lib\\index.js:9758:10)\n    at Object.parse (C:\\xampp\\htdocs\\lego-react\\node_modules\\@babel\\parser\\lib\\index.js:11270:17)\n    at parse (C:\\xampp\\htdocs\\lego-react\\node_modules\\@babel\\parser\\lib\\index.js:11306:38)\n    at parser (C:\\xampp\\htdocs\\lego-react\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:170:34)\n    at normalizeFile (C:\\xampp\\htdocs\\lego-react\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:138:11)\n    at runSync (C:\\xampp\\htdocs\\lego-react\\node_modules\\@babel\\core\\lib\\transformation\\index.js:44:43)\n    at runAsync (C:\\xampp\\htdocs\\lego-react\\node_modules\\@babel\\core\\lib\\transformation\\index.js:35:14)\n    at process.nextTick (C:\\xampp\\htdocs\\lego-react\\node_modules\\@babel\\core\\lib\\transform.js:34:34)\n    at _combinedTickCallback (internal/process/next_tick.js:132:7)\n    at process._tickCallback (internal/process/next_tick.js:181:9)");

/***/ }),

/***/ 1:
/*!*************************************************!*\
  !*** multi ./resources/js/frontend/frontend.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\lego-react\resources\js\frontend\frontend.js */"./resources/js/frontend/frontend.js");


/***/ })

/******/ });