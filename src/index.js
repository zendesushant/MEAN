const express =require('express')
require('./db/mongoose')
const users=require('./models/users')
const app=express();
const port=process.env.PORT || 3000


app.use(express.json());

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers", "Origin,Authorization,Content-Type");
    res.setHeader("Access-Control-Allow-Methods","GET,PUT,PATCH,DELETE,POST");
    next()
})
app.post('/users',(req,resp)=>{
    const user=new users(req.body)
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