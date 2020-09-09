const mongodb=require('mongodb');
const MongoClient=mongodb.MongoClient;
const connectionURL='mongodb://127.0.0.1:27017';
const databasename='task-manager';
MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
        if(error)
        {
          return  console.log("Error Ocuured")
        }
        const db=client.db(databasename);
        db.collection('users').insertOne({name:"Sushant"}).then((result)=>{

            console.log(result.ops)
        }).catch((error)=>{

            console.log(error)
        });
})