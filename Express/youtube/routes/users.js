const express=require('express')
const router=express.Router()

router.get('/',(rec,res)=>{
    res.send('user List')
})

router.get('/new',(rec,res)=>{
res.send('user new form')
})

router.post('/',(rec,res)=>{
    res.send('create User')
})

router.route('/:id').get((rec,res)=>{
    const id=rec.params.id
    res.send('User Get '+id)
}).put((rec,res)=>{
    const id=rec.params.id
    res.send('Update User Get '+id)
}).delete((rec,res)=>{
    const id=rec.params.id
    res.send('Delete User Get '+id)
})


module.exports=router







