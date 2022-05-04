let die1 = Math.floor(Math.random() * 6) + 1;

function printHeart() {
    console.log('<3')
}
printHeart()

// DEFINE YOUR FUNCTION:

function rant(message) {
    console.log(message.toUpperCase())
    console.log(message.toUpperCase())
    console.log(message.toUpperCase())
}
rant('I hate beets')


function repeat(msg, count) {
    let res = ''
    for (let i = 0; i < count; i++) {
        res += msg
    }
    console.log(res);
}
repeat('h1', 4)
repeat('$', 5)


// define isSnakeEyes below:
function isSnakeEyes(one, two) {
    if (one == 1 && two == 1) {
        console.log('Snake Eyes!')
    } else {
        console.log('Not Snake Eyes!')
    }
}

function multiply(num1, num2) {
    return num1 * num2
}

// DEFINE YOUR FUNCTION BELOW:
function isShortsWeather(temp) {
    if (temp >= 75) {
        return true;
    } else {
        return false;
    }
}

// DEFINE YOUR FUNCTION BELOW:
function lastElement(arr) {
    if (arr.length === 0) {
        return null;
    } else {
        return arr[arr.length - 1];
    }
}

function capitalize(str) {
    let str1 = str[0].toUpperCase()
    let arr = str.split('')
    console.log(arr);
    arr.shift()
    arr.unshift(str1)
    let result = arr.join('')
    console.log(result);
    return result
}
capitalize('adshk')

// DEFINE YOUR FUNCTION BELOW:
// function sumArray(arr){
//     let result=0
//   for(let i=0;i<arr.length; i++)
//   result+=arr[i]
//   return result
// }

// DEFINE YOUR FUNCTION BELOW:
// function returnDay(day){
//     if(day<1 || day>7){
//         return null
//     }else if(day===1){
//         return 'Monday'
//     }else if(day===2){
//         return 'Tuesday'
//     }else if(day===3){
//         return 'Wednesday'
//     }else if(day===4){
//         return 'Thursday'
//     }else if(day===5){
//         return 'Friday'
//     }else if(day==6){
//         return 'Saturday'
//     }else if(day===7){
//         return 'Sunday'
//     }
// }

//function Expression
//NOTE: Udemy's coding exercise platform does NOT support the ** operator.  You'll need to multiply a number by itself or use the Math.pow() method.
// let square=function(num){
//     return num*num
// }

obj = {
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
    sunday: 7
}
function returnDay(day) {
    let keys = Object.keys(obj)
    if (day < 1 || day > 7) {
        return null
    }else{
        return keys[day-1]
    }
}
console.log(returnDay(7));



































































