// const http=require('http')
// const calc=require('./calc')

// http.createServer((rec,res)=>{
//     res.writeHead(200,{'content-Type':'text/html'})
//     res.end('welcome to node world')
// }).listen(3000)


// let result=calc.add(2,3)

// console.log('The add function result is',result);

// const fs=require('fs')

// fs.readFile('./calc.js','utf8',(err,data)=>{
//     console.log(data);
// })

// fs.writeFile('calc1.js','console.log("I am calc1.js")',(err)=>{
// console.log('data saved');
// })

// fs.appendFile('./calc1.js','console.log("i am adding new")',(err)=>{
//     console.log('data added');
// })

// fs.unlink('./calc1.js',(err)=>{
//     console.log('file deleted');
// })



let express = require('express')

const app = express();

app.get('/', (rec, res) => {
    res.send('Hello World');
})

app.get('/arvind', (rec, res) => {
    res.send('Yes Arvind, You are in right path ')
})


app.get('/arvind/:id', (rec, res) => {
    const id = rec.params.id
    switch (id) {
        case 'name':
            res.send('Name is Arvind')
            break;
        case 'age':
            res.send('age is 23')
            break;
        case 'nationality':
            res.send('Nationality is indian')
            break;

        default:
            res.send('you are a fool')
    }
})

app.get('/asd/:id', (rec, res) => {
    const id=rec.params.id
    res.send(`it is ${id}`)
})

    app.listen(3003, (rec, res) => {
        console.log('running...');
    })






