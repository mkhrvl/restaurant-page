import Home from './home.js';
import Menu from './menu.js';
import About from './about.js';
import './style.css';

Home();

const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        const id = e.target.id;

        const content = document.querySelector('#content');
        content.replaceChildren('');

        navLinks.forEach((link) => {
            link.classList.remove('nav__link-active');
        });

        switch (id) {
            case 'nav-home':
                Home();
                break;
            case 'nav-menu':
                Menu();
                break;
            case 'nav-about':
                About();
                break;
        }

        e.target.classList.add('nav__link-active');
    });
});

const copyright = document.querySelector('.footer__copyright');
const currentYear = new Date().getFullYear();
copyright.textContent = `© ${currentYear} La Filipina. All Rights Reserved`;
