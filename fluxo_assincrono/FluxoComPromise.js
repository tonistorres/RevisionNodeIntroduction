/** Temos a função dividir dois número agora será tratada de forma
 * assíncrona, ou seja, ela não retornara de imediato o valor esperado
 * mais sim uma promessa que queverá ser emvelopada na estrutura then e
 * catch utilizada para trabalhar com fluxo assíncrono, onde, resolve
 * é utilizado para retornar uma promisse válida e reject caso algo dê
 * ruim.
 *
 *
 * As Promises foram introduzidas para resolver o famoso problema do
 *  Callback Hell, mas elas introduziram uma certa complexidade de
 *  execução e sintaxe do código. Por esse motivo, em 2017 o JavaScript
 *  trouxe uma nova forma para trabalhar com operações assíncronas de
 *  forma mais simples: as funções async/await .

 */


function dividirNumeros(num1, num2) {
  // emvelopamento do cálculo numa estrutura assíncrona, tendo como parâmetros
  // resolve e reject
  const promise = new Promise((resolve, reject) => {
    // em caso de erro retorna reject
    if (num2 == 0)
      reject(new Error("Não pode ser feito uma divisão por zero"));

    const resultado = num1 / num2;
    // em caso de acerto resolve
    resolve(resultado)
  });
  // em ambos os caso será retornado uma promise com resultado positivo (resolve)
  // ou false (exceções em gerais) reject
  return promise;
}

// função é chamada e tratada
dividirNumeros(2, 1)
  .then(result => console.log(`sucesso: ${result}`))
  .catch(err => console.log(`erro: ${err.message}`));
