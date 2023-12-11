const url = 'https://currency-converter18.p.rapidapi.com/api/v1/convert?from=EUR&to=KWD&amount=10';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c014cfedbbmsh41c94c81cd7309ap14c406jsn5fbbb386bd4c',
		'X-RapidAPI-Host': 'currency-converter18.p.rapidapi.com'
	}
};
fetch(url,options).then(result => result.json()).then(({result:{to,from}}) =>{
 to,
 from
})

