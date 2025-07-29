import kallioHood from './imgs/hood.jpg';

export function createAboutPage() {
    const content = document.getElementById('content');
    const aboutDiv = document.createElement('div');
    content.appendChild(aboutDiv);

    const kallioPic = document.createElement('img');
    kallioPic.src = kallioHood;
    kallioPic.alt = 'Kallio Neighborhood';
    kallioPic.classList.add('kallio-pic');
    aboutDiv.appendChild(kallioPic);

    
    const aboutParagraph = document.createElement('p');
    aboutParagraph.textContent = 'Welcome to the first and only authentic Syrian manaqeesh bakery in the heart of Kallio, Helsinki. We bring the taste of Damascus straight to your hands — warm, fresh, and affordable. In a neighborhood where prices keep rising just for being in "Kallio," we’re doing things differently. Our mission is simple: offer real food at fair prices. No gimmicks, no overpricing — just delicious manaqeesh made with love, whether it’s zaatar, cheese & mint, or meat fresh from the oven. Come by for a bite, and feel at home.';

    aboutDiv.appendChild(aboutParagraph);
}