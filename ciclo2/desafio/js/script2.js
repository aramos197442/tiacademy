var nome = prompt("Digite seu nome: ");
var num = prompt(nome+" digite um número:");
alert("O número digitado veio como "+typeof(num));
alert(" ... ele será convertido para número!");
var numero = parseInt(num);

document.write("Seja bem-vindo..:"+nome+"<br>");
document.write("Você digitou o número..: ("+numero+")"+"<br>");
document.write("O retorno da comparação booleana é..: "+(numero==numero)+"<br>");
document.write("A soma dos valores é..: "+(numero+numero)+"<br>");
document.write("A subtração dos valores é..: "+(num-num)+"<br>");
document.write("O resto da divisão é..: "+(num%num)+"<br>");
document.write("O quadrado do número digitado é..: "+(num**2)+"<br>");

var fruta = prompt("Agora escolha entre estas frutas [Laranja, Pera, Uva]: ");

switch(fruta){
	case "Laranja": 
		alert("Laranja");
		break;
	case "Pera":
		alert("Pera");
		break;
	case "Uva":
		alert("Uva");
		break;
	default:
		alert("A fruta escolhida não esta na lista!");

}
