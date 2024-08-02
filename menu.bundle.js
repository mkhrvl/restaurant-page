"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["menu"],{

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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menu.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUEsb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTCIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbnUoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcblxuICAgIGNvbnN0IGZpbGlwaW5vU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZpbGlwaW5vU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdtZW51X19maWxpcGlubycpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmaWxpcGlub1NlY3Rpb24pO1xuXG4gICAgY29uc3QgZmlsaXBpbm9IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGZpbGlwaW5vSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2hlYWRlcicpO1xuICAgIGZpbGlwaW5vSGVhZGVyLnRleHRDb250ZW50ID0gJ0ZpbGlwaW5vIFN0eWxlJztcbiAgICBmaWxpcGlub1NlY3Rpb24uYXBwZW5kQ2hpbGQoZmlsaXBpbm9IZWFkZXIpO1xuXG4gICAgY29uc3QgZmlsaXBpbm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmaWxpcGlub0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51X19jb250YWluZXInKTtcbiAgICBmaWxpcGlub1NlY3Rpb24uYXBwZW5kQ2hpbGQoZmlsaXBpbm9Db250YWluZXIpO1xuXG4gICAgY29uc3QgZmlsaXBpbm9NZW51ID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBmbGF2b3I6ICdBZG9ibyBMb2NvJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAgICdUZW5kZXIgYWRvYm8tbWFyaW5hdGVkIGNoaWNrZW4gb3IgcG9yayB3aXRoIGNhcmFtZWxpemVkIG9uaW9ucywgYmVsbCBwZXBwZXJzLCBhbmQgYmF5IGxlYWYgY2hlZXNlIGluIGEgdG9tYXRvIGJhc2Ugd2l0aCBzb3kgYW5kIHZpbmVnYXIuJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZmxhdm9yOiAnTG9uZ2dhbmlzYSBEZWxpZ2h0JyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAgICdTd2VldCBsb25nZ2FuaXNhIHNhdXNhZ2Ugd2l0aCBwaW5lYXBwbGUgYW5kIG1venphcmVsbGEsIGluIGEgdG9tYXRvIHNhdWNlIHdpdGggZ2FybGljIGFuZCBnaW5nZXIuJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZmxhdm9yOiAnVGFwYSBUZW1wdGF0aW9ucycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0ZpbGlwaW5vIHRhcGEgd2l0aCBvbmlvbnMgYW5kIHRvbWF0b2VzIG9uIGEgdG9tYXRvIGJhc2Ugd2l0aCBzb3ksIHRvcHBlZCB3aXRoIHNjYWxsaW9ucy4nLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBmbGF2b3I6ICdQaW5veSBCQlEnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgICAgJ1N3ZWV0IGFuZCBzbW9reSBCQlEgcG9yayB3aXRoIHJlZCBvbmlvbnMgYW5kIGNpbGFudHJvLCBvbiBhIHBpenphIGNydXN0IHdpdGggdGFuZ3kgQkJRIHNhdWNlLicsXG4gICAgICAgIH0sXG4gICAgXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGZpbGlwaW5vQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmaWxpcGlub0NhcmQuY2xhc3NMaXN0LmFkZCgnbWVudV9fY2FyZCcpO1xuICAgICAgICBmaWxpcGlub0NvbnRhaW5lci5hcHBlbmRDaGlsZChmaWxpcGlub0NhcmQpO1xuXG4gICAgICAgIGNvbnN0IGZpbGlwaW5vQ2FyZEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZpbGlwaW5vQ2FyZEltYWdlLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2NhcmQtaW1nJyk7XG4gICAgICAgIGZpbGlwaW5vQ2FyZEltYWdlLnRleHRDb250ZW50ID0gJ1RvIEJlIFVwZGF0ZWQnO1xuICAgICAgICBmaWxpcGlub0NhcmQuYXBwZW5kQ2hpbGQoZmlsaXBpbm9DYXJkSW1hZ2UpO1xuXG4gICAgICAgIGNvbnN0IGZpbGlwaW5vQ2FyZENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZmlsaXBpbm9DYXJkQ29udGVudC5jbGFzc0xpc3QuYWRkKCdtZW51X19jYXJkLWNvbnRlbnQnKTtcbiAgICAgICAgZmlsaXBpbm9DYXJkLmFwcGVuZENoaWxkKGZpbGlwaW5vQ2FyZENvbnRlbnQpO1xuXG4gICAgICAgIGNvbnN0IGZpbGlwaW5vQ2FyZEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGZpbGlwaW5vQ2FyZEhlYWRlci5jbGFzc0xpc3QuYWRkKCdtZW51X19jYXJkLWhlYWRlcicpO1xuICAgICAgICBmaWxpcGlub0NhcmRIZWFkZXIudGV4dENvbnRlbnQgPSBmaWxpcGlub01lbnVbaV0uZmxhdm9yO1xuICAgICAgICBmaWxpcGlub0NhcmRDb250ZW50LmFwcGVuZENoaWxkKGZpbGlwaW5vQ2FyZEhlYWRlcik7XG5cbiAgICAgICAgY29uc3QgZmlsaXBpbm9DYXJkRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZmlsaXBpbm9DYXJkRGVzYy5jbGFzc0xpc3QuYWRkKCdtZW51X19jYXJkLWRlc2MnKTtcbiAgICAgICAgZmlsaXBpbm9DYXJkRGVzYy50ZXh0Q29udGVudCA9IGZpbGlwaW5vTWVudVtpXS5kZXNjcmlwdGlvbjtcbiAgICAgICAgZmlsaXBpbm9DYXJkQ29udGVudC5hcHBlbmRDaGlsZChmaWxpcGlub0NhcmREZXNjKTtcbiAgICB9XG5cbiAgICBjb25zdCBjbGFzc2ljU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNsYXNzaWNTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2NsYXNzaWMnKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2xhc3NpY1NlY3Rpb24pO1xuXG4gICAgY29uc3QgY2xhc3NpY0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY2xhc3NpY0hlYWRlci5jbGFzc0xpc3QuYWRkKCdtZW51X19oZWFkZXInKTtcbiAgICBjbGFzc2ljSGVhZGVyLnRleHRDb250ZW50ID0gJ0NsYXNzaWMgU3R5bGUnO1xuICAgIGNsYXNzaWNTZWN0aW9uLmFwcGVuZENoaWxkKGNsYXNzaWNIZWFkZXIpO1xuXG4gICAgY29uc3QgY2xhc3NpY0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNsYXNzaWNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudV9fY29udGFpbmVyJyk7XG4gICAgY2xhc3NpY1NlY3Rpb24uYXBwZW5kQ2hpbGQoY2xhc3NpY0NvbnRhaW5lcik7XG5cbiAgICBjb25zdCBjbGFzc2ljTWVudSA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgZmxhdm9yOiAnSGF3YWlpYW4nLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdIYW0gYW5kIHBpbmVhcHBsZSB3aXRoIG1lbHRlZCBtb3p6YXJlbGxhIGFuZCB0YW5neSB0b21hdG8gc2F1Y2UgZm9yIGEgdHJvcGljYWwgdHdpc3QuJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZmxhdm9yOiAnUGVwcGVyb25pJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAgICdTcGljeSBwZXBwZXJvbmkgd2l0aCBtb3p6YXJlbGxhIGFuZCByaWNoIHRvbWF0byBzYXVjZSwgb2ZmZXJpbmcgYm9sZCBmbGF2b3JzIGFuZCBjcmlzcHkgZWRnZXMuJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZmxhdm9yOiAnTWVhdCBPdmVybG9hZCcsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0EgaGVhcnR5IG1peCBvZiBwZXBwZXJvbmksIHNhdXNhZ2UsIGhhbSwgYW5kIGJhY29uLCB3aXRoIG1venphcmVsbGEgYW5kIHJvYnVzdCB0b21hdG8gc2F1Y2UuJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZmxhdm9yOiAnRm91ciBDaGVlc2UnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdBIGJsZW5kIG9mIG1venphcmVsbGEsIGNoZWRkYXIsIFBhcm1lc2FuLCBhbmQgR29yZ29uem9sYSB3aXRoIGdhcmxpYyBhbmQgaGVyYnMuJyxcbiAgICAgICAgfSxcbiAgICBdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgY29uc3QgY2xhc3NpY0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2xhc3NpY0NhcmQuY2xhc3NMaXN0LmFkZCgnbWVudV9fY2FyZCcpO1xuICAgICAgICBjbGFzc2ljQ29udGFpbmVyLmFwcGVuZENoaWxkKGNsYXNzaWNDYXJkKTtcblxuICAgICAgICBjb25zdCBjbGFzc2ljQ2FyZEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNsYXNzaWNDYXJkSW1hZ2UuY2xhc3NMaXN0LmFkZCgnbWVudV9fY2FyZC1pbWcnKTtcbiAgICAgICAgY2xhc3NpY0NhcmRJbWFnZS50ZXh0Q29udGVudCA9ICdUbyBCZSBVcGRhdGVkJztcbiAgICAgICAgY2xhc3NpY0NhcmQuYXBwZW5kQ2hpbGQoY2xhc3NpY0NhcmRJbWFnZSk7XG5cbiAgICAgICAgY29uc3QgY2xhc3NpY0NhcmRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNsYXNzaWNDYXJkQ29udGVudC5jbGFzc0xpc3QuYWRkKCdtZW51X19jYXJkLWNvbnRlbnQnKTtcbiAgICAgICAgY2xhc3NpY0NhcmQuYXBwZW5kQ2hpbGQoY2xhc3NpY0NhcmRDb250ZW50KTtcblxuICAgICAgICBjb25zdCBjbGFzc2ljQ2FyZEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGNsYXNzaWNDYXJkSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2NhcmQtaGVhZGVyJyk7XG4gICAgICAgIGNsYXNzaWNDYXJkSGVhZGVyLnRleHRDb250ZW50ID0gY2xhc3NpY01lbnVbaV0uZmxhdm9yO1xuICAgICAgICBjbGFzc2ljQ2FyZENvbnRlbnQuYXBwZW5kQ2hpbGQoY2xhc3NpY0NhcmRIZWFkZXIpO1xuXG4gICAgICAgIGNvbnN0IGNsYXNzaWNDYXJkRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY2xhc3NpY0NhcmREZXNjLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2NhcmQtZGVzYycpO1xuICAgICAgICBjbGFzc2ljQ2FyZERlc2MudGV4dENvbnRlbnQgPSBjbGFzc2ljTWVudVtpXS5kZXNjcmlwdGlvbjtcbiAgICAgICAgY2xhc3NpY0NhcmRDb250ZW50LmFwcGVuZENoaWxkKGNsYXNzaWNDYXJkRGVzYyk7XG4gICAgfVxuXG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgfSwgMTAwKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==