const express=require("express")
const postmodel = require("../model/postmodel")
constpostModel=require("../model/postmodel")
const router=express.Router()
router.post("/add",async(req,res)=>
{
    let data=req.body
    console.log(data)
    let post=new postmodel(data)
    let result=await post.save()
    res.json({
        status:"success"
    })
})

router.get("/viewall",async(req,res)=>{
    let result=await postmodel.find()

    res.json(result)
})
module.exports=router