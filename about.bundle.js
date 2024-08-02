"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["about"],{

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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/about.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0KCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhYm91dCcpO1xuXG4gICAgY29uc3QgYWJvdXRVc1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgYWJvdXRVc1NlY3Rpb24uY2xhc3NMaXN0LmFkZCgnYWJvdXQtdXMnKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRVc1NlY3Rpb24pO1xuXG4gICAgY29uc3QgYWJvdXRVc0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgYWJvdXRVc0hlYWRlci5jbGFzc0xpc3QuYWRkKCdhYm91dF9faGVhZGVyJyk7XG4gICAgYWJvdXRVc0hlYWRlci50ZXh0Q29udGVudCA9ICdBYm91dCBVcyc7XG4gICAgYWJvdXRVc1NlY3Rpb24uYXBwZW5kQ2hpbGQoYWJvdXRVc0hlYWRlcik7XG5cbiAgICBjb25zdCBhYm91dFVzQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhYm91dFVzQm9keS5jbGFzc0xpc3QuYWRkKCdhYm91dF9fYm9keScpO1xuICAgIGFib3V0VXNCb2R5LnRleHRDb250ZW50ID0gYFdlbGNvbWUgdG8gTGEgRmlsaXBpbmEsIHdoZXJlIEZpbGlwaW5vIGZsYXZvciBtZWV0cyBjbGFzc2ljIHBpenphIHBlcmZlY3Rpb24hIEVzdGFibGlzaGVkIGluIDIwMjQsIG91ciBwaXp6ZXJpYSBpcyBtb3JlIHRoYW4ganVzdCBhIHBsYWNlIHRvIGVhdOKAlGl0J3MgYSBjZWxlYnJhdGlvbiBvZiB0aGUgdmlicmFudCBmdXNpb24gb2YgRmlsaXBpbm8gY3Vpc2luZSBhbmQgdHJhZGl0aW9uYWwgcGl6emEuYDtcbiAgICBhYm91dFVzU2VjdGlvbi5hcHBlbmRDaGlsZChhYm91dFVzQm9keSk7XG5cbiAgICBjb25zdCBvdXJTdG9yeVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgb3VyU3RvcnlTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3N0b3J5Jyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG91clN0b3J5U2VjdGlvbik7XG5cbiAgICBjb25zdCBvdXJTdG9yeUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgb3VyU3RvcnlIZWFkZXIuY2xhc3NMaXN0LmFkZCgnYWJvdXRfX2hlYWRlcicpO1xuICAgIG91clN0b3J5SGVhZGVyLnRleHRDb250ZW50ID0gJ091ciBTdG9yeSc7XG4gICAgb3VyU3RvcnlTZWN0aW9uLmFwcGVuZENoaWxkKG91clN0b3J5SGVhZGVyKTtcblxuICAgIGNvbnN0IG91clN0b3J5Qm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBvdXJTdG9yeUJvZHkuY2xhc3NMaXN0LmFkZCgnYWJvdXRfX2JvZHknKTtcbiAgICBvdXJTdG9yeUJvZHkudGV4dENvbnRlbnQgPSBgTGEgRmlsaXBpbmEgd2FzIGJvcm4gb3V0IG9mIGEgbG92ZSBmb3IgYm90aCBGaWxpcGlubyBjdWxpbmFyeSBoZXJpdGFnZSBhbmQgdGhlIHRpbWVsZXNzIGFwcGVhbCBvZiBwaXp6YS4gT3VyIGpvdXJuZXkgYmVnYW4gd2l0aCBhIHNpbXBsZSBpZGVhOiB0byBjcmVhdGUgYSBkaW5pbmcgZXhwZXJpZW5jZSB0aGF0IGJlYXV0aWZ1bGx5IG1hcnJpZXMgdGhlIHJpY2gsIGRpdmVyc2UgZmxhdm9ycyBvZiB0aGUgUGhpbGlwcGluZXMgd2l0aCB0aGUgYmVsb3ZlZCBjb21mb3J0IG9mIHBpenphLiBBcyBhIG5ldyBhZGRpdGlvbiB0byB0aGUgY3VsaW5hcnkgc2NlbmUsIHdlIGFyZSBwYXNzaW9uYXRlIGFib3V0IGNyYWZ0aW5nIHVuaXF1ZSwgbW91dGh3YXRlcmluZyBkaXNoZXMgdGhhdCByZWZsZWN0IG91ciBoZXJpdGFnZSBhbmQgb3VyIGRlZGljYXRpb24gdG8gZ3JlYXQgZm9vZC5gO1xuICAgIG91clN0b3J5U2VjdGlvbi5hcHBlbmRDaGlsZChvdXJTdG9yeUJvZHkpO1xuXG4gICAgY29uc3Qgb3VyTWlzc2lvblNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgb3VyTWlzc2lvblNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnbWlzc2lvbicpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChvdXJNaXNzaW9uU2VjdGlvbik7XG5cbiAgICBjb25zdCBvdXJNaXNzaW9uSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBvdXJNaXNzaW9uSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2Fib3V0X19oZWFkZXInKTtcbiAgICBvdXJNaXNzaW9uSGVhZGVyLnRleHRDb250ZW50ID0gJ091ciBNaXNzaW9uJztcbiAgICBvdXJNaXNzaW9uU2VjdGlvbi5hcHBlbmRDaGlsZChvdXJNaXNzaW9uSGVhZGVyKTtcblxuICAgIGNvbnN0IG91ck1pc3Npb25Cb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG91ck1pc3Npb25Cb2R5LmNsYXNzTGlzdC5hZGQoJ2Fib3V0X19ib2R5Jyk7XG4gICAgb3VyTWlzc2lvbkJvZHkudGV4dENvbnRlbnQgPSBgQXQgTGEgRmlsaXBpbmEsIG91ciBtaXNzaW9uIGlzIHRvIG9mZmVyIGEgY3VsaW5hcnkgZXhwZXJpZW5jZSB0aGF0IGRlbGlnaHRzIHRoZSBzZW5zZXMgYW5kIHdhcm1zIHRoZSBoZWFydC4gV2XigJlyZSBkZWRpY2F0ZWQgdG8gdXNpbmcgdGhlIGZyZXNoZXN0LCBsb2NhbGx5LXNvdXJjZWQgaW5ncmVkaWVudHMgdG8gY3JlYXRlIGRpc2hlcyB0aGF0IG5vdCBvbmx5IHRhc3RlIGFtYXppbmcgYnV0IGFsc28gdGVsbCBhIHN0b3J5IG9mIHRyYWRpdGlvbiBhbmQgaW5ub3ZhdGlvbi4gRnJvbSBvdXIgc2lnbmF0dXJlIHBpenphcyB0b3BwZWQgd2l0aCBGaWxpcGlubyBmYXZvcml0ZXMgdG8gb3VyIGhhbmRjcmFmdGVkIHNpZGVzIGFuZCBkZXNzZXJ0cywgZXZlcnkgYml0ZSBpcyBhIGpvdXJuZXkgdGhyb3VnaCB0aGUgcmljaCB0YXBlc3RyeSBvZiBvdXIgY3VsdHVyZS5gO1xuICAgIG91ck1pc3Npb25TZWN0aW9uLmFwcGVuZENoaWxkKG91ck1pc3Npb25Cb2R5KTtcblxuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgIH0sIDEwMCk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=