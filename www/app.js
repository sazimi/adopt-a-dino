const dinosaurlistElement = document.querySelector('#dinosaurlist');

async function getDino() {
    const payload = await fetch('/api/dinos', {
        method: 'GET'
    });
    const data = await payload.json();

    if (data) {
        document.querySelector("#empty").remove();
        for (const dino of data) {
            dinosaurlistElement.appendChild(generateDino(dino))
        }
    }
}

function dinoFact(item) {
    const val = item.value ? '✅' : '❌';
    const key = '<span>'+ item.label +'</span>';
    return [val, key].join(" ");
}

function generateDino(dino) {
    const tmpl = `
    <div class="dinosaurs__item" id="container">
        <div class="dinosaurs__item-${dino.id}" id="${dino.id}">
            <img role="img" id="dino-img-${dino.id}" src="${dino.img}">
        </div>
        <div class="dinosaurs__item-info">
            <span class="strong">Name: </span>${dino.nickname} <br>
            <span class="strong">Breed: </span> Breed: ${dino.name}<br>     
            <span class="strong">Length:</span>  ${dino.size} meters <br>
            <span class="strong">Favourite Foor: </span> ${dino.favouriteFood} <br>
            <span class="strong">Period: </span>  ${dino.period}
  
            <h4>★ Habits</h4>
            <ul>
                <li> <span class="strong">Likes:</span>  ${dino.habits.likes.map((i) => `${i}`)}</li>
                <li> <span class="strong">Dislikes:</span> ${dino.habits.dislikes.map((i) => `${i}`)}</li>
                ${dino.characteristic.map(i => `<li>${dinoFact(i)} </li>`).join("")}
            </ul>          
            

        </div>

        </div>
    `;
    const range = document.createRange();
    const fragment = range.createContextualFragment(tmpl);
    return fragment;
}

getDino();