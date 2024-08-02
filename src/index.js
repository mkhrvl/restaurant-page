import Home from './home.js';
import Menu from './menu.js';
import About from './about.js';
import './style.css';

Home();

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

export function navLinkClickHandler(e) {
    refreshScreen();

    const page = e.target.id || e.target.dataset.id;

    switch (page) {
        case 'nav-home':
            Home();
            navHome.classList.add('nav__link-active');
            break;
        case 'nav-menu':
            Menu();
            navMenu.classList.add('nav__link-active');
            break;
        case 'nav-about':
            About();
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
