window.onload=function(){

//let i=0;

//for
	/*var arr=['caneta', 'mouse', 'monitor', 'teclado'];
	console.log(`O comprimento do array é: ${arr.length}`);

	for( var inc =0; inc < 4 ; inc++){
		console.log(arr[inc]);
	}

	*/

//for in
	/*
	var arr=['caneta', 'mouse', 'monitor', 'teclado', 'outro elemento'];
	for ( let idx in arr){
		console.log(idx); // traz o indice	
	}
	*/
// for of

		/*var arr=['caneta', 'mouse', 'monitor', 'teclado', 'outro elemento'];

		for(var i of arr){
			console.log(i); // traz o elemento e não seu indice
		}
		*/
//while

	/*
	var x=0;
	while(x < 10){
		x++;
		console.log(x);
	}
	*/
//do while
do {
	n = prompt("Digite zero: ");
	if(n != 0){
		alert("Diferente de zero");
	}
} while (n != 0)

}