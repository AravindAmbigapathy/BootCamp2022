// Your code goes in here:

let product={name:'Gummy Bears',
inStock:true,
price:1.99,
flavors:['grapes','apple','cherry']}

console.log(product.flavors);

const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

//YOUR CODE GOES DOWN HERE:
let fullAddress = restaurant.address+', '+restaurant.city +', '+ restaurant.state+' '+restaurant.zipcode
console.log(fullAddress);

// let num=5
// let str=''
// for (let i = 0; i <= num; i++) {
//     for (let k = 0; k < i; k++) {
//         str+=' '
//     }
//     for (let j = 0; j < num-i; j++) {
//         str+='* '
//     }
//     str+='\n'
// }

//  console.log(str);

// for (let i = 0; i <20 ; i++) {
// if (i%2==0) {
//     console.log(i);
// }
    
// }

// for (let i = 1; i <= 20; i+=2) {
//     console.log(i)
// }
for (let i = 100; i >= 10; i-=10) {
    console.log(i);
    
}