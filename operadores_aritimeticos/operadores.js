let firstNumber = prompt('Digite o primeiro numero')
        let secondNumber = prompt('Digite o segundo numero')

        firstNumber = Number(firstNumber)
        secondNumber = Number(secondNumber)

        const sum = firstNumber + secondNumber
        const sub = firstNumber - secondNumber
        const multi = firstNumber * secondNumber
        const div = firstNumber / secondNumber
        const restDiv = firstNumber % secondNumber

        alert('A soma é: ' + sum)
        alert('A subtração é: ' + sub)
        alert('A multiplicação é: ' + multi)
        alert('A divisão é: ' + div)
        alert('O resto da divisão é: ' + restDiv)
