var mongoes=require("mongoose")
var contactModel=new mongoes.Schema({
name:String,
email:String,
sub:String,
msg:String,

})

var myconatcmodel=mongoes.model("tbl_contact",contactModel);
module.exports=myconatcmodel;
