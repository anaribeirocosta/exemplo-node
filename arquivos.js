// const fs = require("fs");
// // Exemplo de leitura

// let texto;

// fs.readFile('teste.txt', function(erro, sucesso){
//     if(erro){
//         console.log("ERRO AO LER O ARQUIVO");
//         console.log(erro);
//     }
//     else{
//         sucesso = sucesso.toString();
//         console.log("Arquivo lido com sucesso");
//         console.log(sucesso);
//         texto = sucesso;
//     }
// });

// console.log("Chamada de leitura executada com sucesso.");


// // Exemplo de escrita de arquivo

// let paraEscrever = process.argv[2];

// // Para gravar sempre um novo arquivo, usar writeFile
// if(process.argv.length ===3){
// fs.appendFile('testeEscrita.txt', `${paraEscrever}\r\n`, erro => {
//     if(erro){
//         console.log("ERRO AO ESCREVER O ARQUIVO");
//     }
//     else{
//         console.log("Deu bom - arquivo escrito com sucesso");
//     }
// });

// console.log("Chamada de escrita executada com sucesso");}


const fs = require("fs");
let nome = process.argv[3];
let email = process.argv[4];

let cadastro = process.argv[2];

let obj = {
    nome1: nome,
    email1: email 
}

console.log(obj);
// let paraEscrever = process.argv[2];

// Para gravar sempre um novo arquivo, usar writeFile
if(process.argv.length ===5 && cadastro === "salvar"){
fs.appendFile('cadastro.json', JSON.stringify(obj), erro => {
    if(erro){
        console.log("ERRO AO ESCREVER O ARQUIVO");
    }
    else{
        console.log("Deu bom - arquivo escrito com sucesso");
    }
});
} else {
        console.log("utilização")
        console.log("node cadastro.js salvar <nome> <email>");
}
console.log("Chamada de escrita executada com sucesso");
