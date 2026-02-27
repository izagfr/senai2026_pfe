class Jogador{
   #nome;
   #numero;

   constructor(nome,numero){
    this.#nome=nome;
    this.#numero=numero;
   }
getNome(){
    return this.#nome;
}
getNumero(){
    return this.#numero;
  }
} //classe mae geralmente não é instanciada

class jogadorFutebol extends Jogador{
    peDominante;
    totalGols;

    constructor(nome,numero,peDominante,qtdGols){
        super(nome,numero);
        this.peDominante=peDominante;
        this.totalGols=qtdGols;
    }

    fzerGol(qtd){
        return this.totalGols += qtd;
    }
    mostar(){
        return`O jogador ${super.getNome()}camisa numero ${super.getNumero()}tem o pé dominante ${this.peDominante
}e tem ${this.totalGols}gols`;
    }
}
const jorge=new jogadorFutebol('jorge',10,'direito',10);
console.log(jorge.mostrar());