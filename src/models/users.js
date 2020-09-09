const mongoose=require('mongoose')
const users=mongoose.model('users',{

    name:{
        type:String
    },

    age:{

        type:Number
    }
})
module.exports=users;
