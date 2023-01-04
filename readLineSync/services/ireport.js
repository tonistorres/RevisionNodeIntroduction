const reportImc = (first_name, weight, height, imc) => {
  return `
  Nome do Cliente é:${first_name}
  Peso: ${weight}
  Altura: ${height}
  IMC: ${imc.toFixed(2)}
  `
}

module.exports = {
  reportImc
}
