//mail da html

const mailInputElement = document.querySelector("[name='mailInput']");

//per comodità ho messo @mail.it obbligatorio e sottinteso


//lista utenti concessi
const listaUtenti = ["mario", "pino", "enzo", "giovanna", "maria", "antonella", "valerio", "leonardo", "riccardo", "master", "giulia", "salvatore", "pietro", "elisa"];

//bottone conferma
const btnConferma = document.querySelector(".confermaForm");
btnConferma.addEventListener ("click", function() {

    const eMail = mailInputElement.value + "@mail.it";
    console.log(eMail)



console.log(listaUtenti)

let utenteConcesso = false;

// ricerca utente nella lista
for (let i = 0; i < listaUtenti.length; i++) {
  

  const utenteCorrente = listaUtenti[i];


  if (utenteCorrente === mailInputElement.value) {
    console.log("L'utente risulta registrato");
    utenteConcesso = true;
  }

}

// controllo match utente
if (utenteConcesso === true) {
  console.log("Accesso Consentito");
  document.getElementById("output").innerHTML =('A posto!');
} else {
  console.log("Accesso Negato");
  document.getElementById("output").innerHTML =("e 'nsomma -.-");

}
})