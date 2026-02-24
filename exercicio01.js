class Livros {
    constructor(titulo, autor, ano, genero, paginas, editora, isbn, preco) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
        this.genero = genero;
        this.paginas = paginas;
        this.editora = editora;
        this.isbn = isbn;
        this.preco = preco;
    }
}
let livro1 = new Livros(
    "Dom Casmurro",
    "Machado de Assis",
    1899,
    "Romance",
    256,
    "Editora X",
    "123456789",
    39.90
);

console.log(livro1);