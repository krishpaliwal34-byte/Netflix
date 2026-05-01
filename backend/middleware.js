import jwt from 'jsonwebtoken'
const SECERT = "krishkey";

const auth = (req,res,next) => {
   const token = req.headers.authorization;

   if(!token){
    return res.status(401).json({msg: "no token"})
   }
   try{
    const decoded = jwt.verify(token,SECERT)
    req.user = decoded;
    next();
   }
   catch(err){
    return res.status(401).json({msg: "invalid token"})
   }
}
export default auth;