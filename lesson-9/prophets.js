const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

async function getJSON() {
    try {
        let res = await fetch(requestURL);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderProphets() {
    let prophetsJSON = await getJSON();
    let prophets = prophetsJSON['prophets'];

    let html = '';
    prophets.forEach(prophet => {
        let htmlSegment =  `
    <section class="prophet">                            
        <h2>${prophet.name} ${prophet.lastname}</h2>
        <p>Date of Birth: ${prophet.birthdate}</p>
        <p>Place of Birth: ${prophet.birthplace}</p>        
        <picture>
            <img src="${prophet.imageurl}" alt="${prophet.name} ${prophet.lastname}">
        </picure>
    </section>`;    
        html += htmlSegment;
    });

    let container = document.querySelector('.cards');
    container.innerHTML = html;
}

renderProphets();