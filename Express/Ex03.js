const mongo = require("mongodb").MongoClient;
const url = "mongodb://localhost/sampledatabase"
let database;
mongo.connect(url,(err,mgCl)=>{
    database = mgCl.db("sampledatabase")
    database.collection("employee").find().toArray((e,res)=>{
        res.forEach((value)=>{
            if(value.empName != undefined ) console.log(`${value.empName}`)

        })
    })
})