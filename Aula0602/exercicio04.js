const prompt = require('prompt-sync')();

let DiadoMes = Number(prompt("Informe o dia do mês: "));
let Mes = Number(prompt("Informe o mês: "));
let Ano = Number(prompt("Informe o ano: "));


console.log("Dia: " + DiadoMes);
console.log("Mês: " + Mes);
console.log("Ano: " + Ano);

console.log(`Data informada: ${DiadoMes}-${Mes}-${Ano}`);