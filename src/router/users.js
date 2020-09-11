const express=require('express')
const users=require('../models/users')
const router=new express.Router()

router.get('/users',(req,resp)=>{

    users.find({}).then((users)=>{
        console.log(users)
        resp.send(users)
    }).catch((error)=>{
        resp.send(error)
    })
})

router.post('/users',(req,resp)=>{
    const user=new users(req.body)
    user.save().then(()=>{

        resp.send(user)
    }).catch((error)=>{
        resp.send(error)
    })
})


module.exports=router;