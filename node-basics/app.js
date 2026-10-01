// exercicio 1 
console.log("       MEU PRIMEIRO NODE.JS");
console.log("_____________________________");

console.log("Nome: Samara Sales");
console.log("Curso: ADS");
console.log("Instituição: UEPB");
console.log("Estou aprendendo Node.js!");

// exercicio 3 
const matematica = require("../node-basics/matematica");

const resultadoSoma = matematica.soma(10, 5);
const resultadoSubtracao = matematica.subtrair(10, 5);
const resultadoMultiplicacao = matematica.multiplicar(10, 5);
const resultadoDivisao = matematica.dividir(10, 5);

console.log("Soma:", resultadoSoma);
console.log("Subtração:", resultadoSubtracao);
console.log("Multiplicação:", resultadoMultiplicacao);
console.log("Divisão:", resultadoDivisao);