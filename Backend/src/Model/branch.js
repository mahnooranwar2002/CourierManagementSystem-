var mongoese=require("mongoose")

 var brach_data = new  
 mongoese.Schema({
    name:String,
    street:String,
    city:String,
    state:String,
    contact:String,

})



var branch=mongoese.model("branches",brach_data)
module.exports=branch