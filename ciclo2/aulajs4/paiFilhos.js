window.onload=function(){

	/*const pai= document.querySelectorAll("#pai");
	pai.forEach((pegarFilhas)=>{
		pegarFilhas.addEventListener('click', (filha)=>{

			alert(filha.target.textContent); //Mostra o texto do objeto clicado da lista

		})
	})*/

	const btn = document.querySelector("#btn");
	const outroPai = document.querySelector("#outroPai");

	btn.addEventListener('click', ()=>{
		li = document.createElement("li");

		outroPai.appendChild(li).textContent = 'Elemento filho';
		
	})

}