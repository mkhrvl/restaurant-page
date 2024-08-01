import Home from './home.js';
import './style.css';

Home();

const copyright = document.querySelector('.footer__copyright');
const currentYear = new Date().getFullYear();
copyright.textContent = `© ${currentYear} La Filipina. All Rights Reserved`;
