console.log('I am Aravind');
let num1=1;
let num2=2;
console.log(num1+num2);

console.log('Before condition');
if (1+1===2) {
    console.log('It worked');
}


console.log('After condition');


random=Math.random()
// console.log(random);
if (random<=0.5) {
    console.log(`${random} is less dhan 0.5`);
}else{
    console.log(`${random} is more dhan  0.5`);
}


function isEven(num){
    //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓ 
   if(num%2==0){
       console.log('even')
   }else{
       console.log('odd');
   }
   
    //AND THIS LINE ↑↑↑↑↑
}
isEven(4)

function getColor(phrase){
    //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓ 
   if(phrase=='stop'){
       console.log('red')
   }else if(phrase=='slow'){
       console.log('yellow')
   }else if(phrase=='go'){
       console.log('green')
   }else{
       console.log('purple')
   }
   
    //AND THIS LINE ↑↑↑↑↑
}

console.log('---------------------------');
// let password=prompt('Enter password')


// if(password.indexOf(' ')==-1){
//     if (password.length<6) {
//         console.error('Password length is  not sufficient');
//     }else{
//         console.log('Password is fine');
//     }
// }else{
//     console.log("Don't include space");
// }


// // Change the value of num, so that "YOU GOT ME!" prints out
// const num = 102; // THIS IS THE ONLY LINE YOU SHOULD CHANGE :) 

// // DO NOT TOUCH ANYTHING BELOW (please) 
// if(num <= 100) {
//     if(num >= 50) {
//         console.log("HEY!");
//     }
// } else {
//     if (num < 103) {
//         if(num % 2 === 0){
//             console.log("YOU GOT ME!");
//         }
//     }
// }
if (0) {
    console.log('Truthy');
}else{
    console.log('Falsy');
}
if (NaN) {
    console.log('Truthy');
}else{
    console.log('Falsy');
}
if ('') {
    console.log('Truthy');
}else{
    console.log('Falsy');
}

const mystery = 'Peanut7'; //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE

// LEAVE THIS CODE ALONE! (pretty please)
if(mystery[0] === 'P' && mystery.length > 5 && mystery.indexOf('7') !== -1){
    console.log("YOU GOT IT!!!");
}

if (1==1 && '1==1') {
 console.log('true');   
}
if (1==1 || '1==1') {
 console.log('true');   
}
if (1==1 || '1===1') {
 console.log('true');   
}



console.log('---arrays----');
console.log(typeof([1,2,3]));

const leaderboard = ['Harry', 'Lua', 'Hermione', 'Bellatrix']; //DON'T TOUCH THIS LINE!

// YOUR CODE BELOW HERE:
leaderboard[1]='Luna'
leaderboard[3]='Draco'



