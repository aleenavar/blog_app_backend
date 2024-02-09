const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const blogr=require("./contoller/blogrouter")

const app=express()

app.use(express.json())
app.use(cors())


mongoose.connect("mongodb+srv://aleenav123:aleenav2001@cluster0.gla08ce.mongodb.net/blogDb?retryWrites=true&w=majority",

{
    useNewUrlParser:true
}
)


app.use("/api/blog",blogr)

app.listen(3001,()=>{
    console.log("server runnig")
})