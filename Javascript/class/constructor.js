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




































































































































































































































































