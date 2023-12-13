import sla from "./buttons.js";

const button = document.querySelector('#btn-result').addEventListener('click',(event)=>{
	event.preventDefault();
	const va = document.querySelector('#valor')
	const de = document.querySelector('#from')
	const para = document.querySelector('#to')
 


	sla.search(de.value ,para.value,Number(va.value)).then(data =>{
		let resultado = Number(data.result.convertedAmount).toFixed(2)
		const result = document.querySelector('#result').innerHTML = `Resultado : ${resultado}`
	})


})

