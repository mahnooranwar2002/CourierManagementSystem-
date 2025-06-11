var mongoese=require("mongoose");
var admin_Model= new mongoese.Schema({
    name:String,
email:String,
password:String,

})
var admin=mongoese.model("admin",admin_Model);
module.exports=admin;