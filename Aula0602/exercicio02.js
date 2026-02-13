const prompt = require('prompt-sync')();

let idade = Number(prompt("Digite sua idade: "));

if(idade <=17){
    console("O úsuario é de menor, não pode pegar o livro emprestado");
}else if(idade>=16){
    console.log("O úsuario é de menor idade, mas pode pegar livro emprestado");
}else if(idade>= 18){
    console.log("O úsuario é de maior, ele pode pegar o livro");
}else {
    console.log("Idade inválida");
}