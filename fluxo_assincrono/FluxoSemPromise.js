/**Temos uma função de dividir dois números que no primeiro momento
 * ela lança uma exceção de erro quando o número for divisível por zero
 * tendo em vista que na matemática não existe divisão por zero
 */

function dividirNumeros(num1, num2) {
  // Lançamento de erro
  if (num2 == 0) throw new Error("Não pode ser feito uma divisão por zero");

  return num1 / num2;
}

// quando a função é invocada dentro de um estrutura try catch nós
// podemos simplesmente exibir o resultado no terminal se tudo estiver
// correto, ou seja, se a divisão de fato existir segundo as regras
// de negócio definida no escopo da função, ou capturar esse exceção
// e tratá-la caso ocorra algum erro e lançamento de exceção.
try {
  const resultado = dividirNumeros(2, 1);
  console.log(`resultado: ${resultado}`);
} catch (e) {
  console.log(e.message);
}
