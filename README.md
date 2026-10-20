# Katalog Računalnih Komponenti

## Opis kataloga
Ovaj projekt predstavlja modularnu web aplikaciju razvijenu u čistom JavaScriptu (ES6 moduli) koja dinamički generira katalog računalnih komponenti. Stranica se sastoji od minimalističkog HTML kostura, a sav vizualni sadržaj, kartice, filtriranje, sortiranje i brojači grade se isključivo putem skripti.

## Svojstva jednog zapisa
Svaki objekt u polju podataka sadrži sljedeća svojstva:
1. **`id`** (String) – jedinstveni identifikator zapisa (pohranjen i kao podatkovni atribut `data-id` na svakoj kartici).
2. **`naziv`** (String) – naziv računalne komponente.
3. **`vrijednost`** (Number) – brojčana vrijednost / cijena u eurima.
4. **`kategorija`** (String) – tekstualna kategorija komponente (npr. "Grafičke kartice", "Procesori").
5. **`slika`** (String) – vanjska URL adresa slike (uz postavljeni opisni `alt` atribut).
6. **`poveznica`** (String) – URL adresa poveznice na detalje proizvoda (`href`).

## Kako se pokreće
Budući da projekt koristi **ES6 module** (`type="module"`), preglednici blokiraju učitavanje lokalnih modula putem direktnog otvaranja `index.html` datoteke (zbog CORS pravila). 

Preporučeni načini pokretanja:
1. **Visual Studio Code:** Otvorite mapu projekta u VS Code-u i pokrenite ekstenziju **Live Server**.
2. **Node.js (npx):** U mapi projekta pokrenite poslužitelj:
   ```bash
   npx http-server