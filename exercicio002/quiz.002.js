
const list =[
    {
        name: 'Paulo Henrique',
        prova01: 7.5,
        prova02: 5.5,
    },

    {
        name: 'Antonio Silva',
        prova01: 6.7,
        prova02: 8,
    },

    {
        name: 'Nicoly Cristhyne',
        prova01: 9,
        prova02: 7.5,
    }
];

function mediaAlunos (aluno) {
     return `O aluno(a) ${aluno.name} está com uma média de: ${(aluno.prova01 + aluno.prova02) / 2}`;
}

for (let aluno of list) {
    
    let media = (aluno.prova01 + aluno.prova02) / 2;

    let result = media >= 7;

    let mediaMessage = mediaAlunos(aluno);

    if(result) {
        alert(mediaMessage + '. Parabéns foi aprovado(a)');
    } else { 
        alert(mediaMessage + '. Infelizmente foi reprovado(a)');
    }
    
}


