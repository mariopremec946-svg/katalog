// Polje s 8 zapisa računalnih komponenti
export const komponenteZapisi = [
    {
        id: "gpu-01",
        naziv: "Grafička kartica RTX 4070 Ti",
        vrijednost: 899.99,
        kategorija: "Grafičke kartice",
        slika: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.gamecentar.rs%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Ffd56078e9d935ae1094b0948aee087e5%2F5%2F2%2F52774-gigabyte-rtx4070-ti-12gb-graficka-karta.jpg&f=1&nofb=1&ipt=9d7791106cd9a27a081e656743ab8fdad2fd1cb49413ec87479a2e37ce1c9701&ipo=images",
        poveznica:"https://megabajt.hr/proizvod/gigabyte-geforce-rtx-4070-ti-super-gaming-oc-16gb-graficka-kartica/",
    },
        {
        id: "cpu-02",
        naziv: "Procesor Intel Core i7-14700K",
        vrijednost: 429.50,
        kategorija: "Procesori",
        slika: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.custompc.com%2Fwp-content%2Fsites%2Fcustompc%2F2023%2F07%2F14700K-Blue.jpg&f=1&nofb=1&ipt=355691afdaa30787b608e73ded6e91bdaafeb7d3d86c81b98a7fc39f858fb208&ipo=images",
        poveznica: "https://www.microcenter.com/product/670842/intel-core-i7-14700k-raptor-lake-s-refresh-34ghz-twenty-core-lga-1700-boxed-processor-heatsink-not-included"
    },
    {
        id: "ram-03",
        naziv: "RAM 32GB DDR5 6000MHz",
        vrijednost: 135.00,
        kategorija: "Memorija",
        slika: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIF.gGvojX%252bL1PRvPQRTIvotog%26r%3D0%26pid%3DApi&f=1&ipt=703b38f06fbddc24225873f4c39f426a02a4dee5df51cc5c559ce02e550c41ae&ipo=images",
        poveznica: "https://www.mwave.com.au/products/gskill-trident-z5-royal-neo-rgb-32gb-2x-16gb-ddr5-6000mhz-cl28-amd-desktop-memory-silver-ac78818"
    },
    {
        id: "ssd-04",
        naziv: "NVMe M.2 SSD 2TB Gen4",
        vrijednost: 169.99,
        kategorija: "Pohrana podataka",
        slika: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.jUWOu8sx07wSxY0s-T9GggHaE8%3Fpid%3DApi&f=1&ipt=7665664ad57f60dd49768db76e12f8e346c9b2d87d9d90120a51ced4682b121d&ipo=images",
        poveznica: "https://www.amazon.com/2-tb-nvme-ssd-gen-4/s?k=2+tb+nvme+ssd+gen+4"
    },
    {
        id: "mb-05",
        naziv: "Matična ploča Z790 AORUS",
        vrijednost: 289.00,
        kategorija: "Matične ploče",
        slika: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
        poveznica: "https://www.ronis.hr/hr/maticna-ploca-gigabyte-z790-aorus-elite-ax-ddr5-sata3-usb3-2gen2x2-dp-2-5gbe-wifi-6e-lga1700-atx"
    },
    {
        id: "psu-06",
        naziv: "Napajanje 850W 80+ Gold",
        vrijednost: 129.99,
        kategorija: "Napajanja",
        slika: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.tfVpx6BHYtyWp8VtG4pSYQHaE8%3Fpid%3DApi&f=1&ipt=7e72566692ea4ce8c10ca62e13825985fe097e9cff450ce36759ac4829d8dc3c&ipo=images",
        poveznica: "https://megabajt.hr/proizvod/thermaltake-toughpower-grand-rgb-850w-napajanje-850w-80-gold/"
    },
    {
        id: "gpu-07",
        naziv: "Grafička kartica RX 7800 XT",
        vrijednost: 549.00,
        kategorija: "Grafičke kartice",
        slika: "https://48y9ftle.cdn.imgeng.in/katalozi/slike/velike/149786-79c86905-75bf-481f-92fd-b3e770f5e42d.jpg?preset=dvn1",
        poveznica: "https://www.multicom.me/a/149786/gigabyte-gaming-rx-7800-xt-oc-graficka-kartica",
    },
    {
        id: "cpu-08",
        naziv: "Procesor AMD Ryzen 5 7600X",
        vrijednost: 219.00,
        kategorija: "Procesori",
        slika: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.76OFy-sKSOHTPM9za4ZB4QHaE8%3Fpid%3DApi&f=1&ipt=324c74a65bbcb9d4d4de9f9aed6ca392f0ef76cbe0c5668c54a8d7472b5a3699&ipo=images",
        poveznica: "https://www.amd.com/en/products/processors/desktops/ryzen/7000-series/amd-ryzen-5-7600x.html"
    }
];

// Funkcija za filtriranje zapisa po kategoriji
export function filtrirajPoKategoriji(zapisi, kategorija) {
    return zapisi.filter(zapis => zapis.kategorija === kategorija);
}

// Funkcija za sortiranje popisa po brojčanoj vrijednosti (uzlazno ili silazno) ili nazivu
export function sortirajZapise(zapisi, kriterij = 'vrijednost', smjer = 'silazno') {
    return [...zapisi].sort((a, b) => {
        let rezultat = 0;
        if (kriterij === 'vrijednost') {
            rezultat = a.vrijednost - b.vrijednost;
        } else if (kriterij === 'naziv') {
            rezultat = a.naziv.localeCompare(b.naziv);
        }
        return smjer === 'silazno' ? -rezultat : rezultat;
    });
}