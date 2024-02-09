const mongoose=require("mongoose")

const blogSchema = new mongoose.Schema(

    {
        name:String,
        age:String,
        mobno:String,
        address:String,
        pincode:String,
        emailid:String,
        password:String
    }
)

module.exports=mongoose.model("blog",blogSchema)