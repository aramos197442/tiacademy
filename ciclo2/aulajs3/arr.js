// Arrays

var frutas = ['Uva','Banana','Pera', 'Melão', 'Amora'] ;
console.log(frutas.length);
console.log(`Qtas frutas temos: ${frutas.length} fruta1: ${frutas[0]}`);

var frutas2 = ['Maça','Laranja','Abacate'] ;

var todasFrutas = frutas.concat(frutas2);

console.log(frutas);
console.log(frutas2);
console.log(todasFrutas);

// indexOf Procura por elemento dentro do array 

var retornoIndexOf = todasFrutas.indexOf('Amora');
console.log(retornoIndexOf);

// join Junta os elementos de um array em uma string

var stringArray = todasFrutas.join();
console.log(`Todas as frutas ${stringArray}`);

// push Vain inserir um elemento no final do array

var outraLista = ['Bola','Peteca'];
var novaLista = outraLista.push('Boneca', 'Pipa');

console.log(novaLista);

console.log(outraLista);

console.log(outraLista[3]);

// pop Remove o ultimo elemento do array

console.log(outraLista.pop());
console.log(outraLista);

// reverse Inverte a ordem do array
console.log(todasFrutas.reverse());
console.log(todasFrutas);

//shift Remove o primeiro elemento do array;
console.log(todasFrutas.shift());
console.log(todasFrutas);

//sort Ordena os elementos do array
var num = [199,5,3,7,9,6,0];
console.log(num);
num.sort();
console.log(num);

// toString Converte o array em string
//Vide join()

//unshift Insere um novo elemento no inicio do array
num.unshift(22);
console.log(num);

// splice Identifica um elemento pelo indice e retira o numero de elementos definido no segundo parametro

console.log(todasFrutas);
console.log(todasFrutas.splice(1,1));
console.log(todasFrutas);
todasFrutas.splice(2,3);
console.log(todasFrutas);

// arrays de objetos

var dados = [
			{nome:'Marcelo'},
			{nome:'Rafael'}
			];

console.log(dados[0].nome);
console.log(dados[1].nome);




