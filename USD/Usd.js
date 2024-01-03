
// E.Print the country that uses US dollars as currency.



const URL= "https://restcountries.com/v3.1/all";
const xhr = new XMLHttpRequest();
xhr.open("GET",URL);
xhr.send();
xhr.onload=()=>{
  const continent = JSON.parse(xhr.response);
  let usdCountries = continent.filter(country => country.currencies && country.currencies.USD)
  for(let country of usdCountries)
  console.log("Countries that use USD :",country.name.common);
    
};







