// B.Get all the countries with a population of less than 2 lakhs using Filter function


const URL= "https://restcountries.com/v3.1/all";
const xhr = new XMLHttpRequest();
xhr.open("GET",URL);
xhr.send();
xhr.onload=()=>{
  const continent = JSON.parse(xhr.response);
  let country = continent.filter(country => country.population < 200000)
    for(let count of country)
    {  
        console.log("Country Name :",count.name.common);
        console.log("Country Population :",count.population);
    }
};