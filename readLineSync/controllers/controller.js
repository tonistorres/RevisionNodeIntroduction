const readLine = require('readline-sync')

let data = {
  first_name: '',
  weight: 0,
  height: 0

}

const input_cadastro = () => {
  // Entrada de Dados input_cadastro
  data.first_name = readLine.question('Digite seu Primeiro Nome:');
  data.weight = readLine.questionFloat('Digite seu Peso:');
  data.height = readLine.questionFloat('Digite sua Altura:');
}


module.exports = { data, input_cadastro }
