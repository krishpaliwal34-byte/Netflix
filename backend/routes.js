import express from 'express'
import auth from './middleware.js'
import User from './schema.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
const SECERT = "krishkey";
const router = express.Router();

//signup
router.post("/signup" , async(req,res) => {
    try{
        const {name , email , password} = req.body;
    const UserExist = await User.findOne({email})
    if(UserExist){
        res.status(400).json({msg: "User Already Exist"})
    }
    const hashedpassword =  await bcrypt.hash(password,10);
    await User.create({
        name,
        email,
        password: hashedpassword,
    }) 
    res.json({msg: "Signup Success"})
    await newUser.save()
    }catch{
        console.log(err)
    }
})
//login
router.post("/login" , async(req,res) => {
   try{
         const {email,password} = req.body;
    const user = await User.findone({email})
    if(!user){
        res.status(400).json({msg: "User Not found"})
    }
    const ismatch = await bcrypt.compare(password,user.password);
    if(!ismatch){
        res.status(400).json({msg: "Wrong Password"})
    }
    const token = jwt.sign(
        {id: user._id ,name: user.name, email: user.email },
        SECERT,
        {expiresIn: "1h"}
    )
     res.json({msg: "Login Success" , token})
   }catch(err){
    console.log(err)
   }
})
router.get("/dashboard" ,auth , (req,res,next) => {
    res.json({
        name: req.user.name,
})
})
export default router;