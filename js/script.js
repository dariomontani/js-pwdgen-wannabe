// Descrizione esercizio:
// 1. Chiedi all’utente il suo nome,
// 2. poi chiedi il suo cognome,
// 3. poi chiedi il suo colore preferito
// 4. Infine scrivi sulla pagina nomecognomecolorepreferito21

// chiedo all'utente il suo nome
let nomeUtente = prompt('Inserisci il tuo Nome');
console.log('Nome Utente ' + nomeUtente);

// chiedo all'utente il suo cognome
let cognomeUtente = prompt('Inserisci qui il tuo Cognome');
console.log('Cognome Utente ' + cognomeUtente);

// chiedo all'utente il suo colore preferito
let colorePreferito = prompt('Inserisci qui il tuo Colore Preferito;');
console.log('Colore Preferito Utente ' + colorePreferito);

// mostro all'utente i dati che ha inserito + 21
let password = ('Il nostro team di esperti passworologi ha scoperto che la tua miglior password è: ' + nomeUtente + cognomeUtente + colorePreferito + 21);

document.writeln(password);
console.log('Password ' + password);


document.getElementById('password_in_sicura').innerHTML = password;
console.log('Password ' + password);
