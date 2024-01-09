// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?
// Consigli del giorno:
// Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
// BONUS 1: Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
// BONUS 2: Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
// Buon lavoro e buon divertimento!


// Creazione del container
const container = document.createElement('div');

    // Aggiunta di classi al container
    container.classList.add('container', 'd-flex', 'border', 'flex-wrap');

    

    document.body.appendChild(container);

    for (let numero = 1; numero <= 100; numero++) {

        let elemento;

        if ((numero % 3 === 0) && (numero % 5 === 0)) {

            elemento = `<p class= "col-2 p-5 border border-danger text-center "> FizzBuzz </p>`;

        } else if (numero % 3 === 0) {

            elemento = `<p class= "col-2 p-5 border border-success text-center "> Fizz </p>`;

        } else if (numero % 5 === 0) {

            elemento = `<p class= "col-2 p-5 border border-warning text-center "> Buzz </p>`;

        } else {

            elemento = `<p class= "col-2 p-5 border border-primary text-center "> ${numero} </p>`;

        }

        // Aggiunta dell'elemento al container attraverso la funzione append()
        container.innerHTML += elemento;
    }

    // Terminato esercizio