let numberOne = prompt("Digite o primeiro número:");
let numberTwo = prompt("Digite o segundo número:");

const resultSum = Number(numberOne) + Number(numberTwo);
const resultPair = resultSum % 2;

alert("A soma dos dois números é: " + resultSum);
alert("A subtração dos dois números é: " + (Number(numberOne) - Number(numberTwo)));
alert("A multiplicação dos dois números é: " + (Number(numberOne) * Number(numberTwo)));
alert("A divisão dos dois números é: " + (Number(numberOne) / Number(numberTwo)));
alert("O resto da divisão dos dois números é: " + (Number(numberOne) % Number(numberTwo)));

if (resultPair === 0) {
  alert("A soma dos dois números é par: " + resultSum);
} else {
  alert("A soma dos dois números é ímpar: " + resultSum);
}  
10
if (numberOne === numberTwo) {
  alert("Os números inseridos são iguais");
} else {
  alert("Os números inseridos são diferentes");
}