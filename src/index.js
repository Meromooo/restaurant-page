import './styles.css';

import {greeting} from './greeting.js';
console.log(greeting);

import {createHomepage} from './greeting.js';
import {createMenuPage} from './menu.js';
import {createAboutPage} from './about.js';

const content = document.getElementById('content');

function clearContent() {
    const content = document.getElementById('content');
    content.innerHTML = '';
}

document.getElementById('home-tab').addEventListener('click', () => {
    clearContent();
    createHomepage();
});

document.getElementById('menu-tab').addEventListener('click', () => {
    clearContent();
    createMenuPage();
});

document.getElementById('about-tab').addEventListener('click', () => {
    clearContent();
    createAboutPage();
});

createHomepage();





