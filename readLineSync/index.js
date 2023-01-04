const cadastro = require('./controllers/controller');
const imc = require('./services/imc');
const IReport = require('./services/ireport');
const fs = require('./IO/fsWrite');



const main = () => {
  cadastro.input_cadastro();
  result_imc = imc.calcImc(cadastro.data.weight, cadastro.data.height);
  content_report = IReport.reportImc(
    cadastro.data.first_name,
    cadastro.data.weight,
    cadastro.data.height,
    result_imc
  )
  fs.write_file('cliente', content_report)
}

main()
