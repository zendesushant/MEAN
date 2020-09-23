const express =require('express')
const router=require('./router/users')
require('./db/mongoose')
const bcrypt=require('bcrypt')
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


const multer=require('multer')
const upload=multer({

    dest:'images'
})

app.post('/upload',upload.single('upload'),(req,res)=>{

    res.send();
})




app.use(router);
app.listen(port,()=>{

    console.log('Server is Up on PORT '+port)
})