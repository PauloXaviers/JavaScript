

let name = prompt("Digite o seu nome:")

        let n1 = prompt('Informe a nota da sua primeira prova')
        let n2 = prompt('Informe a nota da sua segunda prova')
        let n3 = prompt('Informe a nota da sua terceira prova')
        let n4 = prompt('Digite a nota da sua quarta prova')

        let avarege = (Number(n1) + Number(n2) + Number(n3) + Number(n4)) / 4 

        let result = avarege >= 6

        if (result) {
            alert('Parabéns ' + name + '! Você foi aprovado para mais um semestre na faculdade. Sua média foi de: ' + avarege)

        } else {
           alert('Olá ' + name+ '! Infelizmente a sua média não foi o sufuciente para avançar de semestre. Ela foi de: ' + avarege + ', estude para a prova de recuperação parar tentar alcançar a média')

        }