const dinosaurlistElement = document.querySelector('#dinosaurlist');

async function getDino() {
    console.log("get dino");
    const payload = await fetch('/api/dinos', {
        method: 'GET'    });
    // const response = await fetch('/api/Get');
    // const payload = await response.json();
    const data = await payload.json();
    console.log(data);

    if (payload.data.dinos) {
        document.querySelector("#empty").remove();
        for (const dino of payload.response.dinos) {
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

    fragment.querySelector('input').addEventListener('change', updateTask);
    
    return fragment;
}

getDino();