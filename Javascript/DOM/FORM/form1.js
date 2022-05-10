// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');


form.addEventListener('submit',function (event) {
    event.preventDefault();
    
let adding=document.createElement('li');
adding.innerText= `${document.querySelector('#qty').value}
 ${document.querySelector('#product').value}`;

document.querySelector('#list').append(adding);

document.querySelector('#qty').value=''
document.querySelector('#product').value=''
});

// WRITE YOUR CODE IN HERE:



for(let i=0;i<100;i++){
    let button=document.createElement('button');
    button.innerText='hey!';
    document.querySelector('#container').appendChild(button);
    
    }