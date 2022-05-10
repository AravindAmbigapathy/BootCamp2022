// const form1=document.querySelector('#shelterForm')
// const input1=document.querySelector('#catName')
// form1.addEventListener('submit',function (e) {
//     e.preventDefault();
//     console.log('Submitted!!!!!!!!!');
//     console.log(input1.value);
// });

const input=document.querySelector('input')
const  h2=document.querySelector('h2')
// input.addEventListener('change',function (e) {
//     console.log('Change Event!');
// })
input.addEventListener('input',function (e) {
    h2.innerText=input.value
})


let val=document.querySelector('#username');
let h1=document.querySelector('h1');
val.addEventListener('input',()=>{
    h1.innerText=`Welcome, ${val.value}`;
    if(val.value===''){
        h1.innerText='Enter Your Username';
    }
});

// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
// const form = document.querySelector('form');

// form.addEventListener('submit', function (e) {
//     e.preventDefault();

//     let asd = document.querySelector('product').value;
//     let zxc = document.querySelector('qty').value;
//     console.log(asd);

//     let list = document.createElement('li');
//     list.innerText = `${zxc.value} ${asd.value}`;
    
//     document.querySelector('#list').    append(list);
//     asd = '';
//     zxc = '';

// });



































































