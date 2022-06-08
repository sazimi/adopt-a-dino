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

function generateDino(dino) {
    const tmpl = `
    <div class="dinosaurs__item">
            <div class="dinosaurs__item-img" src="${dino.id}"><img
                    src="${dino.img}">
            </div>
            <div class="dinosaurs__item-info"><span class="dinosaurs__item-title">Name: ${dino.nickname}</span> <br>Breed:
            ${dino.name}</div>
        </div>
    `;
    const range = document.createRange();
    const fragment = range.createContextualFragment(tmpl);
    return fragment;
}

getDino();