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

	var armazenaItens =[];
	//var armazenaNo = [];
	var totalPedido = 0;


	itemProduto.forEach((item)=>{
		item.addEventListener('click', ()=>{
			li = document.createElement('li');
			li.className = 'itemCesta'; 
			li.dataset.precos = item.dataset.precos;
			//armazenaNo.push(li);

			li.addEventListener('click', (no)=>{
				console.log(no.firstChild.nodeValue);
				cestaDoCliente.removeChild(no);
				totalPedido -= Number(no.dataset.precos);
				mostraTotalCompra.value = totalPedido.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
			})

			if(armazenaItens.indexOf(item.textContent) == -1){
				armazenaItens.push(item.textContent);

				cestaDoCliente.appendChild(li).textContent = item.textContent;
				totalPedido += Number(item.dataset.precos);
				mostraTotalCompra.value = totalPedido.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
				
			}else{
				alert(`Este item ${item.textContent} já consta de sua cesta`);

			}
		})
	})

}