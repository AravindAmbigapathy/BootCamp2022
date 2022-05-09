let arr=[10,20,30,40,20,50,60,80,50]
let str='I am a Developer'

// forEach method
arr.forEach((ele)=>{
    console.log(ele);
});

let maping = arr.map((num)=>{
    return num*2
})
console.log(maping);


const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

// Write your code here
let firstNames=fullNames.map((name)=>{
    return name.first
})
console.log(firstNames);

let greet=str =>`Hey ${str}!`

let filt=arr.filter(ele=>ele>30)
console.log(filt);

function validUserNames(arr){
    let res=arr.filter(ele=>ele.length<10)
    return res
}
validUserNames(['sadsv','adsfghfdfsas','adsfg']);


function allEvens(arr){
    return arr.every(ele=>ele%2===0)
    
}

//spread
const arrayOne = ['a', 'b', 'c'];
const arrayTwo = [1, 2, 3];
const arraysCombined = [...arrayOne,...arrayTwo];

const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }
  
  const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}


let array1=[1,2,3,4,5]
console.log(array1.length);

array1[5]=25
console.log(array1);
array1['dcfgv']=55
console.log(array1);



console.log(string);

var string='sedrfgh'





