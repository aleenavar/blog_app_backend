const express=require("express")
const blogmodel = require("../model/blogmodel")
const router=express.Router()

router.post("/signin",async(req,res)=>{
    let data=req.body
    let blog = new blogmodel(data)
    let result=await blog.save()
    res.json(
        {
            status:"success"
        }
    )
    
})


module.exports=router