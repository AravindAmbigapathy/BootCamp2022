const btn =document.querySelector('#v2');
console.log('asdfg');

btn.onclick = function () {
    console.log('Clicked me');
}



function scream() {
    console.log('AAAAHHHHHH');
    console.log('Stop touching me!');
}
btn.onmouseenter=scream;


document.querySelector('h1').onclick=function () {
    alert('you clicked h1')  
} 


const btn3 =document.querySelector('#v3');
btn3.addEventListener('dblclick', function(){
    alert('clicked')
})

function twist() {
    console.log('Twist');
}
function shout() {
    console.log('Shout');
}

const tasButton=document.querySelector('#tas')

// tasButton.onclick=twist;     //wont work
// tasButton.onclick=shout;

tasButton.addEventListener('click',twist, {once:true})
tasButton.addEventListener('click',shout)
