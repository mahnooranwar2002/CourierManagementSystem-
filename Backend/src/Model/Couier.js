var mongoose=require("mongoose")
var couerier=new mongoose.Schema({
    tracking:String,
    userId:String,
    //send details
    s_name:String,
    s_address:String,
    s_phone:Number,
    // receiver details
    r_name:String,
    r_address:String,
    r_phone:Number,
    // pracel details
    company:String,
    Type:String,
    BranchProcessed:String,
    Pickup_Branch:String,
    Weight:Number,
    Height:Number,
    Length:Number,
    Width:Number,
    price:Number,
    Status:String,
    delivery_data:String
    
})
  var courierModel=mongoose.model("tbl_couier",couerier)
  module.exports=courierModel