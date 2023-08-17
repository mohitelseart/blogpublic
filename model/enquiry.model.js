const mongoose = require("mongoose")

const enquirySchema = mongoose.Schema({
   name:String,
   email:String,
   phone:Number,
   url:String,
},{
    versionKey:false
})

const enquiryModel = mongoose.model("Auditrequests", enquirySchema)

module.exports = {
    enquiryModel
}