


const criarProdutoVenda = (evento) => {
    
    evento.preventDefault(); //previne o envio deste dado para algum lugar
    //se for enviar para o servidor, devemos colocar o local aqui
    const inputEan = document.querySelector('[data-form-inputean]');
    const valorEan = inputEan.value;
    console.log ( valorEan );
    inputEan.value = ''

    const inputMarca = document.querySelector('[data-form-inputmarca]');
    const valorMarca = inputMarca.value;
    console.log ( valorMarca );
    inputMarca.value = ''

    const inputProduto = document.querySelector('[data-form-inputproduto]');
    const valorProduto = inputProduto.value;
    console.log ( valorProduto );
    inputProduto.value = ''

    const inputModelo = document.querySelector('[data-form-inputmodelo]');
    const valorModelo = inputModelo.value;
    console.log ( valorModelo );
    inputModelo.value = ''

    const inputCor = document.querySelector('[data-form-inputcor]');
    const valorCor = inputCor.value;
    console.log ( valorCor );
    inputCor.value = ''

    const inputPreco = document.querySelector('[data-form-inputpreco]');
    const valorPreco = inputPreco.value;
    console.log ( valorPreco );
    inputPreco.value = ''

    const inputEstoque = document.querySelector('[data-form-inputestoque]');
    const valorEstoque = inputEstoque.value;
    console.log ( valorEstoque );
    inputEstoque.value = ''

    


    const tabelaProdutos = document.querySelector('[data-list]');
    const linha = document.createElement('tr'); //cria uma nova linha
    
    const itemEan = document.createElement('td'); //cria duas novas células e adiciona conteúdo a elas
    itemEan.textContent = valorEan;

    const itemMarca = document.createElement('td');
    itemMarca.textContent = valorMarca;

    const itemProduto = document.createElement('td');
    itemProduto.textContent = valorProduto;

    const itemModelo = document.createElement('td');
    itemModelo.textContent = valorModelo;

    const itemCor = document.createElement('td');
    itemCor.textContent = valorCor;

    const itemPreco = document.createElement('td');
    itemPreco.textContent = valorPreco;

    const itemEstoque = document.createElement('td');
    itemEstoque.textContent = valorEstoque;

   

    const img1 = document.createElement("img");
    img1.src = "./icons/escrever.png";
    const img2 = document.createElement("img");
    img2.src = "./icons/excluir.png";

    const td = document.createElement("td");
    




    //adiciona as células à linha
    linha.appendChild(itemEan);
    linha.appendChild(itemMarca);
    linha.appendChild(itemProduto);
    linha.appendChild(itemModelo);
    linha.appendChild(itemCor);
    linha.appendChild(itemPreco);
    linha.appendChild(itemEstoque);
    linha.appendChild(img1);
    linha.appendChild(img2);
    
    //adiciona a linha à tabela
    tabelaProdutos.appendChild(linha);
};

const novoItem = document.querySelector('[data-form-button]');
novoItem.addEventListener('click', criarProdutoVenda);






const limparCampos = (eventoLimpar) => {

    eventoLimpar.preventDefault();

    const limparEan = document.querySelector('[data-form-inputean]');
    const valorEan = limparEan.value;
    console.log ( limparEan );
    limparEan.value = '';

    const limparMarca = document.querySelector('[data-form-inputmarca]');
    const valorMarca = limparMarca.value;
    console.log ( limparMarca );
    limparMarca.value = '';

    const limparProduto = document.querySelector('[data-form-inputproduto]');
    const valorProduto = limparProduto.value;
    console.log ( limparProduto );
    limparProduto.value = '';

    const limparModelo = document.querySelector('[data-form-inputmodelo]');
    const valorModelo = limparModelo.value;
    console.log ( limparModelo );
    limparModelo.value = '';

    const limparCor = document.querySelector('[data-form-inputcor]');
    const valorCor = limparCor.value;
    console.log ( limparCor );
    limparCor.value = '';

    const limparPreco = document.querySelector('[data-form-inputpreco]');
    const valorPreco = limparPreco.value;
    console.log ( limparPreco );
    limparPreco.value = '';

    const limparEstoque = document.querySelector('[data-form-inputestoque]');
    const valorEstoque = limparEstoque.value;
    console.log ( limparEstoque );
    limparEstoque.value = '';

}


const cancelarCadastro = document.querySelector('[data-form-button-cancel]');
cancelarCadastro.addEventListener('click', limparCampos);