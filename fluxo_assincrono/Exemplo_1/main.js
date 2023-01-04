/** Observe o fluxo assíncrono ele a linha de código 1 está sendo lida por ultimo
 *  isso se da pelo fato de leitira de arquivo em disco ter um custo computacional
 *  o que nos diz estamos trabalhando com métodos assíncrono não bloqueantes, ou seja,
 *  imediatamente sera devolvida uma promessa de que no momento que resolver tudo o processo
 *  de leitura teremos o retorno do resultado ou a rejeição em caso de alguma exceção
 */


//https://www.youtube.com/watch?v=7Bs4-rqbCQc
const fs = require('fs');

// 1
fs.readFile('file.txt', 'utf8', function (err, content) {
  //Enviando para o console o resultado da leitura
  console.log(content);
});

// 2
console.log("1");
// 3
console.log("2");

