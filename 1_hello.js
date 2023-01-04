const info = () => {
  console.log(`
  ---------------------------------------------------------------------------------
  NODE - É um interpretador JavaScript que lê módulos ou arquivos js Linha a Linha
  ---------------------------------------------------------------------------------
  1 - Antes verificamos se existia node instalado em nossa máquina:
  node --version
  2 - Se não existia fizemos a instalação:
  curl -fsSL https://deb.nodesource.com/setup_19.x | sudo -E bash - &&\ sudo apt-get install -y nodejs
  3 - Criamos um Script com extensão javaScript no Vs-Code;
  4 - Pedimos para rodar esse arquivo no terminal, fora do navegador utilizando o node instalado na máquina.

  `)

}

const info_module = () => {
  console.log(module);
}


const sayHello = (first_name) => {
  console.log(`Hello ${first_name}`);
}

module.exports = { sayHello, info_module, info }

