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

const getCountry = country => {
  const request = new XMLHttpRequest();
  request.open(
    'GET',
    `https://countries-api-836d.onrender.com/countries/name/${country}`
  );
  request.send();

  request.addEventListener('load', function (params) {
    console.log(this.responseText);

    const [data] = JSON.parse(this.responseText);
    console.log(data);
    renderCountry(data)

    // Get neigbor country
    const [neighbors] = data.borders;

    const request2 = new XMLHttpRequest();
  request2.open(
    'GET',
    `https://countries-api-836d.onrender.com/countries/alpha/${neighbors}`
  );
  request2.send();

  request2.addEventListener('load', function() {
    const data2 = JSON.parse(this.responseText);
    console.log(data2);

    renderCountry(data2, 'neighbour')
  })
  
  });
};

getCountry('Italy');

