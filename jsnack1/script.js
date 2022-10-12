/***************************************
 TRACCIA 1 -
 L’utente inserisce due numeri in successione, con due prompt. 
 Il software stampa il maggiore. 
*****************************************/

// chiedere 1° numero all'utente - prompt con const
// chiedere 2° numero all'utente - prompt con const
// creare variabile per individuare il numero vincente
// verificare il numero più alto - if / else
// stampare in console il numero più alto

let numberPlayer1 = document.getElementById('first_number');
let numberPlayer2 = document.getElementById('second_number');


// chiedere 1° numero all'utente - prompt con const
const firstNumber = Number(prompt('Scegli un numero'));
numberPlayer1.innerHTML=('il primo numero è ', firstNumber);
// chiedere 2° numero all'utente - prompt con const
const secondNumber = Number(prompt('Scegli un numero'));
numberPlayer2.innerHTML=('il secondo numero è ', secondNumber);
console.log(firstNumber, secondNumber);

// creare variabile per individuare il numero più alto
let winNumber;
// verificare il numero più alto - if / else
if (firstNumber > secondNumber) {
    winNumber = firstNumber;
    console.log('il numero vincente è: ', winNumber);
} else if (firstNumber < secondNumber) {
    winNumber = secondNumber;
    console.log('il numero vincente è: ', winNumber);
} else {
    winNumber = secondNumber;
    console.log('il numero vincente è: pareggio');
}




