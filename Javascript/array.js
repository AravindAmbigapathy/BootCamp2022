let arr=[1,2,5,6,4]

//push
arr.push(12)
//shift  
arr.unshift(45)
console.log(arr);

let arr1=[1,2,5,4,6,8,6,4]
arr1.pop()
arr1.shift()
console.log(arr1);

let arr2=arr.concat(arr1)
console.log(arr2);

console.log(arr2.indexOf(5));
console.log(arr2.lastIndexOf(5));

let num=[1,2,3];
let numsCopy=num;
console.log(numsCopy==num);     //true

let array=[1,2,5,3,4,5,11]
console.log(array.sort((a,b)=>a-b));


const array1=[1,2,5,4,8]
array1.pop()
console.log(array1);








