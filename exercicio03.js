class Bicicleta {

    constructor() {
        this.modelo = "";
        this.marca = "";
        this.cor = "";
        this.velocidadeMaxima = 0;
    }

    setModelo(modelo) {
        this.modelo = modelo;
    }

    setMarca(marca) {
        this.marca = marca;
    }

    setCor(cor) {
        this.cor = cor;
    }

    setVelocidadeMaxima(velocidade) {
        if (velocidade <= 35 && velocidade >= 0) {
            this.velocidadeMaxima = velocidade;
        } else {
            console.log("Velocidade deve ser entre 0 e 35 km/h");
        }
    }

    getModelo() {
        return this.modelo;
    }

    getMarca() {
        return this.marca;
    }

    getCor() {
        return this.cor;
    }

    getVelocidadeMaxima() {
        return this.velocidadeMaxima;
    }
}