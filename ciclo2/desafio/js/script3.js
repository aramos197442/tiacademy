window.onload = function(){

	const valor1 = document.querySelector("#v1");
	const valor2 = document.querySelector("#v2");
	const res = document.querySelector("#res");
	const btnConferir = document.querySelector("#confere");

	btnConferir.addEventListener('click', ()=>{
		var cx1 = valor1.value;
		var cx2 = valor2.value;
		var r = Number(cx1)+Number(cx2);

		if(r == Number(res.value)){
			alert("Resultado confirmado!!!");
		} else { 
			alert("Resultado não confere!!!");
		}
		
		
	});
}