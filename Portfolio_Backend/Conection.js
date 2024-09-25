const mongoose = require("mongoose");

async function Connect_MongoDB(url){
    return mongoose.connect(url)
    .then(()=>console.log("MongoDb Conected"));

}

module.exports = {Connect_MongoDB}