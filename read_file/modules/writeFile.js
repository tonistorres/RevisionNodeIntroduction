const fs = require('fs').promises;
// criando e escrevendo arquivo
async function writeFileAsync(pathFile, content) {
  try {
    await fs.writeFile(`./${pathFile}`, `${content}`);
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}

module.exports = {
  writeFileAsync,
}
