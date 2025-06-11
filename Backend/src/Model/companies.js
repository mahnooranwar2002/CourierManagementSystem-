var mongoose=require("mongoose")
var tablschema=mongoose.Schema(
    {
        name:String,
        des:String,
        website:String,
        email:String,
        status:Number
  
    })

    var companyModel=mongoose.model("tbl_companies",tablschema)
    module.exports=companyModel