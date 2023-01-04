const square = (l) => {
  return Math.pow(l, 2);

}

const circle = (raio) => {
  return Math.PI * (Math.pow(raio, 2));
}

const sum_two_number = (a, b) => {
  return a + b;
}


module.exports = {
  square,
  circle,
  sum_two_number
}
