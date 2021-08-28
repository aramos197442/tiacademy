window.onload  = function(){


// Mostra uma lista de produtos para selecionar na compra
	(()=>{
		let mostrarProdutosCliente = document.querySelector("#content-produtos > ul#produtos");

		for(let idx in produtos){
			mostrarProdutosCliente.innerHTML += `<li class='itemProduto' data-precos=${produtos[idx].prodPreco}>${produtos[idx].prodDesc}</li>`
		}
	})(produtos)

//Compra

	const itemProduto = document.querySelectorAll("#produtos > li.itemProduto");
	const cestaDoCliente = document.querySelector("ul#cestaDoCliente");
	const mostraTotalCompra = document.querySelector("#mostraTotalCompra");

	var itemCesta

	var armazenaItens =[];
	//var armazenaNo = [];
	var totalPedido = 0;


	itemProduto.forEach((item)=>{
		item.addEventListener('click', ()=>{
			li = document.createElement('li');
			li.className = 'itemCesta'; 
			li.dataset.precos = item.dataset.precos;

			if(armazenaItens.indexOf(item.textContent) == -1){
				armazenaItens.push(item.textContent);


				/* Alterei aqui separando a linha "cestaDoCliente.appendChild(li).textContent = item.textContent;" 
				  em duas linhas criando a variável itemCesta que tem o endereço do Nó a ser removido. */
				itemCesta = cestaDoCliente.appendChild(li);
				itemCesta.textContent = item.textContent;
				/* --- aqui termina a identificação do Nó a ser removido. */

				/* A partir daqui cria-se o evento de retirar o item da cesta de compras e do array armazenaItens 
				  para que o usuário possa acrescentar na cesta de novo se quiser.Também subtrai o valor do item do
				  total da compra.*/  
				itemCesta.addEventListener('click', (foco)=>{
					armazenaItens.splice(armazenaItens.indexOf(foco.target.textContent),1); //Encontra o item e o exclui do array.
					cestaDoCliente.removeChild(foco.target); //Remove o Nó (li).
					totalPedido -= Number(foco.target.dataset.precos); //Subtrai o valor do item excluído do total da compra.
					mostraTotalCompra.value = totalPedido.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}); //Apresenta o novo valor.
				});
				/* Finaliza o evento de exclusão de itens em cesta de compras. */


				totalPedido += Number(item.dataset.precos);
				mostraTotalCompra.value = totalPedido.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
				
			}else{
				alert(`Este item ${item.textContent} já consta de sua cesta`);

			};
		});

	});


}

