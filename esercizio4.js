/*# Esercizio 4

- Crea le variabili `firstName`, `lastName` e `fullName`.
- Assegna un valore di tipo stringa alle variabili `firstName` e `lastName`.
- Il valore della variabile `fullName` sarà dato dalla concatenazione delle altre due variabili
- Stampa in console il valore della variabile `fullName`*/


const firstName ='Mario';

const lastName ='Rossi';

let fullName = firstName + " " + lastName;

//oppure un altro metodo fn+apice singolo:

//let fullName = '${firstName} ${lastName}' //apici chiamati 'backtip'
                                          // il valore all'interno del backtip si chiama 'template literals'


console.log(fullName);