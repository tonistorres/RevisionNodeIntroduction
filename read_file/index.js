const rAsync = require('./modules/readFile');
const wAsync = require('./modules/writeFile');
//************************************************ */
// Imprimindo no Terminal conteúdo do arquivo lido
//*********************************************** */
// rAsync.readFileAsyncPromise('file.txt');

//******************************************** */
// Criando uma função para tratar o retorno
// pendente da função leitura de de arquivo
// que retorna uma promisse e para resolvermos
// uma promisse só conseguimos por meio do uso
// de uma função async e da palavra chave awit
// na chamada da função
// *********************************************
async function LerAssincrono() {
  try {
    const conteudo = await rAsync.readFileAsyncPromiseReturnContent('file.txt')
    wAsync.writeFileAsync('write.txt', conteudo)
  } catch (error) {
    console.log(error);
  }
}

LerAssincrono();
// wAsync.writeFileAsync('write.txt',);
