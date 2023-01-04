// importando com require communJS Node Module
const brl = require('./modules/brlValue');
const usd = require('./modules/usdToBrl');
// Utilizando importação de modules com require communJS
// e utilizando destructurin para desacoplar as funções
// vidas em objeto por meio do exports
const { square,
  circle,
  sum_two_number } = require('./modules/geometric');

console.log(`Valor Recebido index.js:\n ${brl.brlConst}`);

result = usd.usdToBrl(10)
console.log(`Valor Recebido index.js:\n${result}`);

resultSquare = square(10);
resultCircle = circle(5);
resultSumTwoNumber = sum_two_number(10, 20);

// FORMA CORRETA EM NODE JS

console.log(`Resultado da Area do Quadrado ${resultSquare}`);
console.log(`Resultado da Área do Circulo ${resultCircle}`);
console.log(`Resultado da Soma de Dois Números ${resultSumTwoNumber}`);
