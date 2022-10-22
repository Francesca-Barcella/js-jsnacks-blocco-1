/******************************************
TRACCIA 3.b

In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

*****************************************/ 
// array con nomi invitati - const[]
const guestsList = [
    'Mario',
    'Lucia',
    'Andrea',
    'Salvatore',
    'Silvio',
    'Silvia',
]

console.log(guestsList);

// chiedere all'utente il suo nome - prompt
const guestName = prompt('Inserisci il tuo nome');
console.log(guestName);

console.log('');

//costruire il ciclo for
//variabile inizialmente false perchè non è ancora stato inserito il nome quando apriamo la pagina (come esercizio mail!!)
let isVip = 'non sei in lista, mi spiace!';

/* for (let i = 0; i < guestsList.length; i++) {
    const guestAdmitted = guestsList[i];
    if (guestAdmitted === guestName) {
        isVip = 'sei in lista, divertiti!'
    }
    
}

console.log(isVip); */

// trasformare il ciclo for in ciclo while
let i = 0;

while (i < guestsList.length) {
    const guestAdmitted = guestsList[i];
    if (guestAdmitted === guestName) {
        isVip = 'sei in lista, divertiti!'
    }
    
    i++
}

console.log(isVip);

