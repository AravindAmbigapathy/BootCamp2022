const express=require('express')
const  app=express()
const morgan=require('morgan')


app.use(morgan('dev'))

app.get('/',(rec,res)=>{
    res.send('Home Page')
})
app.get('/dogs',(rec,res)=>{
    res.send('woof woof')
})

app.listen(3001,()=>{
    console.log('Listening to 3001');
})

