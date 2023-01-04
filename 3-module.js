console.log(`
1 - No Node todos arquivos js são considerados módulos, por exemplo o arquvo hello.js
é um módulo local em nosso contexto de exemplo aqui estudado;
2 - Módulos são envelopados - módulos wrapper;
3 - Como ocorre esse envelopamento no Node?
Bem ele tem algumas funções com métodos mágicos que captura alguns parâmentros e pega
seu codigo javascript e envelopa tudo em tempo de execução:
exemplo
(function(exports, require, module,__filename,__dirname){ codigo aqui })
`);
