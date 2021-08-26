	const msgLog = function(msg=''){

	try{
		if(msg.length <= 6) {throw "Digite uma mensagem válida"};
	}catch(erro){
		alert(`Erro: ${erro}`)
	}

	}

	const Produtos = [{ codProduto:1, descProduto: 'Mesa', precoProduto: 890.00}];

	export{msgLog, Produtos};
