const mongoose=require('mongoose')
const database_name="mongoose_db"
const connectionURL=`mongodb://127.0.0.1:27017/${database_name}`

mongoose.connect(connectionURL,{useNewUrlParser:true,useCreateIndex:true}).then(()=>{
    console.log('connected')
});




