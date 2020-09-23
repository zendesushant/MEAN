const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const userSchema=new mongoose.Schema({

    name:{
        type:String
    },

    password:{

        type:String
    },

    token:[{

        token:{

            type:String
        }
    }]
})
userSchema.methods.getAuthToken= async function(){
    const user=this;
    const token=jwt.sign({_id:user._id.toString()},'secretekey',{expiresIn:'10 seconds'});
    console.log("userSchema Id"+user._id.toString())
    return token;
}
userSchema.pre('save',async function(next){

    const user=this;

    user.password=await bcrypt.hash(user.password,8);
    
    next();
})
const users=mongoose.model('users',userSchema)
module.exports=users;
