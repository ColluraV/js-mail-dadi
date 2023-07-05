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
})


console.log(listaUtenti)

let utenteConcesso = false;

// ricerca utente nella lista
for (let i = 0; i < listaUtenti.length; i++) {
  

  const utenteCorrente = listaUtenti[i];

  if (utenteCorrente === listaUtenti) {
    console.log("L'utente risulta registrato");
    utenteConcesso = true;
  }

}

// 
if (utenteConcesso === true) {
  console.log("positivo");
} else {
  console.log("negato");
}