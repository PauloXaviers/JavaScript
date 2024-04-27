let result = prompt('Adivinhe o número que estou pensando? Está entre 10 e 0')

let randomNumber = Math.round(Math.random() * 10) 

let xAttempts = 1

while (Number(result) != randomNumber) {
    result = prompt('Erro tente novamente: ')
    xAttempts++
}

alert(`Parabéns, você conseguiu acertar o número em ${xAttempts} tentativas`)