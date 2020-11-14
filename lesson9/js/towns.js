const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];

    const townFilter = towns.filter(
      (town) =>
      town.name == 'Preston' ||
      town.name == 'Fish Haven' ||
      town.name == 'Soda Springs'
    );

    console.table(jsonObject); // temporary checking for valid response and data parsing
    townFilter.forEach((town) => {
      let card = document.createElement('section');
      let div =document.createElement('div');
      let h2 = document.createElement('h2');
      let motto = document.createElement('h4');
      let year = document.createElement('p');
      let population = document.createElement('p');
      let rainfall = document.createElement('p');
      let img = document.createElement('img')

      img.setAttribute('src', `images/${town.photo}`);
      img.setAttribute('alt', town.name);
      h2.textContent = town.name;
      motto.textContent = town.motto;
      year.textContent = 'Year Founded: ' + town.yearFounded;
      population.textContent = 'Population: ' + town.currentPopulation;
      rainfall.textContent = 'Annual Rain Fall: ' + town.averageRainfall;

      card.appendChild(div);
      div.appendChild(h2);
      div.appendChild(motto);
      div.appendChild(year);
      div.appendChild(population);
      div.appendChild(rainfall);
      div.appendChild(img);


      document.querySelector('div.cards').appendChild(card);
    });
  });