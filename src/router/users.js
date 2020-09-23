const express=require('express')
const users=require('../models/users')
const router=new express.Router()
const bcrypt=require('bcrypt');
const auth=require('../middleware/auth')


router.get('/users', async (req,resp)=>{
    const User=new users(req.body);
    try{
            const token= await User.getAuthToken();
            resp.status(200).send({token:token});
    }
    catch(e)
    {
            resp.status(400).send(e);
    }
})

router.post('/users',auth,(req,resp)=>{
    const  user=new users(req.body)
    
    user.save().then(()=>{

        resp.send(user)
    }).catch((error)=>{
        resp.send(error)
    })
})


module.exports=router;