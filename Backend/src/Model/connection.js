var mongoese=require("mongoose")
mongoese.connect("mongodb://127.0.0.1:27017/DB_acb").then(()=>{
    console.log("connected")
})