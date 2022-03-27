
  const URL = 'https://restcountries.com/v3.1/all';
  let data = await fetch(URL);
    data = await data.json();
  const URL1 = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
  let rates = await fetch(URL1);
    rates = await rates.json();
  console.log(rates);
  console.log(data); 
    let infoCountriesTag  = document.getElementById('infoCountries');
    infoCountries.innerHTML = rates.map(currency=>
    {   let photo='';
    let date = currency.exchangedate;
    document.getElementById('date').innerHTML= date;
        data.forEach(flag=>
            {  if(flag.currencies)
                {let signs=Object.keys(flag.currencies);
                 if(signs.includes(currency.cc)) 
                 photo+='<img src="'+flag.flags.png+'" title = "'+flag.name.common+'">'
                }
            });       
         return ` <ul class="list-group list-group-horizontal">
                    <li class="list-group-item current">${currency.txt} ${'('}${currency.cc}${')'}</li>
                    <li class="list-group-item current">Курс:${currency.rate}</li>
                    <li class="list-group-item current">${photo}</li>
                  </ul>`
    }).join('');
