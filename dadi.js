//numero dado randomico
const primoMin =  1;
const primoMax = 6;
const dadoUser = Math.round(Math.random() * (primoMax - primoMin)) + primoMin;
const dadoPc = Math.round(Math.random() * (primoMax - primoMin)) + primoMin;
console.log(dadoUser);
console.log(dadoPc);
