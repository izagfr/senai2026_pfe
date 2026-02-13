const prompt = require('prompt-sync')();

let temCracha = prompt("O usuário possui crachá? (sim/nao): ");
let estaDeUniforme = prompt("O usuário está de uniforme? (sim/nao): ");
let eMonitor = prompt("O usuário é monitor? (sim/nao): ");
let temCadastro = prompt("O usuário possui cadastro? (sim/nao): ");

const acessoFuncionario = temCracha === "sim" && estaDeUniforme === "sim";
const acessoMonitor = eMonitor === "sim" && temCadastro === "sim";

if (acessoFuncionario || acessoMonitor) {
    console.log("Acesso liberado");
} else {
    console.log("Acesso negado");
}