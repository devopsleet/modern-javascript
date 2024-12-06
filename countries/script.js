'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = (data, className='') => {
  const html = `
    <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${data.population}</p>
            <p class="country__row"><span>🗣️</span>LANG</p>
            <p class="country__row"><span>💰</span>CUR</p>
          </div>
        </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
};

// const getCountry = country => {
//   const request = new XMLHttpRequest();
//   request.open(
//     'GET',
//     `https://countries-api-836d.onrender.com/countries/name/${country}`
//   );
//   request.send();

//   request.addEventListener('load', function (params) {
//     console.log(this.responseText);

//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     renderCountry(data)

//     // Get neigbor country
//     const [neighbors] = data.borders;

//     const request2 = new XMLHttpRequest();
//   request2.open(
//     'GET',
//     `https://countries-api-836d.onrender.com/countries/alpha/${neighbors}`
//   );
//   request2.send();

//   request2.addEventListener('load', function() {
//     const data2 = JSON.parse(this.responseText);
//     console.log(data2);

//     renderCountry(data2, 'neighbour')
//   })
  
//   });
// };

// getCountry('Italy');

// const getCountryData = function(country){
// fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
// .then(res => {
//   console.log(res.json);
// //return res.json()
// })
// .then(data => {
//     renderCountry(data[0]);
//     const neighbour = data[0].borders[0];

//     return fetch(`https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`)
// })
//     .then(res2 => res2.json())
//     .then(data2 => renderCountry(data2, 'neighbour'))
//     .catch(err => alert(err))

// };


// btn.addEventListener('click', () => {
//   getCountryData('usa');
// })


// // Promise.resolve({"message":"Gagan is good"}).then(response => console.log(response.json));

// NavigationPreloadManager.getCountryData

(async (name = prompt('Enter Country name')) => {
  //const countryName = name;
  const response = await fetch(`https://countries-api-836d.onrender.com/countries/name/${name}`)
  console.log(response);
  console.log(response.ok);

  try {
    
    const data = await response.json()
    console.log(data[1].population);

  }catch(error){
    console.error(error)
  }
})()

//getCountryData('portugal', `https://countries-api-836d.onrender.com/countries/name/portugal`)