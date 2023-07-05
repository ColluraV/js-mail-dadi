//numero dado randomico
const btnGioca = document.querySelector(".lanciaDadi");
btnGioca.addEventListener ("click", function() {

const primoMin =  1;
const primoMax = 6;
const dadoUser = Math.round(Math.random() * (primoMax - primoMin)) + primoMin;
const dadoPc = Math.round(Math.random() * (primoMax - primoMin)) + primoMin;
console.log(dadoUser);
console.log(dadoPc);

document.getElementById("dado-user").innerHTML = `${dadoUser}`;
document.getElementById("dado-pc").innerHTML = `${dadoPc}`;

if(dadoPc>dadoUser){
    console.log("pc_win")
    document.getElementById("risultato").innerHTML = `YOU LOST`;
}

else if(dadoPc<dadoUser){
    console.log("user_win")
    document.getElementById("risultato").innerHTML = `YOU WON`;
} else {
    console.log("pareggio")
    document.getElementById("risultato").innerHTML = `SPARE`;}

})