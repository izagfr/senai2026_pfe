class Produto {
    constructor(nome, preco, estoque) {
        if (preco >= 0 && estoque >= 0) {
            this.nome = nome;
            this.preco = preco;
            this.estoque = estoque;
        } else {
            console.log("Erro: preço e estoque devem ser >= 0");
        }
    }

    aplicarDesconto(percentual) {
        this.preco = this.preco - (this.preco + percentual / 100);
    }

    valorEmEstoque() {
        return this.precothis.estoque;
    }
}

// Criando produtos
let p1 = new Produto("Caderno", 50, 10);
let p2 = new Produto("Caneta", 5, 100);

// Aplicando desconto no primeiro
p1.aplicarDesconto(10);

// Comparando
if (p1.valorEmEstoque() > p2.valorEmEstoque()) {
    console.log("Produto 1 tem maior valor em estoque");
} else {
    console.log("Produto 2 tem maior valor em estoque");
}
