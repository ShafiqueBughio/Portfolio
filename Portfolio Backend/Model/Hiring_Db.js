const mongoose = require("mongoose")

//scheema
const Hiring_Db_Schema = new mongoose.Schema({
    name:{type:String},
    email:{type:String,required:true},
    phone:{type:String},
    subject:{type:String},
    message:{type:String},
},{timestamp:true})

//model
const Portfolio_Model = mongoose.model("portfolio",Hiring_Db_Schema);

module.exports = {Portfolio_Model};

