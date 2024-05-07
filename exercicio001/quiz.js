let numberOne = Number(prompt('Digite o primeiro número'))
let numberTwo = Number(prompt('Digite o segundo número'))

let tipoDado = typeof(numberOne, numberTwo)

const sum = numberOne + numberTwo 
const sub = numberOne - numberTwo
const multi = numberOne * numberTwo
const div = numberOne / numberTwo
const restoDiv = numberOne % numberTwo

alert('A soma da é: ' + sum)

if(sum % 2 == 0) {
    alert('A soma dos valores é um número par')
} else {
    alert('A soma dos valores é um número impar')
}

alert('A subtração é: ' + sub)
alert('A multiplicação é: ' + multi)
alert('A divisão é: ' + div)
alert('O resto da divisão é: ' + restoDiv)

alert('Os dados inseridos foram do tipo: ' + tipoDado)