const livros = require('./databse');


//Pega o input 
const lerLinha = require('readline-sync');

const entrada = lerLinha.question('Deseja buscar um livro por categoria?S/N ');

//Mostra todas as categorias disponíveis
if(entrada.toLocaleUpperCase() === 'S'){
    console.log("Essas são as categorias disponíveis: ");
    livros.map(livro => console.log(livro.categoria));

    const categoria = lerLinha.question('Digite a categoria desejada: ');

    const retorno = livros.filter(livro => livro.categoria === categoria);
    
    console.table(retorno);
}
//Mostra todos os livros em ordem (número de paginas)
else{
    const retorno = livros.sort((livro1, livro2) => livro1.paginas - livro2.paginas);
    console.table(retorno);

}


