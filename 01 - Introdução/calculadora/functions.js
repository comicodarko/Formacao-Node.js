function addition(number1, number2) {
  return number1 + number2;
}

function multiplication(number1, number2) {
  return number1 * number2 + number2;
}

function subtraction(number1, number2) {
  return number1 - number2;
}

function division(number1, number2) {
  return number1 / number2;
}

module.exports = { addition, multiplication, subtraction, division };
