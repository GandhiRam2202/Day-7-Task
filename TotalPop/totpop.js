// D.Print the total population of countries using reduce function


const URL= "https://restcountries.com/v3.1/all";
const xhr = new XMLHttpRequest();
xhr.open("GET",URL);
xhr.send();
xhr.onload=()=>{
  const population = JSON.parse(xhr.response);
 let popu = [];
  for(let totalPopulation of population)
  popu.push(totalPopulation.population);
  let totPop = popu.reduce((a,b) =>
  {
    return a + b;
  })
  console.log("Total Population of All Countries :",totPop);
};


