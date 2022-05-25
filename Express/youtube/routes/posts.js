const express=require('express')
const router=express.Router()




router.get('/',(rec,res)=>{
    res.send('Post List')
})
