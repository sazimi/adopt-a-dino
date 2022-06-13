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
    const key = '<span role="presentation">'+ item.label +'</span>';
    return [val, key].join(" ");
}

function generateDino(dino) {
    const tmpl = `
    <div class="dinosaurs__item" id="container" role="presentation">
        <div role="presentation" class="dinosaurs__item-${dino.id}" id="${dino.id}" aria-label="Image of ${dino.nickname}">
            <img role="img" id="dino-img-${dino.id}" src="${dino.img}" alt="Image of ${dino.nickname}" title="Image of ${dino.nickname}">
        </div>
        <div class="dinosaurs__item-info">
            <span role="presentation" class="strong">Name: </span>${dino.nickname} <br>
            <span role="presentation" class="strong">Breed: </span> Breed: ${dino.name}<br>     
            <span role="presentation" class="strong">Length:</span>  ${dino.size} meters <br>
            <span role="presentation" class="strong">Favourite Foor: </span> ${dino.favouriteFood} <br>
            <span role="presentation" class="strong">Period: </span>  ${dino.period}
  
            <h4>★ Habits</h4>
            <ul role="list">
                <li role="listitem"> <span role="presentation" class="strong">Likes:</span>  ${dino.habits.likes.map((i) => `${i}`)}</li>
                <li role="listitem"> <span role="presentation" class="strong">Dislikes:</span> ${dino.habits.dislikes.map((i) => `${i}`)}</li>
                ${dino.characteristic.map(i => `<li role="listitem">${dinoFact(i)} </li>`).join("")}
            </ul>          
            

        </div>

        </div>
    `;
    const range = document.createRange();
    const fragment = range.createContextualFragment(tmpl);
    return fragment;
}

getDino();