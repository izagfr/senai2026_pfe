let ultimaCidade = null; // variável fora da classe

class Cidade {

    inserirCidade(nome, estado, quantidadeHabitantes) {
        ultimaCidade = {
            nome: nome,
            estado: estado,
            quantidadeHabitantes: quantidadeHabitantes
        };
    }

    mostrarUltimaCidade() {
        if (ultimaCidade) {
            console.log("Nome:", ultimaCidade.nome);
            console.log("Estado:", ultimaCidade.estado);
            console.log("Habitantes:", ultimaCidade.quantidadeHabitantes);
        } else {
            console.log("Nenhuma cidade cadastrada.");
        }
    }
}

let cidade = new Cidade();

cidade.inserirCidade("São Paulo", "SP", 12300000);
cidade.inserirCidade("Campinas", "SP", 1214000);

cidade.mostrarUltimaCidade();