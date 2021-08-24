
	/*var nome = "Alexandre";

	console.log(nome.length);
	console.log(nome[0]);
	*/
// match()

/*var palavras = "Maçã doce";
	console.log(palavras.match(/d/)); // procura a letra "d" na cadeia de caracteres
	console.log(palavras.match(/d/gi)); //procura a letra tanto maiuscula quanto minuscula
*/

//search 

	//console.log(palavras.search(/d/gi)); //procura a letra tanto maiuscula quanto minuscula

//replace - procura a substitui um

	/*var str = "Lorem ipsum dolor sit, amet consectetur, adipisicing elit. Laboriosam laborum doloribus porro quas eligendi voluptas autem explicabo minus ullam, quaerat ab corrupti perspiciatis placeat nulla provident velit, quam iusto qui!";

	var mudarStr = str.replace('e','X'); //altera somente a primeira letra encontrada
	console.log(mudarStr);

	var mudarDeNovo = str.replaceall(/e/gi, 'X'); //altera todas as letras, oo grupo de caracteres, pelo 'X'
	console.log(mudarDeNovo);
	*/

//localeCompare()
	/*
	var comp1 = 'Comparar';
	var comp2 = 'comparar';

	var comparacao = comp1.localeCompare(/comp2/gi);
	console.log(comparacao);
	*/
//trim - Remove espacos da direita e da esquerda da string. Não remove espaços internos.

	/*var p = '    palavra    ';
	console.log(p);

	console.log(p.trim());

	replace(/\+/gi,'') //expressão regular para usar o sinal de + na busca e trocar por '' (nada)
	*/

	//toLocaleString
	var valor = 1.35;
	var formatarMoeda = valor.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'}); \\ formato R$ 1,35

	//var formatarMoeda = valor.toLocaleString('pt-BR'); \\ formato 1,35
	console.log(formatarMoeda);



