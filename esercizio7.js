/* # Esercizio 7

- Esegui la conversione (casting) delle variabili al tipo di dato presente nei commmenti del file exercise.js e 
stampa il risultato dell'operazione.
- Spiega il casting della variabile `hello`*/


// let hello = 'Ciao';     // number
// let age = 18;       // boolean
// let isGraduated = false;     // string


let hello = 'Ciao';
console.log(Number(hello));    

//il valore stampato è Nan (not a number) poichè il valore convertito è una parola e non un numero,
//non esiste un numero tale che dia la conversione di 'ciao'



let age = 18;
console.log(Boolean(age));


let isGraduated= false;
console.log(String(isGraduated));