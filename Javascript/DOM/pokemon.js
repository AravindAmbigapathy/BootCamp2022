// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png


const container=document.querySelector('#container')
let baseURL='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

for (let i = 1; i < 151; i++) {
    let poke=document.createElement('div');
    poke.classList.add('pokemon')
    let label=document.createElement('span');
    label.innerText=`# ${i}`;
    const neImg=document.createElement('img')
    neImg.src=`${baseURL}${i}.png`

    poke.appendChild(neImg);
    poke.appendChild(label);
    container.appendChild(poke)
}
