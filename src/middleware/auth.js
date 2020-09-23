
const jwt=require('jsonwebtoken');
const Users=require('../models/users');
const auth=async(req,res,next)=>{

    try{
    
    const token=req.header('Authorization').replace('Bearer ','');
    const decode=jwt.verify(token,'secretekey');
    const user=Users.findOne({_id:decode._id.toString()});
  if(!user)
  {
      throw new Error("UnAuthorized User");
  }
    
   
    next();
    }
    catch(message)
    {
        res.status(404).send({message:'unauthorizedjkhh'});
    }
 
   
}

module.exports=auth;