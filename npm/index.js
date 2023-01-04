var readlineSync = require('readline-sync');

const firstName = readlineSync.question('Qual seu Primeiro nome:');
const lastName = readlineSync.question('Qual seu Ultimo nome:');
const idade = readlineSync.questionInt('Qual sua idade:');

console.log(`Nome ${firstName} ${lastName} idade ${idade}`);
