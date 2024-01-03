
// C.Print the following details name, capital, flag, using forEach function


const URL= "https://restcountries.com/v3.1/all";
const xhr = new XMLHttpRequest();
xhr.open("GET",URL);
xhr.send();
xhr.onload=()=>{
  const details = JSON.parse(xhr.response);
  
  details.forEach(country => {
    if(typeof country.capital === 'object')
    {
    console.log("Name :",country.name.common)
    console.log("Capital :",country.capital[0])
    console.log("Flag :",country.flags.png)
    }
    else
    {
    console.log("Name :",country.name.common)
    console.log("Capital : No data Found")
    console.log("Flag :",country.flags.png)
    }
  })
};



