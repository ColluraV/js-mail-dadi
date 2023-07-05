//mail da html

const mailInputElement = document.querySelector("[name='mailInput']");


const btnConferma = document.querySelector(".confermaForm");
btnConferma.addEventListener ("click", function() {

    const eMail = mailInputElement.value + "@mail.it";
    console.log(eMail)
})