const express =require('express')
require('./db/mongoose')
const users=require('./models/users')
const app=express();
const port=process.env.PORT || 3000



app.post('/users',(req,resp)=>{

    const user=new users({

        name:"Zende",
        age:23
    })
    user.save().then(()=>{

        resp.send(user)
    }).catch((error)=>{
        resp.send(error)
    })
})

app.get('/users/:id',(req,resp)=>{
const id=req.params.id
console.log(id);
    users.findById(id).then((users)=>{

        resp.send(users)
    }).catch((error)=>{
        resp.send(error)
    })
})
app.listen(port,()=>{

    console.log('Server is Up on PORT '+port)
})