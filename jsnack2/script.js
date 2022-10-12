//alert ('ciao, funziono!')


/******************************************
TRACCIA 2
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. 
*****************************************/

// prompt parola 1
// prompt parola 2
// .lenght per le lunghezze
// if else
// stamp in console

let firstWordDom = document.getElementById('first_word');
let secondWordDom = document.getElementById('second_word');
let shorteWordDom = document.getElementById('shorter_word');
let longerWordDom = document.getElementById('longer_word');

const firstWord = prompt('Inserisci una parola');
const secondWord = prompt('Inserisci una seconda parola');
console.log(firstWord, secondWord);

firstWordDom.innerHTML=firstWord;
secondWordDom.innerHTML=secondWord;


if (firstWord.length < secondWord.length) {
    console.log(firstWord);
    console.log(secondWord);
} else {
    console.log(secondWord);
    console.log(firstWord);
}


