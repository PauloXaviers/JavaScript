let option;

let items = [];

while(option != 3) {
    option = Number(prompt(` Olá usuário! Digite a opção desejada:
   
    1. Cadastrar um item na lista;
    2. Mostrar um item cadastrado;
    3. Sair do programa;`))

    switch (option) { 
        case 1: 
            let item = prompt('Digite o item que você quer cadastrar')
            items.push(item)
            break;

        case 2:
            if (items.length == 0){
                alert('Não existe item cadastrado')
            } else {
                alert(items)
            }
            break;

        case 3: 
            alert('Tchau! Até a próxima')
            break;

        default: 
            alert('Opção invalida. Tente novamente')
           

    }
}
