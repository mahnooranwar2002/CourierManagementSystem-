var mongoese=require("mongoose")
var agent_data=new mongoese.Schema({
    name:String,
    email:String,
    password:String,
    address:String,
    city:String,
    status:Number,
    bracnh:String
})
var model =mongoese.model("tbl_agent",agent_data)
module.exports=model