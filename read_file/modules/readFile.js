const fs = require('fs').promises;
//****************************************/
// faz a leitura e imprime no terminal   /
//************************************ */
async function readFileAsyncPromise(pathFileString) {
  try {
    const content = await fs.readFile(`./${pathFileString}`, 'utf-8');
    console.log(content);
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}

//*************************************/
// Faz a leitura e retorna a Promessa /
//********************************* */
// Esse método devolve uma promessa para vê o conteúdo você deve tratar na chamada
// criando uma função de assincrona para retornar o conteúdo
async function readFileAsyncPromiseReturnContent(pathFileString) {
  try {
    const content_file = await fs.readFile(`./${pathFileString}`, 'utf-8');
    return content_file;
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}

module.exports = {
  readFileAsyncPromise,
  readFileAsyncPromiseReturnContent,
}

