// Vi lascio il bonus per oggi:
// chiediamo all'utente anche il suo numero preferito
// al numero preferito sommiamo 5
// attacchiamo alla password, al posto del 21, il risultato

// definisco la costante
const numeroCinque = 5;

// chiedo all'utente il suo nome
let nomeUtente = prompt('Inserisci il tuo Nome');
console.log('Nome Utente ' + nomeUtente);

// chiedo all'utente il suo cognome
let cognomeUtente = prompt('Inserisci qui il tuo Cognome');
console.log('Cognome Utente ' + cognomeUtente);

// chiedo all'utente il suo colore preferito
let colorePreferito = prompt('Inserisci qui il tuo Colore Preferito;');
console.log('Colore Preferito Utente ' + colorePreferito);

// chiedo all'utente il suo numero preferito
let numeroPreferito = prompt('Inserisci qui il tuo Numero Preferito');
console.log('Numero Preferito ' + numeroPreferito)

// mostro all'utente i dati che ha inserito + (numeroPreferito + 5)
let sommaNumero = numeroCinque + parseInt(numeroPreferito);

let password = ('Il nostro team di esperti passworologi ha scoperto che la tua miglior password è: ' + nomeUtente + cognomeUtente + colorePreferito + sommaNumero);

document.writeln(password);
console.log('Password ' + password);

document.getElementById('social').innerHTML = ('Non dimenticarsi di condividere la password sui social prima di utilizzarla!!!')
