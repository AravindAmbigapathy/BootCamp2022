

document.getElementById("demo").innerHTML = "Hello World!";

document.getElementById("demo").innerHTML = "I have changed!";
// let h1Tag=document.createElement('h1')
// h1Tag.innerText='I am h1 tag'
// document.body.appendChild(h1Tag);


let paraTag=document.getElementById('para')
console.log(paraTag);
// Write your code in here:
let image=document.getElementById('unicorn')
let heading=document.getElementById('mainheading')


let pTag=document.getElementsByTagName('p')
console.log(typeof(pTag));  

let head3=document.querySelector('.h3Tag')
head3.innerText='This is changed'


let head4=document.querySelectorAll('h4')
console.log(head4);

// Your code goes in here!
let doneTodos=document.querySelectorAll('.done')
let checkbox=document.querySelector('input[type=checkbox]')


// YOUR CODE GOES IN HERE:6
document.querySelector('span').innerText='Disgusting';

// The url you need: 'https://devsprouthosting.com/images/chicken.jpg'
document.querySelector('img').src="https://devsprouthosting.com/images/chicken.jpg"
document.querySelector('img').alt="chicken"

// WRITE YOUR CODE IN HERE:
let listTag=document.querySelectorAll('li');
// for(let i=0;i<listTag.length;i++){
 for(let i of listTag)   
i.classList.toggle('highlight');


// WRITE YOUR CODE IN HERE:
let divs=document.querySelector('#container');
let button=document.createElement('button');
button.innerText='heu!'

for(var i = 0, len = divs.length;i<len;i++){
    document.divs.appendChild(button);
}
