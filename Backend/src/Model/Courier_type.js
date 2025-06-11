var mongose=require("mongoose")

 var type= new  mongose.Schema({
    name:String,
    des:String,
})

var models=  mongose.model("types",type);
module.exports=models;