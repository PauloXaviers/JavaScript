let items = [];

        for(let item = 0; item < 10; item++) {
            itemName = prompt('Digite o produto que você precisa comprar: ' + (item + 1))
            items[item] = itemName
        }

        alert(items)
       