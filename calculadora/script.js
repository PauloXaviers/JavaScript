const result = document.querySelector('.resultado')


function calculadora(tipo, valor) {
    if(tipo === 'acao'){
        
        if (valor === 'c'){
            result.value = ''
        }

        if ( valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
            result.value += valor
        }

        if( valor === '=') {
            let valor_campo = eval(result.value)
            result.value = valor_campo
        }
        
    } else if (tipo === 'valor'){
        result.value += valor
    }

}