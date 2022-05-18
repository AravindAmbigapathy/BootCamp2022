// function makeClor(r,g,b) {
//     const color={}
//     color.r=r;
//     color.g=g;
//     color.b=b;
//     color.rgb=function () {
//         const {r,g,b}=this;
//         return `rgb(${r},${g},${b})`
//     }
//     color.hex = function () {
//         const {r,g,b}=this;
//         return (
//             '#' + ((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1)
//         );
//     }
//     return color;
// }
// const firstColor=makeClor(35,200,150)
// firstColor.rgb()


function Color(r,g,b) {
    this.r=r
    this.g=g
    this.b=b
    
}

let obj1=new Color(255,150,200)


function Car(cname,year) {
    this.cname=cname
    this.year=year
    console.log(this);
    this.getCarDetails=function () {
        return `${this.cname} manufactured on ${year}`
    }
}

const car1=new Car('BMW',2015)
console.log(car1);
const car2=new Car("Audi",2002)
console.log(car2);

 
class Cars{
    constructor(cname,year){
        this.cname=cname
        this.year=year
    }
    getCarDetails(){
        return `${this.cname} is manufactured on ${this.year}`
    }
}

const cars1= new Cars('BMW',1998)
const cars2=new Cars("Ferari",2002)
const cars3=new Cars("Jaguar",1994)

console.log(car1.getCarDetails());
console.log(cars1,cars2,cars3);




let runs=[46,46,62,78,63,76,1,12,35,85,65,55,24,45]

// console.log(runs);
// let sum=[]
// let num=Math.ceil((runs.length)/3)
// // for(let i=0; i<runs.length;i+=3){
// //  let total=runs[i]+runs[i+1]+runs[i+2];
// //  sum.push(total)
// // }

// // console.log(sum);

// console.log(num);

// for (let i = 0; i < num; i++) {
//    let first= runs.splice(0,3)
//     let one=first.reduce((ini,cur)=>ini+cur)
//     sum.push(one)
// }
// console.log(sum);



let arr=['red','pink','green','red','yellow','pink','green','orange']

let result=arr.reduce((iniVal,curVal)=>{
if (iniVal.indexOf(curVal)===-1) {
    iniVal.push(curVal)
}
return iniVal
},[])

console.log(result);















































































































































































































































