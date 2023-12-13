export default class sla {
	static search(from, to , valor) {
		const url = `https://currency-converter18.p.rapidapi.com/api/v1/convert?from=${from}&to=${to}&amount=${valor}`;
		const key = 'c014cfedbbmsh41c94c81cd7309ap14c406jsn5fbbb386bd4c'
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': key,
				'X-RapidAPI-Host': 'currency-converter18.p.rapidapi.com'
			}
		};
		return fetch(url,options).then(result => result.json())
	}
	
} 

