import { komponenteZapisi, filtrirajPoKategoriji, sortirajZapise } from './podaci.js';

// Funkcija koja iz jednog zapisa gradi jednu HTML karticu
function gradiKarticu(zapis) {
    const kartica = document.createElement('article');
    kartica.classList.add('card');
    
    // Postavljanje podatkovnog atributa s identifikatorom zapisa
    kartica.dataset.id = zapis.id;

    // Dodavanje klase ovisno o vrijednosti podataka preko classList
    if (zapis.vrijednost > 500) {
        kartica.classList.add('istaknuto'); // Istaknuto za visoku cijenu / vrhunske komponente
    } else if (zapis.vrijednost < 150) {
        kartica.classList.add('zasivljeno'); // Zasivljeno za povoljnije / starije modele
    }

    // Unutarnja struktura kartice
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

// Funkcija koja gradi cijeli popis u zadanom spremniku
function gradiPopis(zapisi) {
    const spremnik = document.getElementById('katalog-spremnik');
    const elementPraznoStanje = document.getElementById('prazno-stanje');
    const elementBrojac = document.getElementById('brojac-zapisa');

    // Osvježavanje spremnika
    spremnik.innerHTML = '';

    // Ažuriranje brojača zapisa u zaglavlju
    elementBrojac.textContent = zapisi.length;

    // Provjera praznog stanja
    if (zapisi.length === 0) {
        elementPraznoStanje.classList.remove('hidden');
        spremnik.style.display = 'none';
        return;
    } else {
        elementPraznoStanje.classList.add('hidden');
        spremnik.style.display = 'grid';
    }

    // Iteracija kroz zapise i gradnja svake kartice
    zapisi.forEach(zapis => {
        const karticaElement = gradiKarticu(zapis);
        spremnik.appendChild(karticaElement);
    });
}

// Inicijalizacija pri učitavanju dokumenta
document.addEventListener('DOMContentLoaded', () => {
    // Demonstracija zahtjeva iz zadatka: 
    // 1. Filtriranje zapisa jedne kategorije (npr. "Procesori")
    // const filtrirani = filtrirajPoKategoriji(komponenteZapisi, "Procesori");

    // 2. Sortiranje popisa po brojčanoj vrijednosti (cijeni) silazno
    const sortiraniZapisi = sortirajZapise(komponenteZapisi, 'vrijednost', 'silazno');

    // Prikaz popisa
    gradiPopis(sortiraniZapisi);

    /* 
      Testiranje praznog stanja (opcionalno prema uputama):
      Privremeni poziv funkcije s praznim poljem kako bi se provjerilo prikazivanje poruke i nula u brojaču:
      // gradiPopis([]);
    */
});