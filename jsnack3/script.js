/******************************************
TRACCIA 3.b

Snack 3 blocco 1 con While:
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.

*****************************************/
//alert('ciao')

//Il software deve chiedere per 10 volte all’utente di inserire un numero.
let i = 0;
let sum =0;

while ( i < 10) {
    // CORREZIONE - aggiungere Number al prompt altrimenti li considera stringhe e basta
    const userNumber = Number(prompt('inserisci un numero'));
    console.log(userNumber);
    //Il programma calcola la somma di tutti i numeri inseriti. sum parte da o e ogni volta il += aggiunge l'addedndo di destra quindi userNumber
    sum += userNumber;
    
    i++;
}

console.log('hai scritto correttamente 10 numeri e siamo fuori dal ciclo while');
console.log('la somma dei numeri scritti è: ' + sum);

