//window.onload = function(){

	const itensDaCesta = document.querySelectorAll("#cestaDoCliente > li.itemDaCesta"); //Nova
	itensDaCesta.forEach((cesta)=>{
		cesta.addEventListener('click', ()=> {
			console.log(`Selecionado o produto ${cesta.textContent}`);
		})
	})

//}