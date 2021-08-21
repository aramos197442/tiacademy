/* click - Ao clicar em algum elemento HTML
mousemov - Ao mover o cursor do mouse entra num elemento
mouseover - Ao mover o cursos do mouse sobre um elemento
mouseout - Ao mover o cursor do mouse para fora do elemento
dblclick - Ao efetuar duplo click (rápido) no elemento
blur - Ao perder o foco do elemento, geralmente associado ao elemento HTML Text
*/

window.onload = function(){


	//alert("Alerta");
	const btn1 = document.getElementById("btn1");
	//console.log(btn1);
	

	/* Forma mais descritiva de executar a função msg() dentro do addEventListener.
	  detalhe para a implementação equivocada da função msg() dentro do arquivo eventos.js ao invés de obj.js

	function msg(){
		alert("Alerta!!!");

	}

	btn1.addEventListener('click',msg());
	*/

	/*  Agora uma forma mais elegante de se fazer o mesmo... */

	//btn1.addEventListener('click', ()=>{ alert('Alerta!!!')});

	// Agora trocando o document.getElementById() por querySelector()

	const cxTexto = document.querySelector("#texto");
	const btn2 = document.querySelector("#btn1"); //identificacao do ID no css
	const legP = document.querySelector(".legenda");
	const trocaSenha = document.querySelector('#verSenha');
	const cxSenha = document.querySelector('#senha');



	btn2.addEventListener('click', ()=>{ 
		//alert('Alerta!!!');
		//legP.innerHTML = "Manipulando o DOM";
		legP.innerHTML += cxTexto.value;
	} );	

//	legP.addEventListener('click', ()=>{
//		legP.innerHTML = '';
//	})

	//Este trecho faz o efeito de trocar o tipo 'password' da entrada de texto para 'text' e vice-versa 

	trocaSenha.addEventListener('click', ()=>{
		//getAttribute() - pegar um atributo
		//settAttribute() - setar um atributo
		if(cxSenha.getAttribute('type')=='password'){
			cxSenha.setAttribute('type', 'text');
		}else{
			cxSenha.setAttribute('type', 'password');
		}

	});

	// Alterar background

	const cxTrocaBg = document.querySelector("#cxTbg");

	cxTrocaBg.addEventListener('blur', ()=>{
		cxTrocaBg.setAttribute('class','corBg');
	});

	// Somar valores
	const valor1 = document.querySelector("#v1");
	const valor2 = document.querySelector("#v2");
	const btnSomar = document.querySelector("#soma");
	const spResultado = document.querySelector("#resultado");

	btnSomar.addEventListener('click', ()=>{
		var cx1 = valor1.value;
		var cx2 = valor2.value;
		var r = Number(cx1)+Number(cx2);
		
		spResultado.innerHTML = r ;

	})

	// evento Modal

	const btnModal = document.querySelector("#chamarModal");
	const janelaM = document.querySelector("#janModal");
	const closeMod = document.querySelector("#fecharModal");


	btnModal.addEventListener('click', ()=>{
		janModal.setAttribute('class', 'modal');
	})

	janelaM.addEventListener('click', ()=>{

		janelaM.classList.remove('modal');
	});
}