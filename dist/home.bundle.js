"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["home"],{

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
    padding: 3rem 0;
    width: var(--w-page);
    align-content: center;
    margin-bottom: 10vh;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,oHAA6F;AACjG;;AAEA;;;CAGC;AACD;;;IAGI,sBAAsB;AAC1B;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,gBAAgB;IAChB,mCAAmC;AACvC;;AAEA;;;;;IAKI,cAAc;IACd,eAAe;AACnB;;AAEA;;;;IAII,aAAa;AACjB;;AAEA;;;;;;;IAOI,yBAAyB;AAC7B;;AAEA;;IAEI,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,iBAAiB;IACjB,wBAAwB;IACxB,8BAA8B;IAC9B,qBAAqB;IACrB,2BAA2B;IAC3B,oBAAoB;IACpB,0BAA0B;IAC1B,yBAAyB;IACzB,oBAAoB;AACxB;;AAEA;IACI,sCAAsC;IACtC,qDAAqD;AACzD;;AAEA;IACI,wBAAwB;IACxB,6BAA6B;AACjC;;AAEA,WAAW;;AAEX;IACI,aAAa;IACb,uBAAuB;IACvB,2BAA2B;IAC3B,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,8BAA8B;IAC9B,oBAAoB;AACxB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,SAAS;AACb;;AAEA;IACI,kCAAkC;IAClC,YAAY;IACZ,mCAAmC;AACvC;;AAEA;IACI,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,0CAA0C;IAC1C,aAAa;AACjB;;AAEA,eAAe;AACf;;;IAGI,UAAU;IACV,iCAAiC;AACrC;;AAEA;IACI,UAAU;AACd;;AAEA,SAAS;;AAET;IACI,aAAa;IACb,SAAS;IACT,8BAA8B;IAC9B,eAAe;IACf,oBAAoB;IACpB,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,4BAA4B;IAC5B,aAAa;IACb,SAAS;IACT,0CAA0C;IAC1C,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,uCAAuC;IACvC,uCAAuC;IACvC,2BAA2B;IAC3B,kBAAkB;IAClB,mBAAmB;IACnB,sBAAsB;IACtB,iCAAiC;AACrC;;AAEA;IACI,sCAAsC;IACtC,4BAA4B;IAC5B,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,uCAAuC;AAC3C;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI;QACI,MAAM;QACN,0BAA0B;QAC1B,cAAc;IAClB;;IAEA;QACI,kBAAkB;IACtB;;IAEA;QACI,oBAAoB;IACxB;;IAEA;QACI,gBAAgB;QAChB,mBAAmB;QACnB,eAAe;IACnB;AACJ;;AAEA,SAAS;;AAET;IACI,aAAa;AACjB;;AAEA;;IAEI,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,wBAAwB;IACxB,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,uBAAuB;AAC3B;;AAEA;IACI,4CAA4C;IAC5C,mCAAmC;IACnC,0CAA0C;IAC1C,aAAa;IACb,wBAAwB;IACxB,uCAAuC;IACvC,YAAY;AAChB;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,mBAAmB;IACnB,uCAAuC;IACvC,4CAA4C;IAC5C,6CAA6C;IAC7C,iCAAiC;IACjC,aAAa;IACb,iBAAiB;IACjB,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,WAAW;IACX,mBAAmB;IACnB,oBAAoB;AACxB;;AAEA;IACI,4BAA4B;IAC5B,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA,UAAU;;AAEV;IACI,mBAAmB;IACnB,aAAa;IACb,SAAS;IACT,mBAAmB;IACnB,oBAAoB;AACxB;;AAEA;;;IAGI,aAAa;IACb,SAAS;IACT,+BAA+B;IAC/B,kBAAkB;AACtB;;AAEA;IACI,+BAA+B;IAC/B,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,4BAA4B;IAC5B,eAAe;IACf,cAAc;IACd,kBAAkB;AACtB;;AAEA;;;IAGI,wCAAwC;IACxC,WAAW;IACX,WAAW;IACX,SAAS;IACT,kBAAkB;IAClB,QAAQ;IACR,WAAW;IACX,WAAW;AACf;;AAEA;IACI,yCAAyC;IACzC,QAAQ;AACZ;;AAEA;IACI,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI;QACI,SAAS;QACT,uBAAuB;IAC3B;;IAEA;;;QAGI,SAAS;QACT,0BAA0B;IAC9B;;IAEA;QACI,gBAAgB;IACpB;;IAEA;QACI,SAAS;IACb;AACJ;;AAEA,WAAW;;AAEX;IACI,uCAAuC;IACvC,2BAA2B;IAC3B,aAAa;IACb,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb;;wBAEoB;IACpB,8BAA8B;IAC9B,6BAA6B;IAC7B,aAAa;IACb,oBAAoB;AACxB;;AAEA;IACI,2BAA2B;IAC3B,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,qDAAqD;IACrD,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;IACpB,mBAAmB;AACvB","sourcesContent":["@font-face {\n    font-family: 'Norican';\n    src: url('norican-regular.woff') format('woff'), url('norican-regular.woff2') format('woff2');\n}\n\n/*\n  Josh's Custom CSS Reset\n  https://www.joshwcomeau.com/css/custom-css-reset/\n*/\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n* {\n    margin: 0;\n}\n\nbody {\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n    display: block;\n    max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n    font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    overflow-wrap: break-word;\n}\n\n#root,\n#__next {\n    isolation: isolate;\n}\n\n:root {\n    --w-page: 85em;\n    --h-header: 10svh;\n    --clr-off-white: #fffaf1;\n    --clr-off-light-white: #fffdf9;\n    --clr-maroon: #803d3b;\n    --clr-light-maroon: #b28a89;\n    --clr-brown: #af8260;\n    --clr-light-brown: #c7a78f;\n    --clr-dark-brown: #322c2b;\n    --border-radius: 8px;\n}\n\nbody {\n    background-color: var(--clr-off-white);\n    font-family: Georgia, 'Times New Roman', Times, serif;\n}\n\n.logo {\n    color: var(--clr-maroon);\n    font-family: 'Norican', serif;\n}\n\n/* Header */\n\n.header {\n    display: flex;\n    justify-content: center;\n    min-height: var(--h-header);\n    padding: 1rem 2rem;\n}\n\n.header__container {\n    align-items: center;\n    display: flex;\n    justify-content: space-between;\n    width: var(--w-page);\n}\n\n.header__logo {\n    font-size: 2rem;\n}\n\n.header__nav {\n    align-items: center;\n    display: flex;\n    gap: 2rem;\n}\n\n.nav__link {\n    background-color: rgba(0, 0, 0, 0);\n    border: none;\n    transition: color 250ms ease-in-out;\n}\n\n.nav__link:hover {\n    color: var(--clr-brown);\n    cursor: pointer;\n}\n\n.nav__link-active {\n    color: var(--clr-maroon);\n}\n\n#content {\n    display: flex;\n    justify-content: center;\n    min-height: calc(100svh - var(--h-header));\n    padding: 2rem;\n}\n\n/* Transition */\n.home,\n.menu,\n.about {\n    opacity: 0;\n    transition: opacity 500ms ease-in;\n}\n\n.visible {\n    opacity: 1;\n}\n\n/* Home */\n\n.home {\n    display: grid;\n    gap: 6rem;\n    grid-template-columns: 2fr 3fr;\n    padding: 3rem 0;\n    width: var(--w-page);\n    align-content: center;\n    margin-bottom: 10vh;\n}\n\n.home__content {\n    color: var(--clr-dark-brown);\n    display: grid;\n    gap: 1rem;\n    grid-template-rows: repeat(3, min-content);\n    margin-top: 1em;\n}\n\n.home__tagline {\n    font-size: 3rem;\n    line-height: 1.3;\n}\n\n.home__desc {\n    font-size: 1rem;\n    margin-bottom: 1rem;\n}\n\n.home__cta {\n    background-color: var(--clr-dark-brown);\n    border: 1px solid var(--clr-dark-brown);\n    color: var(--clr-off-white);\n    font-size: 1.25rem;\n    justify-self: start;\n    padding: 0.25em 1.15em;\n    transition: all 250ms ease-in-out;\n}\n\n.home__cta:hover {\n    background-color: var(--clr-off-white);\n    color: var(--clr-dark-brown);\n    cursor: pointer;\n}\n\n.home__img {\n    align-self: center;\n    object-fit: contain;\n    transition: transform 500ms ease-in-out;\n}\n\n.home__img:hover {\n    transform: scale(1.025);\n}\n\n@media (max-width: 1000px) {\n    .home {\n        gap: 0;\n        grid-template-columns: 1fr;\n        padding-top: 0;\n    }\n\n    .home__content {\n        text-align: center;\n    }\n\n    .home__cta {\n        justify-self: center;\n    }\n\n    .home__img {\n        grid-area: 1 / 1;\n        margin-bottom: 2rem;\n        padding: 0 4rem;\n    }\n}\n\n/* Menu */\n\n.menu {\n    padding: 2rem;\n}\n\n.menu__filipino,\n.menu__classic {\n    margin-bottom: 6rem;\n    text-align: center;\n}\n\n.menu__header {\n    color: var(--clr-maroon);\n    font-size: 2rem;\n    margin-bottom: 2rem;\n}\n\n.menu__container {\n    display: flex;\n    flex-flow: row wrap;\n    gap: 2rem;\n    justify-content: center;\n}\n\n.menu__card {\n    background-color: var(--clr-off-light-white);\n    border-radius: var(--border-radius);\n    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);\n    display: flex;\n    flex-flow: column nowrap;\n    transition: transform 250ms ease-in-out;\n    width: 260px;\n}\n\n.menu__card:hover {\n    transform: translateY(-10px);\n}\n\n.menu__card-img {\n    align-items: center;\n    background-color: var(--clr-dark-brown);\n    border-top-left-radius: var(--border-radius);\n    border-top-right-radius: var(--border-radius);\n    color: var(--clr-off-light-white);\n    display: flex;\n    font-size: 0.8rem;\n    height: 200px;\n    justify-content: center;\n}\n\n.menu__card-content {\n    display: grid;\n    gap: 0.5rem;\n    margin-bottom: 1rem;\n    padding: 1rem 1.5rem;\n}\n\n.menu__card-header {\n    color: var(--clr-dark-brown);\n    font-size: 1.15rem;\n}\n\n.menu__card-desc {\n    font-size: 0.8rem;\n    text-align: center;\n}\n\n/* About */\n\n.about {\n    align-items: center;\n    display: grid;\n    gap: 1rem;\n    margin-bottom: 3rem;\n    width: var(--w-page);\n}\n\n.about-us,\n.story,\n.mission {\n    display: grid;\n    gap: 3rem;\n    grid-template-columns: auto 1fr;\n    justify-self: left;\n}\n\n.story {\n    grid-template-columns: 1fr auto;\n    justify-self: right;\n}\n\n.story > .about__header {\n    grid-area: 1 / 2;\n}\n\n.about__header {\n    align-self: start;\n    color: var(--clr-dark-brown);\n    font-size: 5rem;\n    line-height: 1;\n    position: relative;\n}\n\n.about-us > .about__header::before,\n.story > .about__header::before,\n.mission > .about__header::before {\n    background-color: var(--clr-light-brown);\n    content: '';\n    height: 50%;\n    left: -5%;\n    position: absolute;\n    top: 60%;\n    width: 100%;\n    z-index: -1;\n}\n\n.story > .about__header::before {\n    background-color: var(--clr-light-maroon);\n    left: 5%;\n}\n\n.about__body {\n    font-size: 0.9rem;\n    max-width: 70ch;\n}\n\n@media (max-width: 1000px) {\n    .about {\n        gap: 4rem;\n        justify-content: center;\n    }\n\n    .about-us,\n    .story,\n    .mission {\n        gap: 2rem;\n        grid-template-columns: 1fr;\n    }\n\n    .story > .about__header {\n        grid-area: 1 / 1;\n    }\n\n    .story > .about__header::before {\n        left: -5%;\n    }\n}\n\n/* Footer */\n\n.footer {\n    background-color: var(--clr-dark-brown);\n    color: var(--clr-off-white);\n    display: flex;\n    justify-content: center;\n    padding: 3rem 2rem;\n}\n\n.footer__container {\n    display: grid;\n    grid-template-areas:\n        'logo contact'\n        'logo copyright';\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: auto auto;\n    row-gap: 2rem;\n    width: var(--w-page);\n}\n\n.footer__logo {\n    color: var(--clr-off-white);\n    font-size: 2.5rem;\n    grid-area: logo;\n}\n\n.footer__contact {\n    display: grid;\n    grid-area: contact;\n    row-gap: 1rem;\n    font-size: 0.9rem;\n}\n\n.footer__phone {\n    text-align: right;\n}\n\n.footer__address {\n    font-family: Georgia, 'Times New Roman', Times, serif;\n    text-align: right;\n}\n\n.footer__copyright {\n    font-size: 0.75rem;\n    grid-area: copyright;\n    justify-self: right;\n}\n"],"sourceRoot":""}]);
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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/home.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHVIQUF1QztBQUNuRiw0Q0FBNEMseUhBQXdDO0FBQ3BGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DLHdCQUF3QixtQ0FBbUM7QUFDN0c7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxPQUFPLE9BQU8sS0FBSyxPQUFPLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLFNBQVMsVUFBVSxVQUFVLE9BQU8sUUFBUSxVQUFVLE9BQU8sV0FBVyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLFVBQVUsT0FBTyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxXQUFXLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sV0FBVyxLQUFLLFVBQVUsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFdBQVcsS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxPQUFPLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sT0FBTyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxLQUFLLFVBQVUsWUFBWSxPQUFPLE9BQU8sVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLEtBQUssTUFBTSxXQUFXLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sT0FBTyxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxzQ0FBc0MsNkJBQTZCLG9HQUFvRyxHQUFHLHNIQUFzSCw2QkFBNkIsR0FBRyxPQUFPLGdCQUFnQixHQUFHLFVBQVUsdUJBQXVCLDBDQUEwQyxHQUFHLDBDQUEwQyxxQkFBcUIsc0JBQXNCLEdBQUcsd0NBQXdDLG9CQUFvQixHQUFHLHFDQUFxQyxnQ0FBZ0MsR0FBRyxxQkFBcUIseUJBQXlCLEdBQUcsV0FBVyxxQkFBcUIsd0JBQXdCLCtCQUErQixxQ0FBcUMsNEJBQTRCLGtDQUFrQywyQkFBMkIsaUNBQWlDLGdDQUFnQywyQkFBMkIsR0FBRyxVQUFVLDZDQUE2Qyw0REFBNEQsR0FBRyxXQUFXLCtCQUErQixvQ0FBb0MsR0FBRyw2QkFBNkIsb0JBQW9CLDhCQUE4QixrQ0FBa0MseUJBQXlCLEdBQUcsd0JBQXdCLDBCQUEwQixvQkFBb0IscUNBQXFDLDJCQUEyQixHQUFHLG1CQUFtQixzQkFBc0IsR0FBRyxrQkFBa0IsMEJBQTBCLG9CQUFvQixnQkFBZ0IsR0FBRyxnQkFBZ0IseUNBQXlDLG1CQUFtQiwwQ0FBMEMsR0FBRyxzQkFBc0IsOEJBQThCLHNCQUFzQixHQUFHLHVCQUF1QiwrQkFBK0IsR0FBRyxjQUFjLG9CQUFvQiw4QkFBOEIsaURBQWlELG9CQUFvQixHQUFHLDhDQUE4QyxpQkFBaUIsd0NBQXdDLEdBQUcsY0FBYyxpQkFBaUIsR0FBRyx5QkFBeUIsb0JBQW9CLGdCQUFnQixxQ0FBcUMsc0JBQXNCLDJCQUEyQiw0QkFBNEIsMEJBQTBCLEdBQUcsb0JBQW9CLG1DQUFtQyxvQkFBb0IsZ0JBQWdCLGlEQUFpRCxzQkFBc0IsR0FBRyxvQkFBb0Isc0JBQXNCLHVCQUF1QixHQUFHLGlCQUFpQixzQkFBc0IsMEJBQTBCLEdBQUcsZ0JBQWdCLDhDQUE4Qyw4Q0FBOEMsa0NBQWtDLHlCQUF5QiwwQkFBMEIsNkJBQTZCLHdDQUF3QyxHQUFHLHNCQUFzQiw2Q0FBNkMsbUNBQW1DLHNCQUFzQixHQUFHLGdCQUFnQix5QkFBeUIsMEJBQTBCLDhDQUE4QyxHQUFHLHNCQUFzQiw4QkFBOEIsR0FBRyxnQ0FBZ0MsYUFBYSxpQkFBaUIscUNBQXFDLHlCQUF5QixPQUFPLHdCQUF3Qiw2QkFBNkIsT0FBTyxvQkFBb0IsK0JBQStCLE9BQU8sb0JBQW9CLDJCQUEyQiw4QkFBOEIsMEJBQTBCLE9BQU8sR0FBRyx5QkFBeUIsb0JBQW9CLEdBQUcsc0NBQXNDLDBCQUEwQix5QkFBeUIsR0FBRyxtQkFBbUIsK0JBQStCLHNCQUFzQiwwQkFBMEIsR0FBRyxzQkFBc0Isb0JBQW9CLDBCQUEwQixnQkFBZ0IsOEJBQThCLEdBQUcsaUJBQWlCLG1EQUFtRCwwQ0FBMEMsaURBQWlELG9CQUFvQiwrQkFBK0IsOENBQThDLG1CQUFtQixHQUFHLHVCQUF1QixtQ0FBbUMsR0FBRyxxQkFBcUIsMEJBQTBCLDhDQUE4QyxtREFBbUQsb0RBQW9ELHdDQUF3QyxvQkFBb0Isd0JBQXdCLG9CQUFvQiw4QkFBOEIsR0FBRyx5QkFBeUIsb0JBQW9CLGtCQUFrQiwwQkFBMEIsMkJBQTJCLEdBQUcsd0JBQXdCLG1DQUFtQyx5QkFBeUIsR0FBRyxzQkFBc0Isd0JBQXdCLHlCQUF5QixHQUFHLDJCQUEyQiwwQkFBMEIsb0JBQW9CLGdCQUFnQiwwQkFBMEIsMkJBQTJCLEdBQUcsbUNBQW1DLG9CQUFvQixnQkFBZ0Isc0NBQXNDLHlCQUF5QixHQUFHLFlBQVksc0NBQXNDLDBCQUEwQixHQUFHLDZCQUE2Qix1QkFBdUIsR0FBRyxvQkFBb0Isd0JBQXdCLG1DQUFtQyxzQkFBc0IscUJBQXFCLHlCQUF5QixHQUFHLDhHQUE4RywrQ0FBK0Msa0JBQWtCLGtCQUFrQixnQkFBZ0IseUJBQXlCLGVBQWUsa0JBQWtCLGtCQUFrQixHQUFHLHFDQUFxQyxnREFBZ0QsZUFBZSxHQUFHLGtCQUFrQix3QkFBd0Isc0JBQXNCLEdBQUcsZ0NBQWdDLGNBQWMsb0JBQW9CLGtDQUFrQyxPQUFPLCtDQUErQyxvQkFBb0IscUNBQXFDLE9BQU8saUNBQWlDLDJCQUEyQixPQUFPLHlDQUF5QyxvQkFBb0IsT0FBTyxHQUFHLDZCQUE2Qiw4Q0FBOEMsa0NBQWtDLG9CQUFvQiw4QkFBOEIseUJBQXlCLEdBQUcsd0JBQXdCLG9CQUFvQiw2RUFBNkUscUNBQXFDLG9DQUFvQyxvQkFBb0IsMkJBQTJCLEdBQUcsbUJBQW1CLGtDQUFrQyx3QkFBd0Isc0JBQXNCLEdBQUcsc0JBQXNCLG9CQUFvQix5QkFBeUIsb0JBQW9CLHdCQUF3QixHQUFHLG9CQUFvQix3QkFBd0IsR0FBRyxzQkFBc0IsNERBQTRELHdCQUF3QixHQUFHLHdCQUF3Qix5QkFBeUIsMkJBQTJCLDBCQUEwQixHQUFHLHFCQUFxQjtBQUN4aFU7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUN6YTFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7QUFDckMsaUJBQWlCLHVHQUFhO0FBQzlCLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDeEJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYmU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRGdDO0FBQ2lCOztBQUVsQztBQUNmO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDBEQUFtQjtBQUNyRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCLHVDQUFLO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUM2QjtBQUNBO0FBQ0U7QUFDVjs7QUFFckIsb0RBQUk7O0FBRUo7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxvREFBSTtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9EQUFJO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLFlBQVkscURBQUs7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkIsYUFBYTs7Ozs7Ozs7Ozs7Ozs7O0FDaEQzQjtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJub3JpY2FuLXJlZ3VsYXIud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIm5vcmljYW4tcmVndWxhci53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTm9yaWNhbic7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KCd3b2ZmJyksIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoJ3dvZmYyJyk7XG59XG5cbi8qXG4gIEpvc2gncyBDdXN0b20gQ1NTIFJlc2V0XG4gIGh0dHBzOi8vd3d3Lmpvc2h3Y29tZWF1LmNvbS9jc3MvY3VzdG9tLWNzcy1yZXNldC9cbiovXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbioge1xuICAgIG1hcmdpbjogMDtcbn1cblxuYm9keSB7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuaW1nLFxucGljdHVyZSxcbnZpZGVvLFxuY2FudmFzLFxuc3ZnIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbmlucHV0LFxuYnV0dG9uLFxudGV4dGFyZWEsXG5zZWxlY3Qge1xuICAgIGZvbnQ6IGluaGVyaXQ7XG59XG5cbnAsXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbiNyb290LFxuI19fbmV4dCB7XG4gICAgaXNvbGF0aW9uOiBpc29sYXRlO1xufVxuXG46cm9vdCB7XG4gICAgLS13LXBhZ2U6IDg1ZW07XG4gICAgLS1oLWhlYWRlcjogMTBzdmg7XG4gICAgLS1jbHItb2ZmLXdoaXRlOiAjZmZmYWYxO1xuICAgIC0tY2xyLW9mZi1saWdodC13aGl0ZTogI2ZmZmRmOTtcbiAgICAtLWNsci1tYXJvb246ICM4MDNkM2I7XG4gICAgLS1jbHItbGlnaHQtbWFyb29uOiAjYjI4YTg5O1xuICAgIC0tY2xyLWJyb3duOiAjYWY4MjYwO1xuICAgIC0tY2xyLWxpZ2h0LWJyb3duOiAjYzdhNzhmO1xuICAgIC0tY2xyLWRhcmstYnJvd246ICMzMjJjMmI7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbmJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1vZmYtd2hpdGUpO1xuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xufVxuXG4ubG9nbyB7XG4gICAgY29sb3I6IHZhcigtLWNsci1tYXJvb24pO1xuICAgIGZvbnQtZmFtaWx5OiAnTm9yaWNhbicsIHNlcmlmO1xufVxuXG4vKiBIZWFkZXIgKi9cblxuLmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtaW4taGVpZ2h0OiB2YXIoLS1oLWhlYWRlcik7XG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xufVxuXG4uaGVhZGVyX19jb250YWluZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgd2lkdGg6IHZhcigtLXctcGFnZSk7XG59XG5cbi5oZWFkZXJfX2xvZ28ge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLmhlYWRlcl9fbmF2IHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAycmVtO1xufVxuXG4ubmF2X19saW5rIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAyNTBtcyBlYXNlLWluLW91dDtcbn1cblxuLm5hdl9fbGluazpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLWNsci1icm93bik7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmF2X19saW5rLWFjdGl2ZSB7XG4gICAgY29sb3I6IHZhcigtLWNsci1tYXJvb24pO1xufVxuXG4jY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHN2aCAtIHZhcigtLWgtaGVhZGVyKSk7XG4gICAgcGFkZGluZzogMnJlbTtcbn1cblxuLyogVHJhbnNpdGlvbiAqL1xuLmhvbWUsXG4ubWVudSxcbi5hYm91dCB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDUwMG1zIGVhc2UtaW47XG59XG5cbi52aXNpYmxlIHtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4vKiBIb21lICovXG5cbi5ob21lIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogNnJlbTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAzZnI7XG4gICAgcGFkZGluZzogM3JlbSAwO1xuICAgIHdpZHRoOiB2YXIoLS13LXBhZ2UpO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHZoO1xufVxuXG4uaG9tZV9fY29udGVudCB7XG4gICAgY29sb3I6IHZhcigtLWNsci1kYXJrLWJyb3duKTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMXJlbTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCBtaW4tY29udGVudCk7XG4gICAgbWFyZ2luLXRvcDogMWVtO1xufVxuXG4uaG9tZV9fdGFnbGluZSB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG59XG5cbi5ob21lX19kZXNjIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmhvbWVfX2N0YSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWRhcmstYnJvd24pO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNsci1kYXJrLWJyb3duKTtcbiAgICBjb2xvcjogdmFyKC0tY2xyLW9mZi13aGl0ZSk7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XG4gICAgcGFkZGluZzogMC4yNWVtIDEuMTVlbTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5ob21lX19jdGE6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1vZmYtd2hpdGUpO1xuICAgIGNvbG9yOiB2YXIoLS1jbHItZGFyay1icm93bik7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaG9tZV9faW1nIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNTAwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5ob21lX19pbWc6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMjUpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgLmhvbWUge1xuICAgICAgICBnYXA6IDA7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICB9XG5cbiAgICAuaG9tZV9fY29udGVudCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuaG9tZV9fY3RhIHtcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmhvbWVfX2ltZyB7XG4gICAgICAgIGdyaWQtYXJlYTogMSAvIDE7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgIHBhZGRpbmc6IDAgNHJlbTtcbiAgICB9XG59XG5cbi8qIE1lbnUgKi9cblxuLm1lbnUge1xuICAgIHBhZGRpbmc6IDJyZW07XG59XG5cbi5tZW51X19maWxpcGlubyxcbi5tZW51X19jbGFzc2ljIHtcbiAgICBtYXJnaW4tYm90dG9tOiA2cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1lbnVfX2hlYWRlciB7XG4gICAgY29sb3I6IHZhcigtLWNsci1tYXJvb24pO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4ubWVudV9fY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAgZ2FwOiAycmVtO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubWVudV9fY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLW9mZi1saWdodC13aGl0ZSk7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgYm94LXNoYWRvdzogM3B4IDNweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBlYXNlLWluLW91dDtcbiAgICB3aWR0aDogMjYwcHg7XG59XG5cbi5tZW51X19jYXJkOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xufVxuXG4ubWVudV9fY2FyZC1pbWcge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWRhcmstYnJvd24pO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICBjb2xvcjogdmFyKC0tY2xyLW9mZi1saWdodC13aGl0ZSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubWVudV9fY2FyZC1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMC41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XG59XG5cbi5tZW51X19jYXJkLWhlYWRlciB7XG4gICAgY29sb3I6IHZhcigtLWNsci1kYXJrLWJyb3duKTtcbiAgICBmb250LXNpemU6IDEuMTVyZW07XG59XG5cbi5tZW51X19jYXJkLWRlc2Mge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogQWJvdXQgKi9cblxuLmFib3V0IHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAxcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gICAgd2lkdGg6IHZhcigtLXctcGFnZSk7XG59XG5cbi5hYm91dC11cyxcbi5zdG9yeSxcbi5taXNzaW9uIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogM3JlbTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xuICAgIGp1c3RpZnktc2VsZjogbGVmdDtcbn1cblxuLnN0b3J5IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xuICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XG59XG5cbi5zdG9yeSA+IC5hYm91dF9faGVhZGVyIHtcbiAgICBncmlkLWFyZWE6IDEgLyAyO1xufVxuXG4uYWJvdXRfX2hlYWRlciB7XG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XG4gICAgY29sb3I6IHZhcigtLWNsci1kYXJrLWJyb3duKTtcbiAgICBmb250LXNpemU6IDVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYWJvdXQtdXMgPiAuYWJvdXRfX2hlYWRlcjo6YmVmb3JlLFxuLnN0b3J5ID4gLmFib3V0X19oZWFkZXI6OmJlZm9yZSxcbi5taXNzaW9uID4gLmFib3V0X19oZWFkZXI6OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWxpZ2h0LWJyb3duKTtcbiAgICBjb250ZW50OiAnJztcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICBsZWZ0OiAtNSU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNjAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IC0xO1xufVxuXG4uc3RvcnkgPiAuYWJvdXRfX2hlYWRlcjo6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItbGlnaHQtbWFyb29uKTtcbiAgICBsZWZ0OiA1JTtcbn1cblxuLmFib3V0X19ib2R5IHtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBtYXgtd2lkdGg6IDcwY2g7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAuYWJvdXQge1xuICAgICAgICBnYXA6IDRyZW07XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cblxuICAgIC5hYm91dC11cyxcbiAgICAuc3RvcnksXG4gICAgLm1pc3Npb24ge1xuICAgICAgICBnYXA6IDJyZW07XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIH1cblxuICAgIC5zdG9yeSA+IC5hYm91dF9faGVhZGVyIHtcbiAgICAgICAgZ3JpZC1hcmVhOiAxIC8gMTtcbiAgICB9XG5cbiAgICAuc3RvcnkgPiAuYWJvdXRfX2hlYWRlcjo6YmVmb3JlIHtcbiAgICAgICAgbGVmdDogLTUlO1xuICAgIH1cbn1cblxuLyogRm9vdGVyICovXG5cbi5mb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1kYXJrLWJyb3duKTtcbiAgICBjb2xvcjogdmFyKC0tY2xyLW9mZi13aGl0ZSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAzcmVtIDJyZW07XG59XG5cbi5mb290ZXJfX2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICAnbG9nbyBjb250YWN0J1xuICAgICAgICAnbG9nbyBjb3B5cmlnaHQnO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcbiAgICByb3ctZ2FwOiAycmVtO1xuICAgIHdpZHRoOiB2YXIoLS13LXBhZ2UpO1xufVxuXG4uZm9vdGVyX19sb2dvIHtcbiAgICBjb2xvcjogdmFyKC0tY2xyLW9mZi13aGl0ZSk7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgZ3JpZC1hcmVhOiBsb2dvO1xufVxuXG4uZm9vdGVyX19jb250YWN0IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtYXJlYTogY29udGFjdDtcbiAgICByb3ctZ2FwOiAxcmVtO1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4uZm9vdGVyX19waG9uZSB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5mb290ZXJfX2FkZHJlc3Mge1xuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uZm9vdGVyX19jb3B5cmlnaHQge1xuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICBncmlkLWFyZWE6IGNvcHlyaWdodDtcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLG9IQUE2RjtBQUNqRzs7QUFFQTs7O0NBR0M7QUFDRDs7O0lBR0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1DQUFtQztBQUN2Qzs7QUFFQTs7Ozs7SUFLSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTs7OztJQUlJLGFBQWE7QUFDakI7O0FBRUE7Ozs7Ozs7SUFPSSx5QkFB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QUFFQTtJQUNJLHFEQUFxRDtJQUNyRCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdOb3JpY2FuJztcXG4gICAgc3JjOiB1cmwoJ25vcmljYW4tcmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyksIHVybCgnbm9yaWNhbi1yZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xcbn1cXG5cXG4vKlxcbiAgSm9zaCdzIEN1c3RvbSBDU1MgUmVzZXRcXG4gIGh0dHBzOi8vd3d3Lmpvc2h3Y29tZWF1LmNvbS9jc3MvY3VzdG9tLWNzcy1yZXNldC9cXG4qL1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbn1cXG5cXG5pbWcsXFxucGljdHVyZSxcXG52aWRlbyxcXG5jYW52YXMsXFxuc3ZnIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuaW5wdXQsXFxuYnV0dG9uLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbnAsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4jcm9vdCxcXG4jX19uZXh0IHtcXG4gICAgaXNvbGF0aW9uOiBpc29sYXRlO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tdy1wYWdlOiA4NWVtO1xcbiAgICAtLWgtaGVhZGVyOiAxMHN2aDtcXG4gICAgLS1jbHItb2ZmLXdoaXRlOiAjZmZmYWYxO1xcbiAgICAtLWNsci1vZmYtbGlnaHQtd2hpdGU6ICNmZmZkZjk7XFxuICAgIC0tY2xyLW1hcm9vbjogIzgwM2QzYjtcXG4gICAgLS1jbHItbGlnaHQtbWFyb29uOiAjYjI4YTg5O1xcbiAgICAtLWNsci1icm93bjogI2FmODI2MDtcXG4gICAgLS1jbHItbGlnaHQtYnJvd246ICNjN2E3OGY7XFxuICAgIC0tY2xyLWRhcmstYnJvd246ICMzMjJjMmI7XFxuICAgIC0tYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLW9mZi13aGl0ZSk7XFxuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcbn1cXG5cXG4ubG9nbyB7XFxuICAgIGNvbG9yOiB2YXIoLS1jbHItbWFyb29uKTtcXG4gICAgZm9udC1mYW1pbHk6ICdOb3JpY2FuJywgc2VyaWY7XFxufVxcblxcbi8qIEhlYWRlciAqL1xcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWluLWhlaWdodDogdmFyKC0taC1oZWFkZXIpO1xcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XFxufVxcblxcbi5oZWFkZXJfX2NvbnRhaW5lciB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IHZhcigtLXctcGFnZSk7XFxufVxcblxcbi5oZWFkZXJfX2xvZ28ge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5oZWFkZXJfX25hdiB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxuLm5hdl9fbGluayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMjUwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5uYXZfX2xpbms6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tY2xyLWJyb3duKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubmF2X19saW5rLWFjdGl2ZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1jbHItbWFyb29uKTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWluLWhlaWdodDogY2FsYygxMDBzdmggLSB2YXIoLS1oLWhlYWRlcikpO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG4vKiBUcmFuc2l0aW9uICovXFxuLmhvbWUsXFxuLm1lbnUsXFxuLmFib3V0IHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSA1MDBtcyBlYXNlLWluO1xcbn1cXG5cXG4udmlzaWJsZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi8qIEhvbWUgKi9cXG5cXG4uaG9tZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogNnJlbTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyO1xcbiAgICBwYWRkaW5nOiAzcmVtIDA7XFxuICAgIHdpZHRoOiB2YXIoLS13LXBhZ2UpO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwdmg7XFxufVxcblxcbi5ob21lX19jb250ZW50IHtcXG4gICAgY29sb3I6IHZhcigtLWNsci1kYXJrLWJyb3duKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCBtaW4tY29udGVudCk7XFxuICAgIG1hcmdpbi10b3A6IDFlbTtcXG59XFxuXFxuLmhvbWVfX3RhZ2xpbmUge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XFxufVxcblxcbi5ob21lX19kZXNjIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4uaG9tZV9fY3RhIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWRhcmstYnJvd24pO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jbHItZGFyay1icm93bik7XFxuICAgIGNvbG9yOiB2YXIoLS1jbHItb2ZmLXdoaXRlKTtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgICBwYWRkaW5nOiAwLjI1ZW0gMS4xNWVtO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5ob21lX19jdGE6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItb2ZmLXdoaXRlKTtcXG4gICAgY29sb3I6IHZhcigtLWNsci1kYXJrLWJyb3duKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaG9tZV9faW1nIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNTAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5ob21lX19pbWc6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDI1KTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgICAuaG9tZSB7XFxuICAgICAgICBnYXA6IDA7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xcbiAgICB9XFxuXFxuICAgIC5ob21lX19jb250ZW50IHtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAuaG9tZV9fY3RhIHtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5ob21lX19pbWcge1xcbiAgICAgICAgZ3JpZC1hcmVhOiAxIC8gMTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICAgICAgICBwYWRkaW5nOiAwIDRyZW07XFxuICAgIH1cXG59XFxuXFxuLyogTWVudSAqL1xcblxcbi5tZW51IHtcXG4gICAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuLm1lbnVfX2ZpbGlwaW5vLFxcbi5tZW51X19jbGFzc2ljIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNnJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubWVudV9faGVhZGVyIHtcXG4gICAgY29sb3I6IHZhcigtLWNsci1tYXJvb24pO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbi5tZW51X19jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubWVudV9fY2FyZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1vZmYtbGlnaHQtd2hpdGUpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBlYXNlLWluLW91dDtcXG4gICAgd2lkdGg6IDI2MHB4O1xcbn1cXG5cXG4ubWVudV9fY2FyZDpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XFxufVxcblxcbi5tZW51X19jYXJkLWltZyB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1kYXJrLWJyb3duKTtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgY29sb3I6IHZhcigtLWNsci1vZmYtbGlnaHQtd2hpdGUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5tZW51X19jYXJkLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XFxufVxcblxcbi5tZW51X19jYXJkLWhlYWRlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1jbHItZGFyay1icm93bik7XFxuICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcXG59XFxuXFxuLm1lbnVfX2NhcmQtZGVzYyB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qIEFib3V0ICovXFxuXFxuLmFib3V0IHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbiAgICB3aWR0aDogdmFyKC0tdy1wYWdlKTtcXG59XFxuXFxuLmFib3V0LXVzLFxcbi5zdG9yeSxcXG4ubWlzc2lvbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogM3JlbTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG4gICAganVzdGlmeS1zZWxmOiBsZWZ0O1xcbn1cXG5cXG4uc3Rvcnkge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbn1cXG5cXG4uc3RvcnkgPiAuYWJvdXRfX2hlYWRlciB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDI7XFxufVxcblxcbi5hYm91dF9faGVhZGVyIHtcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICAgIGNvbG9yOiB2YXIoLS1jbHItZGFyay1icm93bik7XFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmFib3V0LXVzID4gLmFib3V0X19oZWFkZXI6OmJlZm9yZSxcXG4uc3RvcnkgPiAuYWJvdXRfX2hlYWRlcjo6YmVmb3JlLFxcbi5taXNzaW9uID4gLmFib3V0X19oZWFkZXI6OmJlZm9yZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1saWdodC1icm93bik7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgbGVmdDogLTUlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNjAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgei1pbmRleDogLTE7XFxufVxcblxcbi5zdG9yeSA+IC5hYm91dF9faGVhZGVyOjpiZWZvcmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItbGlnaHQtbWFyb29uKTtcXG4gICAgbGVmdDogNSU7XFxufVxcblxcbi5hYm91dF9fYm9keSB7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBtYXgtd2lkdGg6IDcwY2g7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG4gICAgLmFib3V0IHtcXG4gICAgICAgIGdhcDogNHJlbTtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5hYm91dC11cyxcXG4gICAgLnN0b3J5LFxcbiAgICAubWlzc2lvbiB7XFxuICAgICAgICBnYXA6IDJyZW07XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgfVxcblxcbiAgICAuc3RvcnkgPiAuYWJvdXRfX2hlYWRlciB7XFxuICAgICAgICBncmlkLWFyZWE6IDEgLyAxO1xcbiAgICB9XFxuXFxuICAgIC5zdG9yeSA+IC5hYm91dF9faGVhZGVyOjpiZWZvcmUge1xcbiAgICAgICAgbGVmdDogLTUlO1xcbiAgICB9XFxufVxcblxcbi8qIEZvb3RlciAqL1xcblxcbi5mb290ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItZGFyay1icm93bik7XFxuICAgIGNvbG9yOiB2YXIoLS1jbHItb2ZmLXdoaXRlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDNyZW0gMnJlbTtcXG59XFxuXFxuLmZvb3Rlcl9fY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgICdsb2dvIGNvbnRhY3QnXFxuICAgICAgICAnbG9nbyBjb3B5cmlnaHQnO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xcbiAgICByb3ctZ2FwOiAycmVtO1xcbiAgICB3aWR0aDogdmFyKC0tdy1wYWdlKTtcXG59XFxuXFxuLmZvb3Rlcl9fbG9nbyB7XFxuICAgIGNvbG9yOiB2YXIoLS1jbHItb2ZmLXdoaXRlKTtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGdyaWQtYXJlYTogbG9nbztcXG59XFxuXFxuLmZvb3Rlcl9fY29udGFjdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXJlYTogY29udGFjdDtcXG4gICAgcm93LWdhcDogMXJlbTtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi5mb290ZXJfX3Bob25lIHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi5mb290ZXJfX2FkZHJlc3Mge1xcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi5mb290ZXJfX2NvcHlyaWdodCB7XFxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gICAgZ3JpZC1hcmVhOiBjb3B5cmlnaHQ7XFxuICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0KCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhYm91dCcpO1xuXG4gICAgY29uc3QgYWJvdXRVc1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgYWJvdXRVc1NlY3Rpb24uY2xhc3NMaXN0LmFkZCgnYWJvdXQtdXMnKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRVc1NlY3Rpb24pO1xuXG4gICAgY29uc3QgYWJvdXRVc0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgYWJvdXRVc0hlYWRlci5jbGFzc0xpc3QuYWRkKCdhYm91dF9faGVhZGVyJyk7XG4gICAgYWJvdXRVc0hlYWRlci50ZXh0Q29udGVudCA9ICdBYm91dCBVcyc7XG4gICAgYWJvdXRVc1NlY3Rpb24uYXBwZW5kQ2hpbGQoYWJvdXRVc0hlYWRlcik7XG5cbiAgICBjb25zdCBhYm91dFVzQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhYm91dFVzQm9keS5jbGFzc0xpc3QuYWRkKCdhYm91dF9fYm9keScpO1xuICAgIGFib3V0VXNCb2R5LnRleHRDb250ZW50ID0gYFdlbGNvbWUgdG8gTGEgRmlsaXBpbmEsIHdoZXJlIEZpbGlwaW5vIGZsYXZvciBtZWV0cyBjbGFzc2ljIHBpenphIHBlcmZlY3Rpb24hIEVzdGFibGlzaGVkIGluIDIwMjQsIG91ciBwaXp6ZXJpYSBpcyBtb3JlIHRoYW4ganVzdCBhIHBsYWNlIHRvIGVhdOKAlGl0J3MgYSBjZWxlYnJhdGlvbiBvZiB0aGUgdmlicmFudCBmdXNpb24gb2YgRmlsaXBpbm8gY3Vpc2luZSBhbmQgdHJhZGl0aW9uYWwgcGl6emEuYDtcbiAgICBhYm91dFVzU2VjdGlvbi5hcHBlbmRDaGlsZChhYm91dFVzQm9keSk7XG5cbiAgICBjb25zdCBvdXJTdG9yeVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgb3VyU3RvcnlTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3N0b3J5Jyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG91clN0b3J5U2VjdGlvbik7XG5cbiAgICBjb25zdCBvdXJTdG9yeUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgb3VyU3RvcnlIZWFkZXIuY2xhc3NMaXN0LmFkZCgnYWJvdXRfX2hlYWRlcicpO1xuICAgIG91clN0b3J5SGVhZGVyLnRleHRDb250ZW50ID0gJ091ciBTdG9yeSc7XG4gICAgb3VyU3RvcnlTZWN0aW9uLmFwcGVuZENoaWxkKG91clN0b3J5SGVhZGVyKTtcblxuICAgIGNvbnN0IG91clN0b3J5Qm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBvdXJTdG9yeUJvZHkuY2xhc3NMaXN0LmFkZCgnYWJvdXRfX2JvZHknKTtcbiAgICBvdXJTdG9yeUJvZHkudGV4dENvbnRlbnQgPSBgTGEgRmlsaXBpbmEgd2FzIGJvcm4gb3V0IG9mIGEgbG92ZSBmb3IgYm90aCBGaWxpcGlubyBjdWxpbmFyeSBoZXJpdGFnZSBhbmQgdGhlIHRpbWVsZXNzIGFwcGVhbCBvZiBwaXp6YS4gT3VyIGpvdXJuZXkgYmVnYW4gd2l0aCBhIHNpbXBsZSBpZGVhOiB0byBjcmVhdGUgYSBkaW5pbmcgZXhwZXJpZW5jZSB0aGF0IGJlYXV0aWZ1bGx5IG1hcnJpZXMgdGhlIHJpY2gsIGRpdmVyc2UgZmxhdm9ycyBvZiB0aGUgUGhpbGlwcGluZXMgd2l0aCB0aGUgYmVsb3ZlZCBjb21mb3J0IG9mIHBpenphLiBBcyBhIG5ldyBhZGRpdGlvbiB0byB0aGUgY3VsaW5hcnkgc2NlbmUsIHdlIGFyZSBwYXNzaW9uYXRlIGFib3V0IGNyYWZ0aW5nIHVuaXF1ZSwgbW91dGh3YXRlcmluZyBkaXNoZXMgdGhhdCByZWZsZWN0IG91ciBoZXJpdGFnZSBhbmQgb3VyIGRlZGljYXRpb24gdG8gZ3JlYXQgZm9vZC5gO1xuICAgIG91clN0b3J5U2VjdGlvbi5hcHBlbmRDaGlsZChvdXJTdG9yeUJvZHkpO1xuXG4gICAgY29uc3Qgb3VyTWlzc2lvblNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgb3VyTWlzc2lvblNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnbWlzc2lvbicpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChvdXJNaXNzaW9uU2VjdGlvbik7XG5cbiAgICBjb25zdCBvdXJNaXNzaW9uSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBvdXJNaXNzaW9uSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2Fib3V0X19oZWFkZXInKTtcbiAgICBvdXJNaXNzaW9uSGVhZGVyLnRleHRDb250ZW50ID0gJ091ciBNaXNzaW9uJztcbiAgICBvdXJNaXNzaW9uU2VjdGlvbi5hcHBlbmRDaGlsZChvdXJNaXNzaW9uSGVhZGVyKTtcblxuICAgIGNvbnN0IG91ck1pc3Npb25Cb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG91ck1pc3Npb25Cb2R5LmNsYXNzTGlzdC5hZGQoJ2Fib3V0X19ib2R5Jyk7XG4gICAgb3VyTWlzc2lvbkJvZHkudGV4dENvbnRlbnQgPSBgQXQgTGEgRmlsaXBpbmEsIG91ciBtaXNzaW9uIGlzIHRvIG9mZmVyIGEgY3VsaW5hcnkgZXhwZXJpZW5jZSB0aGF0IGRlbGlnaHRzIHRoZSBzZW5zZXMgYW5kIHdhcm1zIHRoZSBoZWFydC4gV2XigJlyZSBkZWRpY2F0ZWQgdG8gdXNpbmcgdGhlIGZyZXNoZXN0LCBsb2NhbGx5LXNvdXJjZWQgaW5ncmVkaWVudHMgdG8gY3JlYXRlIGRpc2hlcyB0aGF0IG5vdCBvbmx5IHRhc3RlIGFtYXppbmcgYnV0IGFsc28gdGVsbCBhIHN0b3J5IG9mIHRyYWRpdGlvbiBhbmQgaW5ub3ZhdGlvbi4gRnJvbSBvdXIgc2lnbmF0dXJlIHBpenphcyB0b3BwZWQgd2l0aCBGaWxpcGlubyBmYXZvcml0ZXMgdG8gb3VyIGhhbmRjcmFmdGVkIHNpZGVzIGFuZCBkZXNzZXJ0cywgZXZlcnkgYml0ZSBpcyBhIGpvdXJuZXkgdGhyb3VnaCB0aGUgcmljaCB0YXBlc3RyeSBvZiBvdXIgY3VsdHVyZS5gO1xuICAgIG91ck1pc3Npb25TZWN0aW9uLmFwcGVuZENoaWxkKG91ck1pc3Npb25Cb2R5KTtcblxuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgIH0sIDEwMCk7XG59XG4iLCJpbXBvcnQgcGl6emEgZnJvbSAnLi9waXp6YS5wbmcnO1xuaW1wb3J0IHsgbmF2TGlua0NsaWNrSGFuZGxlciB9IGZyb20gJy4vaW5kZXguanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaG9tZScpO1xuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2hvbWVfX2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IHRhZ2xpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHRhZ2xpbmUuY2xhc3NMaXN0LmFkZCgnaG9tZV9fdGFnbGluZScpO1xuICAgIHRhZ2xpbmUudGV4dENvbnRlbnQgPSAnU2F2b3IgdGhlIEZ1c2lvbiBvZiBGaWxpcGlubyBGbGFpciBhbmQgQ2xhc3NpYyBQaXp6YS4nO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFnbGluZSk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdob21lX19kZXNjJyk7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPVxuICAgICAgICAnQXQgTGEgRmlsaXBpbmEsIGVhY2ggcGl6emEgaXMgYSBkZWxpY2lvdXMgYmxlbmQgb2YgdHJhZGl0aW9uYWwgRmlsaXBpbm8gZmxhdm9ycyBhbmQgY2xhc3NpYyBwaXp6YSBjcmFmdHNtYW5zaGlwLiBCYWtlZCB0byBwZXJmZWN0aW9uIGFuZCBtYWRlIHdpdGggbG92ZSwgb3VyIHBpenphcyBjZWxlYnJhdGUgdGhlIHJpY2gsIHZpYnJhbnQgdGFzdGVzIG9mIHRoZSBQaGlsaXBwaW5lcy4gRXhwZXJpZW5jZSBhIHNsaWNlIG9mIGN1bGluYXJ5IHBhc3Npb27igJR3ZWxjb21lIHRvIExhIEZpbGlwaW5hISc7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgICBjb25zdCBjdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjdGEuY2xhc3NMaXN0LmFkZCgnaG9tZV9fY3RhJyk7XG4gICAgY3RhLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsICduYXYtbWVudScpO1xuICAgIGN0YS50ZXh0Q29udGVudCA9ICdTZWUgTWVudSc7XG4gICAgY3RhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmF2TGlua0NsaWNrSGFuZGxlcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjdGEpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKCdob21lX19pbWcnKTtcbiAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIHBpenphKTtcbiAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdsYXJnZSBwaXp6YScpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZSk7XG5cbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICB9LCAxMDApO1xufVxuIiwiaW1wb3J0IEhvbWUgZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCBNZW51IGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9hYm91dC5qcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuSG9tZSgpO1xuXG5jb25zdCByZWZyZXNoU2NyZWVuID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnRlbnQucmVwbGFjZUNoaWxkcmVuKCcnKTtcblxuICAgIGNvbnN0IG5hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdl9fbGluaycpO1xuICAgIG5hdkxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcbiAgICAgICAgbGluay5jbGFzc0xpc3QucmVtb3ZlKCduYXZfX2xpbmstYWN0aXZlJyk7XG4gICAgfSk7XG59O1xuXG5jb25zdCBuYXZIb21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdi1ob21lJyk7XG5jb25zdCBuYXZNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdi1tZW51Jyk7XG5jb25zdCBuYXZBYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXYtYWJvdXQnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIG5hdkxpbmtDbGlja0hhbmRsZXIoZSkge1xuICAgIHJlZnJlc2hTY3JlZW4oKTtcblxuICAgIGNvbnN0IHBhZ2UgPSBlLnRhcmdldC5pZCB8fCBlLnRhcmdldC5kYXRhc2V0LmlkO1xuXG4gICAgc3dpdGNoIChwYWdlKSB7XG4gICAgICAgIGNhc2UgJ25hdi1ob21lJzpcbiAgICAgICAgICAgIEhvbWUoKTtcbiAgICAgICAgICAgIG5hdkhvbWUuY2xhc3NMaXN0LmFkZCgnbmF2X19saW5rLWFjdGl2ZScpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ25hdi1tZW51JzpcbiAgICAgICAgICAgIE1lbnUoKTtcbiAgICAgICAgICAgIG5hdk1lbnUuY2xhc3NMaXN0LmFkZCgnbmF2X19saW5rLWFjdGl2ZScpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ25hdi1hYm91dCc6XG4gICAgICAgICAgICBBYm91dCgpO1xuICAgICAgICAgICAgbmF2QWJvdXQuY2xhc3NMaXN0LmFkZCgnbmF2X19saW5rLWFjdGl2ZScpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuXG5uYXZIb21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmF2TGlua0NsaWNrSGFuZGxlcik7XG5uYXZNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmF2TGlua0NsaWNrSGFuZGxlcik7XG5uYXZBYm91dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5hdkxpbmtDbGlja0hhbmRsZXIpO1xuXG5jb25zdCBjb3B5cmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyX19jb3B5cmlnaHQnKTtcbmNvbnN0IGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuY29weXJpZ2h0LnRleHRDb250ZW50ID0gYMKpICR7Y3VycmVudFllYXJ9IExhIEZpbGlwaW5hLiBBbGwgUmlnaHRzIFJlc2VydmVkYDtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbnUoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcblxuICAgIGNvbnN0IGZpbGlwaW5vU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZpbGlwaW5vU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdtZW51X19maWxpcGlubycpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmaWxpcGlub1NlY3Rpb24pO1xuXG4gICAgY29uc3QgZmlsaXBpbm9IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGZpbGlwaW5vSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2hlYWRlcicpO1xuICAgIGZpbGlwaW5vSGVhZGVyLnRleHRDb250ZW50ID0gJ0ZpbGlwaW5vIFN0eWxlJztcbiAgICBmaWxpcGlub1NlY3Rpb24uYXBwZW5kQ2hpbGQoZmlsaXBpbm9IZWFkZXIpO1xuXG4gICAgY29uc3QgZmlsaXBpbm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmaWxpcGlub0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51X19jb250YWluZXInKTtcbiAgICBmaWxpcGlub1NlY3Rpb24uYXBwZW5kQ2hpbGQoZmlsaXBpbm9Db250YWluZXIpO1xuXG4gICAgY29uc3QgZmlsaXBpbm9NZW51ID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBmbGF2b3I6ICdBZG9ibyBMb2NvJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAgICdUZW5kZXIgYWRvYm8tbWFyaW5hdGVkIGNoaWNrZW4gb3IgcG9yayB3aXRoIGNhcmFtZWxpemVkIG9uaW9ucywgYmVsbCBwZXBwZXJzLCBhbmQgYmF5IGxlYWYgY2hlZXNlIGluIGEgdG9tYXRvIGJhc2Ugd2l0aCBzb3kgYW5kIHZpbmVnYXIuJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZmxhdm9yOiAnTG9uZ2dhbmlzYSBEZWxpZ2h0JyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAgICdTd2VldCBsb25nZ2FuaXNhIHNhdXNhZ2Ugd2l0aCBwaW5lYXBwbGUgYW5kIG1venphcmVsbGEsIGluIGEgdG9tYXRvIHNhdWNlIHdpdGggZ2FybGljIGFuZCBnaW5nZXIuJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZmxhdm9yOiAnVGFwYSBUZW1wdGF0aW9ucycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0ZpbGlwaW5vIHRhcGEgd2l0aCBvbmlvbnMgYW5kIHRvbWF0b2VzIG9uIGEgdG9tYXRvIGJhc2Ugd2l0aCBzb3ksIHRvcHBlZCB3aXRoIHNjYWxsaW9ucy4nLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBmbGF2b3I6ICdQaW5veSBCQlEnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgICAgJ1N3ZWV0IGFuZCBzbW9reSBCQlEgcG9yayB3aXRoIHJlZCBvbmlvbnMgYW5kIGNpbGFudHJvLCBvbiBhIHBpenphIGNydXN0IHdpdGggdGFuZ3kgQkJRIHNhdWNlLicsXG4gICAgICAgIH0sXG4gICAgXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGZpbGlwaW5vQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmaWxpcGlub0NhcmQuY2xhc3NMaXN0LmFkZCgnbWVudV9fY2FyZCcpO1xuICAgICAgICBmaWxpcGlub0NvbnRhaW5lci5hcHBlbmRDaGlsZChmaWxpcGlub0NhcmQpO1xuXG4gICAgICAgIGNvbnN0IGZpbGlwaW5vQ2FyZEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZpbGlwaW5vQ2FyZEltYWdlLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2NhcmQtaW1nJyk7XG4gICAgICAgIGZpbGlwaW5vQ2FyZEltYWdlLnRleHRDb250ZW50ID0gJ1RvIEJlIFVwZGF0ZWQnO1xuICAgICAgICBmaWxpcGlub0NhcmQuYXBwZW5kQ2hpbGQoZmlsaXBpbm9DYXJkSW1hZ2UpO1xuXG4gICAgICAgIGNvbnN0IGZpbGlwaW5vQ2FyZENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZmlsaXBpbm9DYXJkQ29udGVudC5jbGFzc0xpc3QuYWRkKCdtZW51X19jYXJkLWNvbnRlbnQnKTtcbiAgICAgICAgZmlsaXBpbm9DYXJkLmFwcGVuZENoaWxkKGZpbGlwaW5vQ2FyZENvbnRlbnQpO1xuXG4gICAgICAgIGNvbnN0IGZpbGlwaW5vQ2FyZEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGZpbGlwaW5vQ2FyZEhlYWRlci5jbGFzc0xpc3QuYWRkKCdtZW51X19jYXJkLWhlYWRlcicpO1xuICAgICAgICBmaWxpcGlub0NhcmRIZWFkZXIudGV4dENvbnRlbnQgPSBmaWxpcGlub01lbnVbaV0uZmxhdm9yO1xuICAgICAgICBmaWxpcGlub0NhcmRDb250ZW50LmFwcGVuZENoaWxkKGZpbGlwaW5vQ2FyZEhlYWRlcik7XG5cbiAgICAgICAgY29uc3QgZmlsaXBpbm9DYXJkRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZmlsaXBpbm9DYXJkRGVzYy5jbGFzc0xpc3QuYWRkKCdtZW51X19jYXJkLWRlc2MnKTtcbiAgICAgICAgZmlsaXBpbm9DYXJkRGVzYy50ZXh0Q29udGVudCA9IGZpbGlwaW5vTWVudVtpXS5kZXNjcmlwdGlvbjtcbiAgICAgICAgZmlsaXBpbm9DYXJkQ29udGVudC5hcHBlbmRDaGlsZChmaWxpcGlub0NhcmREZXNjKTtcbiAgICB9XG5cbiAgICBjb25zdCBjbGFzc2ljU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNsYXNzaWNTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2NsYXNzaWMnKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2xhc3NpY1NlY3Rpb24pO1xuXG4gICAgY29uc3QgY2xhc3NpY0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY2xhc3NpY0hlYWRlci5jbGFzc0xpc3QuYWRkKCdtZW51X19oZWFkZXInKTtcbiAgICBjbGFzc2ljSGVhZGVyLnRleHRDb250ZW50ID0gJ0NsYXNzaWMgU3R5bGUnO1xuICAgIGNsYXNzaWNTZWN0aW9uLmFwcGVuZENoaWxkKGNsYXNzaWNIZWFkZXIpO1xuXG4gICAgY29uc3QgY2xhc3NpY0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNsYXNzaWNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudV9fY29udGFpbmVyJyk7XG4gICAgY2xhc3NpY1NlY3Rpb24uYXBwZW5kQ2hpbGQoY2xhc3NpY0NvbnRhaW5lcik7XG5cbiAgICBjb25zdCBjbGFzc2ljTWVudSA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgZmxhdm9yOiAnSGF3YWlpYW4nLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdIYW0gYW5kIHBpbmVhcHBsZSB3aXRoIG1lbHRlZCBtb3p6YXJlbGxhIGFuZCB0YW5neSB0b21hdG8gc2F1Y2UgZm9yIGEgdHJvcGljYWwgdHdpc3QuJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZmxhdm9yOiAnUGVwcGVyb25pJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAgICdTcGljeSBwZXBwZXJvbmkgd2l0aCBtb3p6YXJlbGxhIGFuZCByaWNoIHRvbWF0byBzYXVjZSwgb2ZmZXJpbmcgYm9sZCBmbGF2b3JzIGFuZCBjcmlzcHkgZWRnZXMuJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZmxhdm9yOiAnTWVhdCBPdmVybG9hZCcsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0EgaGVhcnR5IG1peCBvZiBwZXBwZXJvbmksIHNhdXNhZ2UsIGhhbSwgYW5kIGJhY29uLCB3aXRoIG1venphcmVsbGEgYW5kIHJvYnVzdCB0b21hdG8gc2F1Y2UuJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZmxhdm9yOiAnRm91ciBDaGVlc2UnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdBIGJsZW5kIG9mIG1venphcmVsbGEsIGNoZWRkYXIsIFBhcm1lc2FuLCBhbmQgR29yZ29uem9sYSB3aXRoIGdhcmxpYyBhbmQgaGVyYnMuJyxcbiAgICAgICAgfSxcbiAgICBdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgY29uc3QgY2xhc3NpY0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2xhc3NpY0NhcmQuY2xhc3NMaXN0LmFkZCgnbWVudV9fY2FyZCcpO1xuICAgICAgICBjbGFzc2ljQ29udGFpbmVyLmFwcGVuZENoaWxkKGNsYXNzaWNDYXJkKTtcblxuICAgICAgICBjb25zdCBjbGFzc2ljQ2FyZEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNsYXNzaWNDYXJkSW1hZ2UuY2xhc3NMaXN0LmFkZCgnbWVudV9fY2FyZC1pbWcnKTtcbiAgICAgICAgY2xhc3NpY0NhcmRJbWFnZS50ZXh0Q29udGVudCA9ICdUbyBCZSBVcGRhdGVkJztcbiAgICAgICAgY2xhc3NpY0NhcmQuYXBwZW5kQ2hpbGQoY2xhc3NpY0NhcmRJbWFnZSk7XG5cbiAgICAgICAgY29uc3QgY2xhc3NpY0NhcmRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNsYXNzaWNDYXJkQ29udGVudC5jbGFzc0xpc3QuYWRkKCdtZW51X19jYXJkLWNvbnRlbnQnKTtcbiAgICAgICAgY2xhc3NpY0NhcmQuYXBwZW5kQ2hpbGQoY2xhc3NpY0NhcmRDb250ZW50KTtcblxuICAgICAgICBjb25zdCBjbGFzc2ljQ2FyZEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGNsYXNzaWNDYXJkSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2NhcmQtaGVhZGVyJyk7XG4gICAgICAgIGNsYXNzaWNDYXJkSGVhZGVyLnRleHRDb250ZW50ID0gY2xhc3NpY01lbnVbaV0uZmxhdm9yO1xuICAgICAgICBjbGFzc2ljQ2FyZENvbnRlbnQuYXBwZW5kQ2hpbGQoY2xhc3NpY0NhcmRIZWFkZXIpO1xuXG4gICAgICAgIGNvbnN0IGNsYXNzaWNDYXJkRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY2xhc3NpY0NhcmREZXNjLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2NhcmQtZGVzYycpO1xuICAgICAgICBjbGFzc2ljQ2FyZERlc2MudGV4dENvbnRlbnQgPSBjbGFzc2ljTWVudVtpXS5kZXNjcmlwdGlvbjtcbiAgICAgICAgY2xhc3NpY0NhcmRDb250ZW50LmFwcGVuZENoaWxkKGNsYXNzaWNDYXJkRGVzYyk7XG4gICAgfVxuXG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgfSwgMTAwKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==