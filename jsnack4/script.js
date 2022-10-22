/******************************************
TRACCIA 3.b

In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

*****************************************/

// array con nomi invitati - const[]
// chiedere all'utente il suo nome - prompt
// verificare se è nella lista - while
// stampa esito per utente - if else

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
console.log('hai inserito: ' + guestName);

console.log('');

// ciclo for
/* for (let i = 0; i < guestsList.length; i++) {
    const guestAdmitted = guestsList[i];
    console.log(guestAdmitted);
} */

// ciclo while
let i = 0;

while (i < guestsList.length) {
    const guestAdmitted = guestsList[i];
    console.log(guestAdmitted);

    if (guestName == guestAdmitted) {
        console.log('sei in lista, divertiti!');
    } else {
        console.log('non sei in lista');
    }
  
    i++
}





