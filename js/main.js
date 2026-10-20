import { komponenteZapisi, filtrirajPoKategoriji, sortirajZapise } from './podaci.js';


function gradiKarticu(zapis) {
    const kartica = document.createElement('article');
    kartica.classList.add('card');
    
    
    kartica.dataset.id = zapis.id;

    
    if (zapis.vrijednost > 500) {
        kartica.classList.add('istaknuto'); 
    } else if (zapis.vrijednost < 150) {
        kartica.classList.add('zasivljeno'); 
    }

   
    kartica.innerHTML = `
        <div class="card-image-container">
            <img src="${zapis.slika}" alt="Slika proizvoda: ${zapis.naziv}" class="card-img" loading="lazy">
        </div>
        <div class="card-body">
            <span class="card-category">${zapis.kategorija}</span>
            <h3 class="card-title">${zapis.naziv}</h3>
            <div class="card-price">${zapis.vrijednost.toFixed(2)} €</div>
            <a href="${zapis.poveznica}" class="card-link" target="_blank" rel="noopener noreferrer">Saznaj više</a>
        </div>
    `;

    return kartica;
}


function gradiPopis(zapisi) {
    const spremnik = document.getElementById('katalog-spremnik');
    const elementPraznoStanje = document.getElementById('prazno-stanje');
    const elementBrojac = document.getElementById('brojac-zapisa');

   
    spremnik.innerHTML = '';

   
    elementBrojac.textContent = zapisi.length;

    
    if (zapisi.length === 0) {
        elementPraznoStanje.classList.remove('hidden');
        spremnik.style.display = 'none';
        return;
    } else {
        elementPraznoStanje.classList.add('hidden');
        spremnik.style.display = 'grid';
    }

   
    zapisi.forEach(zapis => {
        const karticaElement = gradiKarticu(zapis);
        spremnik.appendChild(karticaElement);
    });
}


document.addEventListener('DOMContentLoaded', () => {
    

    
    const sortiraniZapisi = sortirajZapise(komponenteZapisi, 'vrijednost', 'silazno');

    
    gradiPopis(sortiraniZapisi);

   
});