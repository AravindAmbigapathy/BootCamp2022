// const button=document.querySelector('button')
// const h2=document.querySelector('h2')
// button.addEventListener('click',function () {
//    const newColor=randomColor()
//     document.body.style.backgroundColor=newColor;
//     h2.innerText=newColor
// })

const randomColor=()=>{
    const r=Math.floor(Math.random()*255);
    const g=Math.floor(Math.random()*255);
    const b=Math.floor(Math.random()*255);
   return`rgb(${r}, ${b}, ${g})`
}

const buttons=document.querySelectorAll('button')

function colorize() {
    this.style.backgroundColor=randomColor()
    this.style.color=randomColor();
}

for (const button of buttons) {
    button.addEventListener('click',colorize)
}

const h1s=document.querySelectorAll('h1');

for (const h1 of h1s) {
    h1.addEventListener('click',colorize)
}

const input=document.querySelector('input')
input.addEventListener('keydown',(e)=>{
    console.log(e.key);
    console.log(e.code);
})


