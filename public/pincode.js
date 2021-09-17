let countries;
const countriesList = document.getElementById('countries');

fetch("https://restcountries.eu/rest/v2/all")
.then(res => res.json())
.then(data => initialize(data))
.catch(err => console.log(err))

function initialize(countriesData){

    countries = countriesData;
    let options = "";

    countries.forEach(country => options += `<option value="${country.alpha2Code}">${country.name}</option>"`)
    countriesList.innerHTML = options;
}

