const express=require('express')
const app=express()

app.set ('view engine','ejs')

app.get('/',(rec,res)=>{
    console.log('HERE');
    // res.status(500).json({message:'Error'})
    // res.json({message:'Error'}) 
    // res.download("server.js")
    // res.send('HI')
    res.render('index',{text1:'world'})
})

const userRouter=require("./routes/users")
// const postRouter=require("./routes/posts")


app.use('/users',userRouter)
// app.use('/posts',postRouter)




app.listen(3000)








