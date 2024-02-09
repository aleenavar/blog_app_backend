const express=require("express")
const blogmodel = require("../model/blogmodel")
const router=express.Router()

const bcrypt=require("bcryptjs")

hashpasswordGenerator=async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}
router.post("/signin",async(req,res)=>{

    let {data}={"data":req.body}
    let password=data.password
   // hashpasswordGenerator(password).then(
        //(hashedPassword)=>{
           // console.log(hashedPassword)
           // data.password=hashedPassword
            //console.log(data)
            //let blog=new blogmodel(data)
            //let result=blog.save()
            //res.json({
               // status:"success"
            //})
        //}
    //)
    const hashedPassword=await hashpasswordGenerator(password)
    data.password=hashedPassword
    let blog=new blogmodel(data)
            let result=blog.save()
            res.json({
                status:"success"
            })

   
    
    //let blog = new blogmodel(data)
    //let result=await blog.save()
  
})

router.post("/signin",async(req,res)=>{
    let input=req.body
    let data=await blogmodel.find(input)
    res.json({
        status:"success"
    })
})

module.exports=router