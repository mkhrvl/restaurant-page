"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! norican-regular.woff */ "./src/norican-regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! norican-regular.woff2 */ "./src/norican-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'Norican';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff'), url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('woff2');
}

/*
  Josh's Custom CSS Reset
  https://www.joshwcomeau.com/css/custom-css-reset/
*/
*,
*::before,
*::after {
    box-sizing: border-box;
}

* {
    margin: 0;
}

body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
}

img,
picture,
video,
canvas,
svg {
    display: block;
    max-width: 100%;
}

input,
button,
textarea,
select {
    font: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
    overflow-wrap: break-word;
}

#root,
#__next {
    isolation: isolate;
}

:root {
    --w-page: 85em;
    --h-header: 10svh;
    --clr-off-white: #fffaf1;
    --clr-off-light-white: #fffdf9;
    --clr-maroon: #803d3b;
    --clr-light-maroon: #b28a89;
    --clr-brown: #af8260;
    --clr-light-brown: #c7a78f;
    --clr-dark-brown: #322c2b;
    --border-radius: 8px;
}

body {
    background-color: var(--clr-off-white);
    font-family: Georgia, 'Times New Roman', Times, serif;
}

.logo {
    color: var(--clr-maroon);
    font-family: 'Norican', serif;
}

/* Header */

.header {
    display: flex;
    justify-content: center;
    min-height: var(--h-header);
    padding: 1rem 2rem;
}

.header__container {
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: var(--w-page);
}

.header__logo {
    font-size: 2rem;
}

.header__nav {
    align-items: center;
    display: flex;
    gap: 2rem;
}

.nav__link {
    background-color: rgba(0, 0, 0, 0);
    border: none;
    transition: color 250ms ease-in-out;
}

.nav__link:hover {
    color: var(--clr-brown);
    cursor: pointer;
}

.nav__link-active {
    color: var(--clr-maroon);
}

#content {
    display: flex;
    justify-content: center;
    min-height: calc(100svh - var(--h-header));
    padding: 2rem;
}

/* Transition */
.home,
.menu,
.about {
    opacity: 0;
    transition: opacity 500ms ease-in;
}

.visible {
    opacity: 1;
}

/* Home */

.home {
    display: grid;
    gap: 6rem;
    grid-template-columns: 2fr 3fr;
    height: fit-content;
    padding: 3rem 0;
    width: var(--w-page);
}

.home__content {
    color: var(--clr-dark-brown);
    display: grid;
    gap: 1rem;
    grid-template-rows: repeat(3, min-content);
    margin-top: 1em;
}

.home__tagline {
    font-size: 3rem;
    line-height: 1.3;
}

.home__desc {
    font-size: 1rem;
    margin-bottom: 1rem;
}

.home__cta {
    background-color: var(--clr-dark-brown);
    border: 1px solid var(--clr-dark-brown);
    color: var(--clr-off-white);
    font-size: 1.25rem;
    justify-self: start;
    padding: 0.25em 1.15em;
    transition: all 250ms ease-in-out;
}

.home__cta:hover {
    background-color: var(--clr-off-white);
    color: var(--clr-dark-brown);
    cursor: pointer;
}

.home__img {
    align-self: center;
    object-fit: contain;
    transition: transform 500ms ease-in-out;
}

.home__img:hover {
    transform: scale(1.025);
}

@media (max-width: 1000px) {
    .home {
        gap: 0;
        grid-template-columns: 1fr;
        padding-top: 0;
    }

    .home__content {
        text-align: center;
    }

    .home__cta {
        justify-self: center;
    }

    .home__img {
        grid-area: 1 / 1;
        margin-bottom: 2rem;
        padding: 0 4rem;
    }
}

/* Menu */

.menu {
    padding: 2rem;
}

.menu__filipino,
.menu__classic {
    margin-bottom: 6rem;
    text-align: center;
}

.menu__header {
    color: var(--clr-maroon);
    font-size: 2rem;
    margin-bottom: 2rem;
}

.menu__container {
    display: flex;
    flex-flow: row wrap;
    gap: 2rem;
    justify-content: center;
}

.menu__card {
    background-color: var(--clr-off-light-white);
    border-radius: var(--border-radius);
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-flow: column nowrap;
    transition: transform 250ms ease-in-out;
    width: 260px;
}

.menu__card:hover {
    transform: translateY(-10px);
}

.menu__card-img {
    align-items: center;
    background-color: var(--clr-dark-brown);
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    color: var(--clr-off-light-white);
    display: flex;
    font-size: 0.8rem;
    height: 200px;
    justify-content: center;
}

.menu__card-content {
    display: grid;
    gap: 0.5rem;
    margin-bottom: 1rem;
    padding: 1rem 1.5rem;
}

.menu__card-header {
    color: var(--clr-dark-brown);
    font-size: 1.15rem;
}

.menu__card-desc {
    font-size: 0.8rem;
    text-align: center;
}

/* About */

.about {
    align-items: center;
    display: grid;
    gap: 1rem;
    margin-bottom: 3rem;
    width: var(--w-page);
}

.about-us,
.story,
.mission {
    display: grid;
    gap: 3rem;
    grid-template-columns: auto 1fr;
    justify-self: left;
}

.story {
    grid-template-columns: 1fr auto;
    justify-self: right;
}

.story > .about__header {
    grid-area: 1 / 2;
}

.about__header {
    align-self: start;
    color: var(--clr-dark-brown);
    font-size: 5rem;
    line-height: 1;
    position: relative;
}

.about-us > .about__header::before,
.story > .about__header::before,
.mission > .about__header::before {
    background-color: var(--clr-light-brown);
    content: '';
    height: 50%;
    left: -5%;
    position: absolute;
    top: 60%;
    width: 100%;
    z-index: -1;
}

.story > .about__header::before {
    background-color: var(--clr-light-maroon);
    left: 5%;
}

.about__body {
    font-size: 0.9rem;
    max-width: 70ch;
}

@media (max-width: 1000px) {
    .about {
        gap: 4rem;
        justify-content: center;
    }

    .about-us,
    .story,
    .mission {
        gap: 2rem;
        grid-template-columns: 1fr;
    }

    .story > .about__header {
        grid-area: 1 / 1;
    }

    .story > .about__header::before {
        left: -5%;
    }
}

/* Footer */

.footer {
    background-color: var(--clr-dark-brown);
    color: var(--clr-off-white);
    display: flex;
    justify-content: center;
    padding: 3rem 2rem;
}

.footer__container {
    display: grid;
    grid-template-areas:
        'logo contact'
        'logo copyright';
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    row-gap: 2rem;
    width: var(--w-page);
}

.footer__logo {
    color: var(--clr-off-white);
    font-size: 2.5rem;
    grid-area: logo;
}

.footer__contact {
    display: grid;
    grid-area: contact;
    row-gap: 1rem;
    font-size: 0.9rem;
}

.footer__phone {
    text-align: right;
}

.footer__address {
    font-family: Georgia, 'Times New Roman', Times, serif;
    text-align: right;
}

.footer__copyright {
    font-size: 0.75rem;
    grid-area: copyright;
    justify-self: right;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'Norican';\n    src: url('norican-regular.woff') format('woff'), url('norican-regular.woff2') format('woff2');\n}\n\n/*\n  Josh's Custom CSS Reset\n  https://www.joshwcomeau.com/css/custom-css-reset/\n*/\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n* {\n    margin: 0;\n}\n\nbody {\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n    display: block;\n    max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n    font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    overflow-wrap: break-word;\n}\n\n#root,\n#__next {\n    isolation: isolate;\n}\n\n:root {\n    --w-page: 85em;\n    --h-header: 10svh;\n    --clr-off-white: #fffaf1;\n    --clr-off-light-white: #fffdf9;\n    --clr-maroon: #803d3b;\n    --clr-light-maroon: #b28a89;\n    --clr-brown: #af8260;\n    --clr-light-brown: #c7a78f;\n    --clr-dark-brown: #322c2b;\n    --border-radius: 8px;\n}\n\nbody {\n    background-color: var(--clr-off-white);\n    font-family: Georgia, 'Times New Roman', Times, serif;\n}\n\n.logo {\n    color: var(--clr-maroon);\n    font-family: 'Norican', serif;\n}\n\n/* Header */\n\n.header {\n    display: flex;\n    justify-content: center;\n    min-height: var(--h-header);\n    padding: 1rem 2rem;\n}\n\n.header__container {\n    align-items: center;\n    display: flex;\n    justify-content: space-between;\n    width: var(--w-page);\n}\n\n.header__logo {\n    font-size: 2rem;\n}\n\n.header__nav {\n    align-items: center;\n    display: flex;\n    gap: 2rem;\n}\n\n.nav__link {\n    background-color: rgba(0, 0, 0, 0);\n    border: none;\n    transition: color 250ms ease-in-out;\n}\n\n.nav__link:hover {\n    color: var(--clr-brown);\n    cursor: pointer;\n}\n\n.nav__link-active {\n    color: var(--clr-maroon);\n}\n\n#content {\n    display: flex;\n    justify-content: center;\n    min-height: calc(100svh - var(--h-header));\n    padding: 2rem;\n}\n\n/* Transition */\n.home,\n.menu,\n.about {\n    opacity: 0;\n    transition: opacity 500ms ease-in;\n}\n\n.visible {\n    opacity: 1;\n}\n\n/* Home */\n\n.home {\n    display: grid;\n    gap: 6rem;\n    grid-template-columns: 2fr 3fr;\n    height: fit-content;\n    padding: 3rem 0;\n    width: var(--w-page);\n}\n\n.home__content {\n    color: var(--clr-dark-brown);\n    display: grid;\n    gap: 1rem;\n    grid-template-rows: repeat(3, min-content);\n    margin-top: 1em;\n}\n\n.home__tagline {\n    font-size: 3rem;\n    line-height: 1.3;\n}\n\n.home__desc {\n    font-size: 1rem;\n    margin-bottom: 1rem;\n}\n\n.home__cta {\n    background-color: var(--clr-dark-brown);\n    border: 1px solid var(--clr-dark-brown);\n    color: var(--clr-off-white);\n    font-size: 1.25rem;\n    justify-self: start;\n    padding: 0.25em 1.15em;\n    transition: all 250ms ease-in-out;\n}\n\n.home__cta:hover {\n    background-color: var(--clr-off-white);\n    color: var(--clr-dark-brown);\n    cursor: pointer;\n}\n\n.home__img {\n    align-self: center;\n    object-fit: contain;\n    transition: transform 500ms ease-in-out;\n}\n\n.home__img:hover {\n    transform: scale(1.025);\n}\n\n@media (max-width: 1000px) {\n    .home {\n        gap: 0;\n        grid-template-columns: 1fr;\n        padding-top: 0;\n    }\n\n    .home__content {\n        text-align: center;\n    }\n\n    .home__cta {\n        justify-self: center;\n    }\n\n    .home__img {\n        grid-area: 1 / 1;\n        margin-bottom: 2rem;\n        padding: 0 4rem;\n    }\n}\n\n/* Menu */\n\n.menu {\n    padding: 2rem;\n}\n\n.menu__filipino,\n.menu__classic {\n    margin-bottom: 6rem;\n    text-align: center;\n}\n\n.menu__header {\n    color: var(--clr-maroon);\n    font-size: 2rem;\n    margin-bottom: 2rem;\n}\n\n.menu__container {\n    display: flex;\n    flex-flow: row wrap;\n    gap: 2rem;\n    justify-content: center;\n}\n\n.menu__card {\n    background-color: var(--clr-off-light-white);\n    border-radius: var(--border-radius);\n    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);\n    display: flex;\n    flex-flow: column nowrap;\n    transition: transform 250ms ease-in-out;\n    width: 260px;\n}\n\n.menu__card:hover {\n    transform: translateY(-10px);\n}\n\n.menu__card-img {\n    align-items: center;\n    background-color: var(--clr-dark-brown);\n    border-top-left-radius: var(--border-radius);\n    border-top-right-radius: var(--border-radius);\n    color: var(--clr-off-light-white);\n    display: flex;\n    font-size: 0.8rem;\n    height: 200px;\n    justify-content: center;\n}\n\n.menu__card-content {\n    display: grid;\n    gap: 0.5rem;\n    margin-bottom: 1rem;\n    padding: 1rem 1.5rem;\n}\n\n.menu__card-header {\n    color: var(--clr-dark-brown);\n    font-size: 1.15rem;\n}\n\n.menu__card-desc {\n    font-size: 0.8rem;\n    text-align: center;\n}\n\n/* About */\n\n.about {\n    align-items: center;\n    display: grid;\n    gap: 1rem;\n    margin-bottom: 3rem;\n    width: var(--w-page);\n}\n\n.about-us,\n.story,\n.mission {\n    display: grid;\n    gap: 3rem;\n    grid-template-columns: auto 1fr;\n    justify-self: left;\n}\n\n.story {\n    grid-template-columns: 1fr auto;\n    justify-self: right;\n}\n\n.story > .about__header {\n    grid-area: 1 / 2;\n}\n\n.about__header {\n    align-self: start;\n    color: var(--clr-dark-brown);\n    font-size: 5rem;\n    line-height: 1;\n    position: relative;\n}\n\n.about-us > .about__header::before,\n.story > .about__header::before,\n.mission > .about__header::before {\n    background-color: var(--clr-light-brown);\n    content: '';\n    height: 50%;\n    left: -5%;\n    position: absolute;\n    top: 60%;\n    width: 100%;\n    z-index: -1;\n}\n\n.story > .about__header::before {\n    background-color: var(--clr-light-maroon);\n    left: 5%;\n}\n\n.about__body {\n    font-size: 0.9rem;\n    max-width: 70ch;\n}\n\n@media (max-width: 1000px) {\n    .about {\n        gap: 4rem;\n        justify-content: center;\n    }\n\n    .about-us,\n    .story,\n    .mission {\n        gap: 2rem;\n        grid-template-columns: 1fr;\n    }\n\n    .story > .about__header {\n        grid-area: 1 / 1;\n    }\n\n    .story > .about__header::before {\n        left: -5%;\n    }\n}\n\n/* Footer */\n\n.footer {\n    background-color: var(--clr-dark-brown);\n    color: var(--clr-off-white);\n    display: flex;\n    justify-content: center;\n    padding: 3rem 2rem;\n}\n\n.footer__container {\n    display: grid;\n    grid-template-areas:\n        'logo contact'\n        'logo copyright';\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: auto auto;\n    row-gap: 2rem;\n    width: var(--w-page);\n}\n\n.footer__logo {\n    color: var(--clr-off-white);\n    font-size: 2.5rem;\n    grid-area: logo;\n}\n\n.footer__contact {\n    display: grid;\n    grid-area: contact;\n    row-gap: 1rem;\n    font-size: 0.9rem;\n}\n\n.footer__phone {\n    text-align: right;\n}\n\n.footer__address {\n    font-family: Georgia, 'Times New Roman', Times, serif;\n    text-align: right;\n}\n\n.footer__copyright {\n    font-size: 0.75rem;\n    grid-area: copyright;\n    justify-self: right;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ About)
/* harmony export */ });
function About() {
    const container = document.createElement('div');
    container.classList.add('about');

    const aboutUsSection = document.createElement('section');
    aboutUsSection.classList.add('about-us');
    container.appendChild(aboutUsSection);

    const aboutUsHeader = document.createElement('h2');
    aboutUsHeader.classList.add('about__header');
    aboutUsHeader.textContent = 'About Us';
    aboutUsSection.appendChild(aboutUsHeader);

    const aboutUsBody = document.createElement('p');
    aboutUsBody.classList.add('about__body');
    aboutUsBody.textContent = `Welcome to La Filipina, where Filipino flavor meets classic pizza perfection! Established in 2024, our pizzeria is more than just a place to eat—it's a celebration of the vibrant fusion of Filipino cuisine and traditional pizza.`;
    aboutUsSection.appendChild(aboutUsBody);

    const ourStorySection = document.createElement('section');
    ourStorySection.classList.add('story');
    container.appendChild(ourStorySection);

    const ourStoryHeader = document.createElement('h2');
    ourStoryHeader.classList.add('about__header');
    ourStoryHeader.textContent = 'Our Story';
    ourStorySection.appendChild(ourStoryHeader);

    const ourStoryBody = document.createElement('p');
    ourStoryBody.classList.add('about__body');
    ourStoryBody.textContent = `La Filipina was born out of a love for both Filipino culinary heritage and the timeless appeal of pizza. Our journey began with a simple idea: to create a dining experience that beautifully marries the rich, diverse flavors of the Philippines with the beloved comfort of pizza. As a new addition to the culinary scene, we are passionate about crafting unique, mouthwatering dishes that reflect our heritage and our dedication to great food.`;
    ourStorySection.appendChild(ourStoryBody);

    const ourMissionSection = document.createElement('section');
    ourMissionSection.classList.add('mission');
    container.appendChild(ourMissionSection);

    const ourMissionHeader = document.createElement('h2');
    ourMissionHeader.classList.add('about__header');
    ourMissionHeader.textContent = 'Our Mission';
    ourMissionSection.appendChild(ourMissionHeader);

    const ourMissionBody = document.createElement('p');
    ourMissionBody.classList.add('about__body');
    ourMissionBody.textContent = `At La Filipina, our mission is to offer a culinary experience that delights the senses and warms the heart. We’re dedicated to using the freshest, locally-sourced ingredients to create dishes that not only taste amazing but also tell a story of tradition and innovation. From our signature pizzas topped with Filipino favorites to our handcrafted sides and desserts, every bite is a journey through the rich tapestry of our culture.`;
    ourMissionSection.appendChild(ourMissionBody);

    const wrapper = document.querySelector('#content');
    wrapper.appendChild(container);

    setTimeout(() => {
        container.classList.add('visible');
    }, 100);
}


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var _pizza_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pizza.png */ "./src/pizza.png");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");



function Home() {
    const container = document.createElement('section');
    container.classList.add('home');

    const content = document.createElement('section');
    content.classList.add('home__content');

    const tagline = document.createElement('h2');
    tagline.classList.add('home__tagline');
    tagline.textContent = 'Savor the Fusion of Filipino Flair and Classic Pizza.';
    content.appendChild(tagline);

    const description = document.createElement('p');
    description.classList.add('home__desc');
    description.textContent =
        'At La Filipina, each pizza is a delicious blend of traditional Filipino flavors and classic pizza craftsmanship. Baked to perfection and made with love, our pizzas celebrate the rich, vibrant tastes of the Philippines. Experience a slice of culinary passion—welcome to La Filipina!';
    content.appendChild(description);

    const cta = document.createElement('button');
    cta.classList.add('home__cta');
    cta.setAttribute('data-id', 'nav-menu');
    cta.textContent = 'See Menu';
    cta.addEventListener('click', _index_js__WEBPACK_IMPORTED_MODULE_1__.navLinkClickHandler);
    content.appendChild(cta);

    container.appendChild(content);

    const image = document.createElement('img');
    image.classList.add('home__img');
    image.setAttribute('src', _pizza_png__WEBPACK_IMPORTED_MODULE_0__);
    image.setAttribute('alt', 'large pizza');
    container.appendChild(image);

    const wrapper = document.querySelector('#content');
    wrapper.appendChild(container);

    setTimeout(() => {
        container.classList.add('visible');
    }, 100);
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   navLinkClickHandler: () => (/* binding */ navLinkClickHandler)
/* harmony export */ });
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ "./src/about.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





(0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

const refreshScreen = () => {
    const content = document.querySelector('#content');
    content.replaceChildren('');

    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach((link) => {
        link.classList.remove('nav__link-active');
    });
};

const navHome = document.querySelector('#nav-home');
const navMenu = document.querySelector('#nav-menu');
const navAbout = document.querySelector('#nav-about');

function navLinkClickHandler(e) {
    refreshScreen();

    const page = e.target.id || e.target.dataset.id;

    switch (page) {
        case 'nav-home':
            (0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
            navHome.classList.add('nav__link-active');
            break;
        case 'nav-menu':
            (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
            navMenu.classList.add('nav__link-active');
            break;
        case 'nav-about':
            (0,_about_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
            navAbout.classList.add('nav__link-active');
            break;
    }
}

navHome.addEventListener('click', navLinkClickHandler);
navMenu.addEventListener('click', navLinkClickHandler);
navAbout.addEventListener('click', navLinkClickHandler);

const copyright = document.querySelector('.footer__copyright');
const currentYear = new Date().getFullYear();
copyright.textContent = `© ${currentYear} La Filipina. All Rights Reserved`;


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Menu)
/* harmony export */ });
function Menu() {
    const container = document.createElement('div');
    container.classList.add('menu');

    const filipinoSection = document.createElement('div');
    filipinoSection.classList.add('menu__filipino');
    container.appendChild(filipinoSection);

    const filipinoHeader = document.createElement('h2');
    filipinoHeader.classList.add('menu__header');
    filipinoHeader.textContent = 'Filipino Style';
    filipinoSection.appendChild(filipinoHeader);

    const filipinoContainer = document.createElement('div');
    filipinoContainer.classList.add('menu__container');
    filipinoSection.appendChild(filipinoContainer);

    const filipinoMenu = [
        {
            flavor: 'Adobo Loco',
            description:
                'Tender adobo-marinated chicken or pork with caramelized onions, bell peppers, and bay leaf cheese in a tomato base with soy and vinegar.',
        },
        {
            flavor: 'Longganisa Delight',
            description:
                'Sweet longganisa sausage with pineapple and mozzarella, in a tomato sauce with garlic and ginger.',
        },
        {
            flavor: 'Tapa Temptations',
            description: 'Filipino tapa with onions and tomatoes on a tomato base with soy, topped with scallions.',
        },
        {
            flavor: 'Pinoy BBQ',
            description:
                'Sweet and smoky BBQ pork with red onions and cilantro, on a pizza crust with tangy BBQ sauce.',
        },
    ];

    for (let i = 0; i < 4; i++) {
        const filipinoCard = document.createElement('div');
        filipinoCard.classList.add('menu__card');
        filipinoContainer.appendChild(filipinoCard);

        const filipinoCardImage = document.createElement('div');
        filipinoCardImage.classList.add('menu__card-img');
        filipinoCardImage.textContent = 'To Be Updated';
        filipinoCard.appendChild(filipinoCardImage);

        const filipinoCardContent = document.createElement('div');
        filipinoCardContent.classList.add('menu__card-content');
        filipinoCard.appendChild(filipinoCardContent);

        const filipinoCardHeader = document.createElement('h3');
        filipinoCardHeader.classList.add('menu__card-header');
        filipinoCardHeader.textContent = filipinoMenu[i].flavor;
        filipinoCardContent.appendChild(filipinoCardHeader);

        const filipinoCardDesc = document.createElement('p');
        filipinoCardDesc.classList.add('menu__card-desc');
        filipinoCardDesc.textContent = filipinoMenu[i].description;
        filipinoCardContent.appendChild(filipinoCardDesc);
    }

    const classicSection = document.createElement('div');
    classicSection.classList.add('menu__classic');
    container.appendChild(classicSection);

    const classicHeader = document.createElement('h2');
    classicHeader.classList.add('menu__header');
    classicHeader.textContent = 'Classic Style';
    classicSection.appendChild(classicHeader);

    const classicContainer = document.createElement('div');
    classicContainer.classList.add('menu__container');
    classicSection.appendChild(classicContainer);

    const classicMenu = [
        {
            flavor: 'Hawaiian',
            description: 'Ham and pineapple with melted mozzarella and tangy tomato sauce for a tropical twist.',
        },
        {
            flavor: 'Pepperoni',
            description:
                'Spicy pepperoni with mozzarella and rich tomato sauce, offering bold flavors and crispy edges.',
        },
        {
            flavor: 'Meat Overload',
            description: 'A hearty mix of pepperoni, sausage, ham, and bacon, with mozzarella and robust tomato sauce.',
        },
        {
            flavor: 'Four Cheese',
            description: 'A blend of mozzarella, cheddar, Parmesan, and Gorgonzola with garlic and herbs.',
        },
    ];

    for (let i = 0; i < 4; i++) {
        const classicCard = document.createElement('div');
        classicCard.classList.add('menu__card');
        classicContainer.appendChild(classicCard);

        const classicCardImage = document.createElement('div');
        classicCardImage.classList.add('menu__card-img');
        classicCardImage.textContent = 'To Be Updated';
        classicCard.appendChild(classicCardImage);

        const classicCardContent = document.createElement('div');
        classicCardContent.classList.add('menu__card-content');
        classicCard.appendChild(classicCardContent);

        const classicCardHeader = document.createElement('h3');
        classicCardHeader.classList.add('menu__card-header');
        classicCardHeader.textContent = classicMenu[i].flavor;
        classicCardContent.appendChild(classicCardHeader);

        const classicCardDesc = document.createElement('p');
        classicCardDesc.classList.add('menu__card-desc');
        classicCardDesc.textContent = classicMenu[i].description;
        classicCardContent.appendChild(classicCardDesc);
    }

    const wrapper = document.querySelector('#content');
    wrapper.appendChild(container);

    setTimeout(() => {
        container.classList.add('visible');
    }, 100);
}


/***/ }),

/***/ "./src/norican-regular.woff":
/*!**********************************!*\
  !*** ./src/norican-regular.woff ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cc6deb9a96a252c47490.woff";

/***/ }),

/***/ "./src/norican-regular.woff2":
/*!***********************************!*\
  !*** ./src/norican-regular.woff2 ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d29eec21b4b3ebd5fdf8.woff2";

/***/ }),

/***/ "./src/pizza.png":
/*!***********************!*\
  !*** ./src/pizza.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5d0ce1fe491b452fe6a4.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0Qyx1SEFBdUM7QUFDbkYsNENBQTRDLHlIQUF3QztBQUNwRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQyx3QkFBd0IsbUNBQW1DO0FBQzdHOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLE9BQU8sT0FBTyxLQUFLLE9BQU8sWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sU0FBUyxVQUFVLFVBQVUsT0FBTyxRQUFRLFVBQVUsT0FBTyxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sVUFBVSxPQUFPLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLFdBQVcsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sV0FBVyxLQUFLLFVBQVUsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFdBQVcsS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxPQUFPLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sT0FBTyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxLQUFLLFVBQVUsWUFBWSxPQUFPLE9BQU8sVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLEtBQUssTUFBTSxXQUFXLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sT0FBTyxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxh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QTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUEsb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTCIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIm5vcmljYW4tcmVndWxhci53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwibm9yaWNhbi1yZWd1bGFyLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdOb3JpY2FuJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoJ3dvZmYnKSwgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdCgnd29mZjInKTtcbn1cblxuLypcbiAgSm9zaCdzIEN1c3RvbSBDU1MgUmVzZXRcbiAgaHR0cHM6Ly93d3cuam9zaHdjb21lYXUuY29tL2Nzcy9jdXN0b20tY3NzLXJlc2V0L1xuKi9cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuKiB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5ib2R5IHtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5pbWcsXG5waWN0dXJlLFxudmlkZW8sXG5jYW52YXMsXG5zdmcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1heC13aWR0aDogMTAwJTtcbn1cblxuaW5wdXQsXG5idXR0b24sXG50ZXh0YXJlYSxcbnNlbGVjdCB7XG4gICAgZm9udDogaW5oZXJpdDtcbn1cblxucCxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbn1cblxuI3Jvb3QsXG4jX19uZXh0IHtcbiAgICBpc29sYXRpb246IGlzb2xhdGU7XG59XG5cbjpyb290IHtcbiAgICAtLXctcGFnZTogODVlbTtcbiAgICAtLWgtaGVhZGVyOiAxMHN2aDtcbiAgICAtLWNsci1vZmYtd2hpdGU6ICNmZmZhZjE7XG4gICAgLS1jbHItb2ZmLWxpZ2h0LXdoaXRlOiAjZmZmZGY5O1xuICAgIC0tY2xyLW1hcm9vbjogIzgwM2QzYjtcbiAgICAtLWNsci1saWdodC1tYXJvb246ICNiMjhhODk7XG4gICAgLS1jbHItYnJvd246ICNhZjgyNjA7XG4gICAgLS1jbHItbGlnaHQtYnJvd246ICNjN2E3OGY7XG4gICAgLS1jbHItZGFyay1icm93bjogIzMyMmMyYjtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLW9mZi13aGl0ZSk7XG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG59XG5cbi5sb2dvIHtcbiAgICBjb2xvcjogdmFyKC0tY2xyLW1hcm9vbik7XG4gICAgZm9udC1mYW1pbHk6ICdOb3JpY2FuJywgc2VyaWY7XG59XG5cbi8qIEhlYWRlciAqL1xuXG4uaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IHZhcigtLWgtaGVhZGVyKTtcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XG59XG5cbi5oZWFkZXJfX2NvbnRhaW5lciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogdmFyKC0tdy1wYWdlKTtcbn1cblxuLmhlYWRlcl9fbG9nbyB7XG4gICAgZm9udC1zaXplOiAycmVtO1xufVxuXG4uaGVhZGVyX19uYXYge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDJyZW07XG59XG5cbi5uYXZfX2xpbmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDI1MG1zIGVhc2UtaW4tb3V0O1xufVxuXG4ubmF2X19saW5rOmhvdmVyIHtcbiAgICBjb2xvcjogdmFyKC0tY2xyLWJyb3duKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uYXZfX2xpbmstYWN0aXZlIHtcbiAgICBjb2xvcjogdmFyKC0tY2xyLW1hcm9vbik7XG59XG5cbiNjb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwc3ZoIC0gdmFyKC0taC1oZWFkZXIpKTtcbiAgICBwYWRkaW5nOiAycmVtO1xufVxuXG4vKiBUcmFuc2l0aW9uICovXG4uaG9tZSxcbi5tZW51LFxuLmFib3V0IHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgNTAwbXMgZWFzZS1pbjtcbn1cblxuLnZpc2libGUge1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi8qIEhvbWUgKi9cblxuLmhvbWUge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiA2cmVtO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDNmcjtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIHBhZGRpbmc6IDNyZW0gMDtcbiAgICB3aWR0aDogdmFyKC0tdy1wYWdlKTtcbn1cblxuLmhvbWVfX2NvbnRlbnQge1xuICAgIGNvbG9yOiB2YXIoLS1jbHItZGFyay1icm93bik7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDFyZW07XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgbWluLWNvbnRlbnQpO1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbn1cblxuLmhvbWVfX3RhZ2xpbmUge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBsaW5lLWhlaWdodDogMS4zO1xufVxuXG4uaG9tZV9fZGVzYyB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5ob21lX19jdGEge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1kYXJrLWJyb3duKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jbHItZGFyay1icm93bik7XG4gICAgY29sb3I6IHZhcigtLWNsci1vZmYtd2hpdGUpO1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xuICAgIHBhZGRpbmc6IDAuMjVlbSAxLjE1ZW07XG4gICAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0O1xufVxuXG4uaG9tZV9fY3RhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItb2ZmLXdoaXRlKTtcbiAgICBjb2xvcjogdmFyKC0tY2xyLWRhcmstYnJvd24pO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmhvbWVfX2ltZyB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDUwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG4uaG9tZV9faW1nOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDI1KTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgIC5ob21lIHtcbiAgICAgICAgZ2FwOiAwO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgfVxuXG4gICAgLmhvbWVfX2NvbnRlbnQge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmhvbWVfX2N0YSB7XG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIH1cblxuICAgIC5ob21lX19pbWcge1xuICAgICAgICBncmlkLWFyZWE6IDEgLyAxO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgICBwYWRkaW5nOiAwIDRyZW07XG4gICAgfVxufVxuXG4vKiBNZW51ICovXG5cbi5tZW51IHtcbiAgICBwYWRkaW5nOiAycmVtO1xufVxuXG4ubWVudV9fZmlsaXBpbm8sXG4ubWVudV9fY2xhc3NpYyB7XG4gICAgbWFyZ2luLWJvdHRvbTogNnJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tZW51X19oZWFkZXIge1xuICAgIGNvbG9yOiB2YXIoLS1jbHItbWFyb29uKTtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLm1lbnVfX2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgIGdhcDogMnJlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1lbnVfX2NhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1vZmYtbGlnaHQtd2hpdGUpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgd2lkdGg6IDI2MHB4O1xufVxuXG4ubWVudV9fY2FyZDpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbn1cblxuLm1lbnVfX2NhcmQtaW1nIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1kYXJrLWJyb3duKTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgY29sb3I6IHZhcigtLWNsci1vZmYtbGlnaHQtd2hpdGUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1lbnVfX2NhcmQtY29udGVudCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDAuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xufVxuXG4ubWVudV9fY2FyZC1oZWFkZXIge1xuICAgIGNvbG9yOiB2YXIoLS1jbHItZGFyay1icm93bik7XG4gICAgZm9udC1zaXplOiAxLjE1cmVtO1xufVxuXG4ubWVudV9fY2FyZC1kZXNjIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIEFib3V0ICovXG5cbi5hYm91dCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICAgIHdpZHRoOiB2YXIoLS13LXBhZ2UpO1xufVxuXG4uYWJvdXQtdXMsXG4uc3RvcnksXG4ubWlzc2lvbiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDNyZW07XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcbiAgICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XG59XG5cbi5zdG9yeSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xufVxuXG4uc3RvcnkgPiAuYWJvdXRfX2hlYWRlciB7XG4gICAgZ3JpZC1hcmVhOiAxIC8gMjtcbn1cblxuLmFib3V0X19oZWFkZXIge1xuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xuICAgIGNvbG9yOiB2YXIoLS1jbHItZGFyay1icm93bik7XG4gICAgZm9udC1zaXplOiA1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFib3V0LXVzID4gLmFib3V0X19oZWFkZXI6OmJlZm9yZSxcbi5zdG9yeSA+IC5hYm91dF9faGVhZGVyOjpiZWZvcmUsXG4ubWlzc2lvbiA+IC5hYm91dF9faGVhZGVyOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1saWdodC1icm93bik7XG4gICAgY29udGVudDogJyc7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgbGVmdDogLTUlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDYwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAtMTtcbn1cblxuLnN0b3J5ID4gLmFib3V0X19oZWFkZXI6OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWxpZ2h0LW1hcm9vbik7XG4gICAgbGVmdDogNSU7XG59XG5cbi5hYm91dF9fYm9keSB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgbWF4LXdpZHRoOiA3MGNoO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgLmFib3V0IHtcbiAgICAgICAgZ2FwOiA0cmVtO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuYWJvdXQtdXMsXG4gICAgLnN0b3J5LFxuICAgIC5taXNzaW9uIHtcbiAgICAgICAgZ2FwOiAycmVtO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICB9XG5cbiAgICAuc3RvcnkgPiAuYWJvdXRfX2hlYWRlciB7XG4gICAgICAgIGdyaWQtYXJlYTogMSAvIDE7XG4gICAgfVxuXG4gICAgLnN0b3J5ID4gLmFib3V0X19oZWFkZXI6OmJlZm9yZSB7XG4gICAgICAgIGxlZnQ6IC01JTtcbiAgICB9XG59XG5cbi8qIEZvb3RlciAqL1xuXG4uZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItZGFyay1icm93bik7XG4gICAgY29sb3I6IHZhcigtLWNsci1vZmYtd2hpdGUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogM3JlbSAycmVtO1xufVxuXG4uZm9vdGVyX19jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgJ2xvZ28gY29udGFjdCdcbiAgICAgICAgJ2xvZ28gY29weXJpZ2h0JztcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XG4gICAgcm93LWdhcDogMnJlbTtcbiAgICB3aWR0aDogdmFyKC0tdy1wYWdlKTtcbn1cblxuLmZvb3Rlcl9fbG9nbyB7XG4gICAgY29sb3I6IHZhcigtLWNsci1vZmYtd2hpdGUpO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIGdyaWQtYXJlYTogbG9nbztcbn1cblxuLmZvb3Rlcl9fY29udGFjdCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWFyZWE6IGNvbnRhY3Q7XG4gICAgcm93LWdhcDogMXJlbTtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLmZvb3Rlcl9fcGhvbmUge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uZm9vdGVyX19hZGRyZXNzIHtcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmZvb3Rlcl9fY29weXJpZ2h0IHtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgZ3JpZC1hcmVhOiBjb3B5cmlnaHQ7XG4gICAganVzdGlmeS1zZWxmOiByaWdodDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixvSEFBNkY7QUFDakc7O0FBRUE7OztDQUdDO0FBQ0Q7OztJQUdJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQ0FBbUM7QUFDdkM7O0FBRUE7Ozs7O0lBS0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7Ozs7SUFJSSxhQUFhO0FBQ2pCOztBQUVBOzs7Ozs7O0lBT0kseUJBQXlCO0FBQzdCOztBQUVBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJ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bEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdOb3JpY2FuJztcXG4gICAgc3JjOiB1cmwoJ25vcmljYW4tcmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyksIHVybCgnbm9yaWNhbi1yZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xcbn1cXG5cXG4vKlxcbiAgSm9zaCdzIEN1c3RvbSBDU1MgUmVzZXRcXG4gIGh0dHBzOi8vd3d3Lmpvc2h3Y29tZWF1LmNvbS9jc3MvY3VzdG9tLWNzcy1yZXNldC9cXG4qL1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbn1cXG5cXG5pbWcsXFxucGljdHVyZSxcXG52aWRlbyxcXG5jYW52YXMsXFxuc3ZnIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuaW5wdXQsXFxuYnV0dG9uLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbnAsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4jcm9vdCxcXG4jX19uZXh0IHtcXG4gICAgaXNvbGF0aW9uOiBpc29sYXRlO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tdy1wYWdlOiA4NWVtO1xcbiAgICAtLWgtaGVhZGVyOiAxMHN2aDtcXG4gICAgLS1jbHItb2ZmLXdoaXRlOiAjZmZmYWYxO1xcbiAgICAtLWNsci1vZmYtbGlnaHQtd2hpdGU6ICNmZmZkZjk7XFxuICAgIC0tY2xyLW1hcm9vbjogIzgwM2QzYjtcXG4gICAgLS1jbHItbGlnaHQtbWFyb29uOiAjYjI4YTg5O1xcbiAgICAtLWNsci1icm93bjogI2FmODI2MDtcXG4gICAgLS1jbHItbGlnaHQtYnJvd246ICNjN2E3OGY7XFxuICAgIC0tY2xyLWRhcmstYnJvd246ICMzMjJjMmI7XFxuICAgIC0tYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLW9mZi13aGl0ZSk7XFxuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcbn1cXG5cXG4ubG9nbyB7XFxuICAgIGNvbG9yOiB2YXIoLS1jbHItbWFyb29uKTtcXG4gICAgZm9udC1mYW1pbHk6ICdOb3JpY2FuJywgc2VyaWY7XFxufVxcblxcbi8qIEhlYWRlciAqL1xcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWluLWhlaWdodDogdmFyKC0taC1oZWFkZXIpO1xcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XFxufVxcblxcbi5oZWFkZXJfX2NvbnRhaW5lciB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IHZhcigtLXctcGFnZSk7XFxufVxcblxcbi5oZWFkZXJfX2xvZ28ge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5oZWFkZXJfX25hdiB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxuLm5hdl9fbGluayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMjUwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5uYXZfX2xpbms6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tY2xyLWJyb3duKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubmF2X19saW5rLWFjdGl2ZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1jbHItbWFyb29uKTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWluLWhlaWdodDogY2FsYygxMDBzdmggLSB2YXIoLS1oLWhlYWRlcikpO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG4vKiBUcmFuc2l0aW9uICovXFxuLmhvbWUsXFxuLm1lbnUsXFxuLmFib3V0IHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSA1MDBtcyBlYXNlLWluO1xcbn1cXG5cXG4udmlzaWJsZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi8qIEhvbWUgKi9cXG5cXG4uaG9tZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogNnJlbTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAzcmVtIDA7XFxuICAgIHdpZHRoOiB2YXIoLS13LXBhZ2UpO1xcbn1cXG5cXG4uaG9tZV9fY29udGVudCB7XFxuICAgIGNvbG9yOiB2YXIoLS1jbHItZGFyay1icm93bik7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgbWluLWNvbnRlbnQpO1xcbiAgICBtYXJnaW4tdG9wOiAxZW07XFxufVxcblxcbi5ob21lX190YWdsaW5lIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS4zO1xcbn1cXG5cXG4uaG9tZV9fZGVzYyB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLmhvbWVfX2N0YSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1kYXJrLWJyb3duKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2xyLWRhcmstYnJvd24pO1xcbiAgICBjb2xvcjogdmFyKC0tY2xyLW9mZi13aGl0ZSk7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgcGFkZGluZzogMC4yNWVtIDEuMTVlbTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uaG9tZV9fY3RhOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLW9mZi13aGl0ZSk7XFxuICAgIGNvbG9yOiB2YXIoLS1jbHItZGFyay1icm93bik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhvbWVfX2ltZyB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDUwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uaG9tZV9faW1nOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyNSk7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG4gICAgLmhvbWUge1xcbiAgICAgICAgZ2FwOiAwO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcXG4gICAgfVxcblxcbiAgICAuaG9tZV9fY29udGVudCB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLmhvbWVfX2N0YSB7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAuaG9tZV9faW1nIHtcXG4gICAgICAgIGdyaWQtYXJlYTogMSAvIDE7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgICAgICAgcGFkZGluZzogMCA0cmVtO1xcbiAgICB9XFxufVxcblxcbi8qIE1lbnUgKi9cXG5cXG4ubWVudSB7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbi5tZW51X19maWxpcGlubyxcXG4ubWVudV9fY2xhc3NpYyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDZyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1lbnVfX2hlYWRlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1jbHItbWFyb29uKTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4ubWVudV9fY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnVfX2NhcmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItb2ZmLWxpZ2h0LXdoaXRlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbi1vdXQ7XFxuICAgIHdpZHRoOiAyNjBweDtcXG59XFxuXFxuLm1lbnVfX2NhcmQ6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xcbn1cXG5cXG4ubWVudV9fY2FyZC1pbWcge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItZGFyay1icm93bik7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIGNvbG9yOiB2YXIoLS1jbHItb2ZmLWxpZ2h0LXdoaXRlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubWVudV9fY2FyZC1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xcbn1cXG5cXG4ubWVudV9fY2FyZC1oZWFkZXIge1xcbiAgICBjb2xvcjogdmFyKC0tY2xyLWRhcmstYnJvd24pO1xcbiAgICBmb250LXNpemU6IDEuMTVyZW07XFxufVxcblxcbi5tZW51X19jYXJkLWRlc2Mge1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiBBYm91dCAqL1xcblxcbi5hYm91dCB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG4gICAgd2lkdGg6IHZhcigtLXctcGFnZSk7XFxufVxcblxcbi5hYm91dC11cyxcXG4uc3RvcnksXFxuLm1pc3Npb24ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDNyZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICAgIGp1c3RpZnktc2VsZjogbGVmdDtcXG59XFxuXFxuLnN0b3J5IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcXG4gICAganVzdGlmeS1zZWxmOiByaWdodDtcXG59XFxuXFxuLnN0b3J5ID4gLmFib3V0X19oZWFkZXIge1xcbiAgICBncmlkLWFyZWE6IDEgLyAyO1xcbn1cXG5cXG4uYWJvdXRfX2hlYWRlciB7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgICBjb2xvcjogdmFyKC0tY2xyLWRhcmstYnJvd24pO1xcbiAgICBmb250LXNpemU6IDVyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5hYm91dC11cyA+IC5hYm91dF9faGVhZGVyOjpiZWZvcmUsXFxuLnN0b3J5ID4gLmFib3V0X19oZWFkZXI6OmJlZm9yZSxcXG4ubWlzc2lvbiA+IC5hYm91dF9faGVhZGVyOjpiZWZvcmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItbGlnaHQtYnJvd24pO1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIGxlZnQ6IC01JTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDYwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4uc3RvcnkgPiAuYWJvdXRfX2hlYWRlcjo6YmVmb3JlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWxpZ2h0LW1hcm9vbik7XFxuICAgIGxlZnQ6IDUlO1xcbn1cXG5cXG4uYWJvdXRfX2JvZHkge1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgbWF4LXdpZHRoOiA3MGNoO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuICAgIC5hYm91dCB7XFxuICAgICAgICBnYXA6IDRyZW07XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAuYWJvdXQtdXMsXFxuICAgIC5zdG9yeSxcXG4gICAgLm1pc3Npb24ge1xcbiAgICAgICAgZ2FwOiAycmVtO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIH1cXG5cXG4gICAgLnN0b3J5ID4gLmFib3V0X19oZWFkZXIge1xcbiAgICAgICAgZ3JpZC1hcmVhOiAxIC8gMTtcXG4gICAgfVxcblxcbiAgICAuc3RvcnkgPiAuYWJvdXRfX2hlYWRlcjo6YmVmb3JlIHtcXG4gICAgICAgIGxlZnQ6IC01JTtcXG4gICAgfVxcbn1cXG5cXG4vKiBGb290ZXIgKi9cXG5cXG4uZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWRhcmstYnJvd24pO1xcbiAgICBjb2xvcjogdmFyKC0tY2xyLW9mZi13aGl0ZSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAzcmVtIDJyZW07XFxufVxcblxcbi5mb290ZXJfX2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICAnbG9nbyBjb250YWN0J1xcbiAgICAgICAgJ2xvZ28gY29weXJpZ2h0JztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcXG4gICAgcm93LWdhcDogMnJlbTtcXG4gICAgd2lkdGg6IHZhcigtLXctcGFnZSk7XFxufVxcblxcbi5mb290ZXJfX2xvZ28ge1xcbiAgICBjb2xvcjogdmFyKC0tY2xyLW9mZi13aGl0ZSk7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBncmlkLWFyZWE6IGxvZ287XFxufVxcblxcbi5mb290ZXJfX2NvbnRhY3Qge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWFyZWE6IGNvbnRhY3Q7XFxuICAgIHJvdy1nYXA6IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4uZm9vdGVyX19waG9uZSB7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4uZm9vdGVyX19hZGRyZXNzIHtcXG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4uZm9vdGVyX19jb3B5cmlnaHQge1xcbiAgICBmb250LXNpemU6IDAuNzVyZW07XFxuICAgIGdyaWQtYXJlYTogY29weXJpZ2h0O1xcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBYm91dCgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWJvdXQnKTtcblxuICAgIGNvbnN0IGFib3V0VXNTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGFib3V0VXNTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LXVzJyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0VXNTZWN0aW9uKTtcblxuICAgIGNvbnN0IGFib3V0VXNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGFib3V0VXNIZWFkZXIuY2xhc3NMaXN0LmFkZCgnYWJvdXRfX2hlYWRlcicpO1xuICAgIGFib3V0VXNIZWFkZXIudGV4dENvbnRlbnQgPSAnQWJvdXQgVXMnO1xuICAgIGFib3V0VXNTZWN0aW9uLmFwcGVuZENoaWxkKGFib3V0VXNIZWFkZXIpO1xuXG4gICAgY29uc3QgYWJvdXRVc0JvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYWJvdXRVc0JvZHkuY2xhc3NMaXN0LmFkZCgnYWJvdXRfX2JvZHknKTtcbiAgICBhYm91dFVzQm9keS50ZXh0Q29udGVudCA9IGBXZWxjb21lIHRvIExhIEZpbGlwaW5hLCB3aGVyZSBGaWxpcGlubyBmbGF2b3IgbWVldHMgY2xhc3NpYyBwaXp6YSBwZXJmZWN0aW9uISBFc3RhYmxpc2hlZCBpbiAyMDI0LCBvdXIgcGl6emVyaWEgaXMgbW9yZSB0aGFuIGp1c3QgYSBwbGFjZSB0byBlYXTigJRpdCdzIGEgY2VsZWJyYXRpb24gb2YgdGhlIHZpYnJhbnQgZnVzaW9uIG9mIEZpbGlwaW5vIGN1aXNpbmUgYW5kIHRyYWRpdGlvbmFsIHBpenphLmA7XG4gICAgYWJvdXRVc1NlY3Rpb24uYXBwZW5kQ2hpbGQoYWJvdXRVc0JvZHkpO1xuXG4gICAgY29uc3Qgb3VyU3RvcnlTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIG91clN0b3J5U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdzdG9yeScpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChvdXJTdG9yeVNlY3Rpb24pO1xuXG4gICAgY29uc3Qgb3VyU3RvcnlIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIG91clN0b3J5SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2Fib3V0X19oZWFkZXInKTtcbiAgICBvdXJTdG9yeUhlYWRlci50ZXh0Q29udGVudCA9ICdPdXIgU3RvcnknO1xuICAgIG91clN0b3J5U2VjdGlvbi5hcHBlbmRDaGlsZChvdXJTdG9yeUhlYWRlcik7XG5cbiAgICBjb25zdCBvdXJTdG9yeUJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgb3VyU3RvcnlCb2R5LmNsYXNzTGlzdC5hZGQoJ2Fib3V0X19ib2R5Jyk7XG4gICAgb3VyU3RvcnlCb2R5LnRleHRDb250ZW50ID0gYExhIEZpbGlwaW5hIHdhcyBib3JuIG91dCBvZiBhIGxvdmUgZm9yIGJvdGggRmlsaXBpbm8gY3VsaW5hcnkgaGVyaXRhZ2UgYW5kIHRoZSB0aW1lbGVzcyBhcHBlYWwgb2YgcGl6emEuIE91ciBqb3VybmV5IGJlZ2FuIHdpdGggYSBzaW1wbGUgaWRlYTogdG8gY3JlYXRlIGEgZGluaW5nIGV4cGVyaWVuY2UgdGhhdCBiZWF1dGlmdWxseSBtYXJyaWVzIHRoZSByaWNoLCBkaXZlcnNlIGZsYXZvcnMgb2YgdGhlIFBoaWxpcHBpbmVzIHdpdGggdGhlIGJlbG92ZWQgY29tZm9ydCBvZiBwaXp6YS4gQXMgYSBuZXcgYWRkaXRpb24gdG8gdGhlIGN1bGluYXJ5IHNjZW5lLCB3ZSBhcmUgcGFzc2lvbmF0ZSBhYm91dCBjcmFmdGluZyB1bmlxdWUsIG1vdXRod2F0ZXJpbmcgZGlzaGVzIHRoYXQgcmVmbGVjdCBvdXIgaGVyaXRhZ2UgYW5kIG91ciBkZWRpY2F0aW9uIHRvIGdyZWF0IGZvb2QuYDtcbiAgICBvdXJTdG9yeVNlY3Rpb24uYXBwZW5kQ2hpbGQob3VyU3RvcnlCb2R5KTtcblxuICAgIGNvbnN0IG91ck1pc3Npb25TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIG91ck1pc3Npb25TZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ21pc3Npb24nKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQob3VyTWlzc2lvblNlY3Rpb24pO1xuXG4gICAgY29uc3Qgb3VyTWlzc2lvbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgb3VyTWlzc2lvbkhlYWRlci5jbGFzc0xpc3QuYWRkKCdhYm91dF9faGVhZGVyJyk7XG4gICAgb3VyTWlzc2lvbkhlYWRlci50ZXh0Q29udGVudCA9ICdPdXIgTWlzc2lvbic7XG4gICAgb3VyTWlzc2lvblNlY3Rpb24uYXBwZW5kQ2hpbGQob3VyTWlzc2lvbkhlYWRlcik7XG5cbiAgICBjb25zdCBvdXJNaXNzaW9uQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBvdXJNaXNzaW9uQm9keS5jbGFzc0xpc3QuYWRkKCdhYm91dF9fYm9keScpO1xuICAgIG91ck1pc3Npb25Cb2R5LnRleHRDb250ZW50ID0gYEF0IExhIEZpbGlwaW5hLCBvdXIgbWlzc2lvbiBpcyB0byBvZmZlciBhIGN1bGluYXJ5IGV4cGVyaWVuY2UgdGhhdCBkZWxpZ2h0cyB0aGUgc2Vuc2VzIGFuZCB3YXJtcyB0aGUgaGVhcnQuIFdl4oCZcmUgZGVkaWNhdGVkIHRvIHVzaW5nIHRoZSBmcmVzaGVzdCwgbG9jYWxseS1zb3VyY2VkIGluZ3JlZGllbnRzIHRvIGNyZWF0ZSBkaXNoZXMgdGhhdCBub3Qgb25seSB0YXN0ZSBhbWF6aW5nIGJ1dCBhbHNvIHRlbGwgYSBzdG9yeSBvZiB0cmFkaXRpb24gYW5kIGlubm92YXRpb24uIEZyb20gb3VyIHNpZ25hdHVyZSBwaXp6YXMgdG9wcGVkIHdpdGggRmlsaXBpbm8gZmF2b3JpdGVzIHRvIG91ciBoYW5kY3JhZnRlZCBzaWRlcyBhbmQgZGVzc2VydHMsIGV2ZXJ5IGJpdGUgaXMgYSBqb3VybmV5IHRocm91Z2ggdGhlIHJpY2ggdGFwZXN0cnkgb2Ygb3VyIGN1bHR1cmUuYDtcbiAgICBvdXJNaXNzaW9uU2VjdGlvbi5hcHBlbmRDaGlsZChvdXJNaXNzaW9uQm9keSk7XG5cbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICB9LCAxMDApO1xufVxuIiwiaW1wb3J0IHBpenphIGZyb20gJy4vcGl6emEucG5nJztcbmltcG9ydCB7IG5hdkxpbmtDbGlja0hhbmRsZXIgfSBmcm9tICcuL2luZGV4LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hvbWUnKTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdob21lX19jb250ZW50Jyk7XG5cbiAgICBjb25zdCB0YWdsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICB0YWdsaW5lLmNsYXNzTGlzdC5hZGQoJ2hvbWVfX3RhZ2xpbmUnKTtcbiAgICB0YWdsaW5lLnRleHRDb250ZW50ID0gJ1Nhdm9yIHRoZSBGdXNpb24gb2YgRmlsaXBpbm8gRmxhaXIgYW5kIENsYXNzaWMgUGl6emEuJztcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRhZ2xpbmUpO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnaG9tZV9fZGVzYycpO1xuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID1cbiAgICAgICAgJ0F0IExhIEZpbGlwaW5hLCBlYWNoIHBpenphIGlzIGEgZGVsaWNpb3VzIGJsZW5kIG9mIHRyYWRpdGlvbmFsIEZpbGlwaW5vIGZsYXZvcnMgYW5kIGNsYXNzaWMgcGl6emEgY3JhZnRzbWFuc2hpcC4gQmFrZWQgdG8gcGVyZmVjdGlvbiBhbmQgbWFkZSB3aXRoIGxvdmUsIG91ciBwaXp6YXMgY2VsZWJyYXRlIHRoZSByaWNoLCB2aWJyYW50IHRhc3RlcyBvZiB0aGUgUGhpbGlwcGluZXMuIEV4cGVyaWVuY2UgYSBzbGljZSBvZiBjdWxpbmFyeSBwYXNzaW9u4oCUd2VsY29tZSB0byBMYSBGaWxpcGluYSEnO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgY29uc3QgY3RhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY3RhLmNsYXNzTGlzdC5hZGQoJ2hvbWVfX2N0YScpO1xuICAgIGN0YS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCAnbmF2LW1lbnUnKTtcbiAgICBjdGEudGV4dENvbnRlbnQgPSAnU2VlIE1lbnUnO1xuICAgIGN0YS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5hdkxpbmtDbGlja0hhbmRsZXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3RhKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2UuY2xhc3NMaXN0LmFkZCgnaG9tZV9faW1nJyk7XG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBwaXp6YSk7XG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdhbHQnLCAnbGFyZ2UgcGl6emEnKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuXG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgfSwgMTAwKTtcbn1cbiIsImltcG9ydCBIb21lIGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgTWVudSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IEFib3V0IGZyb20gJy4vYWJvdXQuanMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbkhvbWUoKTtcblxuY29uc3QgcmVmcmVzaFNjcmVlbiA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBjb250ZW50LnJlcGxhY2VDaGlsZHJlbignJyk7XG5cbiAgICBjb25zdCBuYXZMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZfX2xpbmsnKTtcbiAgICBuYXZMaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgICAgIGxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnbmF2X19saW5rLWFjdGl2ZScpO1xuICAgIH0pO1xufTtcblxuY29uc3QgbmF2SG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXYtaG9tZScpO1xuY29uc3QgbmF2TWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXYtbWVudScpO1xuY29uc3QgbmF2QWJvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2LWFib3V0Jyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZMaW5rQ2xpY2tIYW5kbGVyKGUpIHtcbiAgICByZWZyZXNoU2NyZWVuKCk7XG5cbiAgICBjb25zdCBwYWdlID0gZS50YXJnZXQuaWQgfHwgZS50YXJnZXQuZGF0YXNldC5pZDtcblxuICAgIHN3aXRjaCAocGFnZSkge1xuICAgICAgICBjYXNlICduYXYtaG9tZSc6XG4gICAgICAgICAgICBIb21lKCk7XG4gICAgICAgICAgICBuYXZIb21lLmNsYXNzTGlzdC5hZGQoJ25hdl9fbGluay1hY3RpdmUnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICduYXYtbWVudSc6XG4gICAgICAgICAgICBNZW51KCk7XG4gICAgICAgICAgICBuYXZNZW51LmNsYXNzTGlzdC5hZGQoJ25hdl9fbGluay1hY3RpdmUnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICduYXYtYWJvdXQnOlxuICAgICAgICAgICAgQWJvdXQoKTtcbiAgICAgICAgICAgIG5hdkFib3V0LmNsYXNzTGlzdC5hZGQoJ25hdl9fbGluay1hY3RpdmUnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cblxubmF2SG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5hdkxpbmtDbGlja0hhbmRsZXIpO1xubmF2TWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5hdkxpbmtDbGlja0hhbmRsZXIpO1xubmF2QWJvdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuYXZMaW5rQ2xpY2tIYW5kbGVyKTtcblxuY29uc3QgY29weXJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3Rlcl9fY29weXJpZ2h0Jyk7XG5jb25zdCBjdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbmNvcHlyaWdodC50ZXh0Q29udGVudCA9IGDCqSAke2N1cnJlbnRZZWFyfSBMYSBGaWxpcGluYS4gQWxsIFJpZ2h0cyBSZXNlcnZlZGA7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51KCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG5cbiAgICBjb25zdCBmaWxpcGlub1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmaWxpcGlub1NlY3Rpb24uY2xhc3NMaXN0LmFkZCgnbWVudV9fZmlsaXBpbm8nKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZmlsaXBpbm9TZWN0aW9uKTtcblxuICAgIGNvbnN0IGZpbGlwaW5vSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBmaWxpcGlub0hlYWRlci5jbGFzc0xpc3QuYWRkKCdtZW51X19oZWFkZXInKTtcbiAgICBmaWxpcGlub0hlYWRlci50ZXh0Q29udGVudCA9ICdGaWxpcGlubyBTdHlsZSc7XG4gICAgZmlsaXBpbm9TZWN0aW9uLmFwcGVuZENoaWxkKGZpbGlwaW5vSGVhZGVyKTtcblxuICAgIGNvbnN0IGZpbGlwaW5vQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZmlsaXBpbm9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudV9fY29udGFpbmVyJyk7XG4gICAgZmlsaXBpbm9TZWN0aW9uLmFwcGVuZENoaWxkKGZpbGlwaW5vQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGZpbGlwaW5vTWVudSA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgZmxhdm9yOiAnQWRvYm8gTG9jbycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgICAnVGVuZGVyIGFkb2JvLW1hcmluYXRlZCBjaGlja2VuIG9yIHBvcmsgd2l0aCBjYXJhbWVsaXplZCBvbmlvbnMsIGJlbGwgcGVwcGVycywgYW5kIGJheSBsZWFmIGNoZWVzZSBpbiBhIHRvbWF0byBiYXNlIHdpdGggc295IGFuZCB2aW5lZ2FyLicsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZsYXZvcjogJ0xvbmdnYW5pc2EgRGVsaWdodCcsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgICAnU3dlZXQgbG9uZ2dhbmlzYSBzYXVzYWdlIHdpdGggcGluZWFwcGxlIGFuZCBtb3p6YXJlbGxhLCBpbiBhIHRvbWF0byBzYXVjZSB3aXRoIGdhcmxpYyBhbmQgZ2luZ2VyLicsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZsYXZvcjogJ1RhcGEgVGVtcHRhdGlvbnMnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdGaWxpcGlubyB0YXBhIHdpdGggb25pb25zIGFuZCB0b21hdG9lcyBvbiBhIHRvbWF0byBiYXNlIHdpdGggc295LCB0b3BwZWQgd2l0aCBzY2FsbGlvbnMuJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZmxhdm9yOiAnUGlub3kgQkJRJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAgICdTd2VldCBhbmQgc21va3kgQkJRIHBvcmsgd2l0aCByZWQgb25pb25zIGFuZCBjaWxhbnRybywgb24gYSBwaXp6YSBjcnVzdCB3aXRoIHRhbmd5IEJCUSBzYXVjZS4nLFxuICAgICAgICB9LFxuICAgIF07XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICBjb25zdCBmaWxpcGlub0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZmlsaXBpbm9DYXJkLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2NhcmQnKTtcbiAgICAgICAgZmlsaXBpbm9Db250YWluZXIuYXBwZW5kQ2hpbGQoZmlsaXBpbm9DYXJkKTtcblxuICAgICAgICBjb25zdCBmaWxpcGlub0NhcmRJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmaWxpcGlub0NhcmRJbWFnZS5jbGFzc0xpc3QuYWRkKCdtZW51X19jYXJkLWltZycpO1xuICAgICAgICBmaWxpcGlub0NhcmRJbWFnZS50ZXh0Q29udGVudCA9ICdUbyBCZSBVcGRhdGVkJztcbiAgICAgICAgZmlsaXBpbm9DYXJkLmFwcGVuZENoaWxkKGZpbGlwaW5vQ2FyZEltYWdlKTtcblxuICAgICAgICBjb25zdCBmaWxpcGlub0NhcmRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZpbGlwaW5vQ2FyZENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWVudV9fY2FyZC1jb250ZW50Jyk7XG4gICAgICAgIGZpbGlwaW5vQ2FyZC5hcHBlbmRDaGlsZChmaWxpcGlub0NhcmRDb250ZW50KTtcblxuICAgICAgICBjb25zdCBmaWxpcGlub0NhcmRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBmaWxpcGlub0NhcmRIZWFkZXIuY2xhc3NMaXN0LmFkZCgnbWVudV9fY2FyZC1oZWFkZXInKTtcbiAgICAgICAgZmlsaXBpbm9DYXJkSGVhZGVyLnRleHRDb250ZW50ID0gZmlsaXBpbm9NZW51W2ldLmZsYXZvcjtcbiAgICAgICAgZmlsaXBpbm9DYXJkQ29udGVudC5hcHBlbmRDaGlsZChmaWxpcGlub0NhcmRIZWFkZXIpO1xuXG4gICAgICAgIGNvbnN0IGZpbGlwaW5vQ2FyZERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGZpbGlwaW5vQ2FyZERlc2MuY2xhc3NMaXN0LmFkZCgnbWVudV9fY2FyZC1kZXNjJyk7XG4gICAgICAgIGZpbGlwaW5vQ2FyZERlc2MudGV4dENvbnRlbnQgPSBmaWxpcGlub01lbnVbaV0uZGVzY3JpcHRpb247XG4gICAgICAgIGZpbGlwaW5vQ2FyZENvbnRlbnQuYXBwZW5kQ2hpbGQoZmlsaXBpbm9DYXJkRGVzYyk7XG4gICAgfVxuXG4gICAgY29uc3QgY2xhc3NpY1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjbGFzc2ljU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdtZW51X19jbGFzc2ljJyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNsYXNzaWNTZWN0aW9uKTtcblxuICAgIGNvbnN0IGNsYXNzaWNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNsYXNzaWNIZWFkZXIuY2xhc3NMaXN0LmFkZCgnbWVudV9faGVhZGVyJyk7XG4gICAgY2xhc3NpY0hlYWRlci50ZXh0Q29udGVudCA9ICdDbGFzc2ljIFN0eWxlJztcbiAgICBjbGFzc2ljU2VjdGlvbi5hcHBlbmRDaGlsZChjbGFzc2ljSGVhZGVyKTtcblxuICAgIGNvbnN0IGNsYXNzaWNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjbGFzc2ljQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2NvbnRhaW5lcicpO1xuICAgIGNsYXNzaWNTZWN0aW9uLmFwcGVuZENoaWxkKGNsYXNzaWNDb250YWluZXIpO1xuXG4gICAgY29uc3QgY2xhc3NpY01lbnUgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZsYXZvcjogJ0hhd2FpaWFuJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnSGFtIGFuZCBwaW5lYXBwbGUgd2l0aCBtZWx0ZWQgbW96emFyZWxsYSBhbmQgdGFuZ3kgdG9tYXRvIHNhdWNlIGZvciBhIHRyb3BpY2FsIHR3aXN0LicsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZsYXZvcjogJ1BlcHBlcm9uaScsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgICAnU3BpY3kgcGVwcGVyb25pIHdpdGggbW96emFyZWxsYSBhbmQgcmljaCB0b21hdG8gc2F1Y2UsIG9mZmVyaW5nIGJvbGQgZmxhdm9ycyBhbmQgY3Jpc3B5IGVkZ2VzLicsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZsYXZvcjogJ01lYXQgT3ZlcmxvYWQnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdBIGhlYXJ0eSBtaXggb2YgcGVwcGVyb25pLCBzYXVzYWdlLCBoYW0sIGFuZCBiYWNvbiwgd2l0aCBtb3p6YXJlbGxhIGFuZCByb2J1c3QgdG9tYXRvIHNhdWNlLicsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZsYXZvcjogJ0ZvdXIgQ2hlZXNlJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQSBibGVuZCBvZiBtb3p6YXJlbGxhLCBjaGVkZGFyLCBQYXJtZXNhbiwgYW5kIEdvcmdvbnpvbGEgd2l0aCBnYXJsaWMgYW5kIGhlcmJzLicsXG4gICAgICAgIH0sXG4gICAgXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzaWNDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNsYXNzaWNDYXJkLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2NhcmQnKTtcbiAgICAgICAgY2xhc3NpY0NvbnRhaW5lci5hcHBlbmRDaGlsZChjbGFzc2ljQ2FyZCk7XG5cbiAgICAgICAgY29uc3QgY2xhc3NpY0NhcmRJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjbGFzc2ljQ2FyZEltYWdlLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2NhcmQtaW1nJyk7XG4gICAgICAgIGNsYXNzaWNDYXJkSW1hZ2UudGV4dENvbnRlbnQgPSAnVG8gQmUgVXBkYXRlZCc7XG4gICAgICAgIGNsYXNzaWNDYXJkLmFwcGVuZENoaWxkKGNsYXNzaWNDYXJkSW1hZ2UpO1xuXG4gICAgICAgIGNvbnN0IGNsYXNzaWNDYXJkQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjbGFzc2ljQ2FyZENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWVudV9fY2FyZC1jb250ZW50Jyk7XG4gICAgICAgIGNsYXNzaWNDYXJkLmFwcGVuZENoaWxkKGNsYXNzaWNDYXJkQ29udGVudCk7XG5cbiAgICAgICAgY29uc3QgY2xhc3NpY0NhcmRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBjbGFzc2ljQ2FyZEhlYWRlci5jbGFzc0xpc3QuYWRkKCdtZW51X19jYXJkLWhlYWRlcicpO1xuICAgICAgICBjbGFzc2ljQ2FyZEhlYWRlci50ZXh0Q29udGVudCA9IGNsYXNzaWNNZW51W2ldLmZsYXZvcjtcbiAgICAgICAgY2xhc3NpY0NhcmRDb250ZW50LmFwcGVuZENoaWxkKGNsYXNzaWNDYXJkSGVhZGVyKTtcblxuICAgICAgICBjb25zdCBjbGFzc2ljQ2FyZERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNsYXNzaWNDYXJkRGVzYy5jbGFzc0xpc3QuYWRkKCdtZW51X19jYXJkLWRlc2MnKTtcbiAgICAgICAgY2xhc3NpY0NhcmREZXNjLnRleHRDb250ZW50ID0gY2xhc3NpY01lbnVbaV0uZGVzY3JpcHRpb247XG4gICAgICAgIGNsYXNzaWNDYXJkQ29udGVudC5hcHBlbmRDaGlsZChjbGFzc2ljQ2FyZERlc2MpO1xuICAgIH1cblxuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgIH0sIDEwMCk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=