//  As Promises foram introduzidas para resolver o famoso problema do
//  Callback Hell, mas elas introduziram uma certa complexidade de
//  execução e sintaxe do código. Por esse motivo, em 2017 o JavaScript
//  trouxe uma nova forma para trabalhar com operações assíncronas de
//  forma mais simples: as funções async/await .


const doSomething = async () => {
  console.log(await dividirNumeros(2, 2));
};
