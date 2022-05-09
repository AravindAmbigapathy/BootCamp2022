let arr=[415,65,64,653,65,6356,62,3465,7112,64165426,9865,325,7413]


const [one,two,three,four, ...elsee] = arr;
console.log(three);
console.log(elsee);


//object
const animals = {
    'cat': 'meow',
    'dog': 'woof',
    'cow': 'moo',
    'sheep': 'baaah',
    'bird': 'tweet'
  };


const {cat,dog,cow} = animals

console.log(cat);

//allias names
const {bird:crow}=animals
console.log(crow);

