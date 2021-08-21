/* objetos */

function Pessoa(nome, sobrenome, idade){
	this.nome = nome;
	this.sobrenome = sobrenome;
	this.idade = idade;

}

var ps1 = new Pessoa("Alexandre", "Silva", 46);
console.log("Nome "+ps1.nome+" "+ps1.sobrenome +" idade: "+ps1.idade);

var ps2 = new Pessoa("Maria", "João", 12);
console.log("2º Nome "+ps2.nome+" "+ps2.sobrenome +" idade: "+ps2.idade);

var objPessoa = {
	rg : "1234",
	cpf : "12324456788"
};
console.log(typeof(obpessoa));

console.log("RG: "+objPessoa.rg);

function Pessoa2(nome, sobrenome, idade){
	this.nome = nome;
	this.sobrenome = sobrenome;
	this.idade = idade;
	this.doc = {rg:'5679',
				cpf:'109729926'}

}


var pessoa2 = new Pessoa2('Rafael', 'Peses', 23);

console.log("Nome3: "+pessoa2.nome+" "+pessoa2.sobrenome+" "+pessoa2.doc.rg);

/* Template String */

console.log(`Nome ${pessoa2.nome} ${pessoa2.doc.rg}`); //Com acento agudo no lugar de aspas ou apostrofes

/* arrays */

function Pessoa3(nome, sobrenome, idade, doc=[]){
	this.nome = nome;
	this.sobrenome = sobrenome;
	this.idade = idade;
	this.doc = {rg:doc[0],
				cpf:doc[1]};

}

var pessoa3 = new Pessoa3('Rafael', 'Peses', 23, ['456','939494']);

console.log(`Nome ${pessoa2.nome} CPF: ${pessoa2.doc.cpf}`); //Com acento agudo no lugar de aspas ou apostrofes
