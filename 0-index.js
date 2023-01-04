const module_hello = require('./1_hello')
const code_status = require('./4-status_code')

// module_hello.sayHello('Tonis')
// module_hello.info_module()
console.table([
  code_status.STATUS_200,
  code_status.STATUS_201,
  code_status.STATUS_202,
  code_status.STATUS_203,
  code_status.STATUS_404,
  code_status.STATUS_400,
  code_status.STATUS_401
]);
