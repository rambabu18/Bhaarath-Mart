import express from 'express'
import User from '../models/userModels'
import { getToken } from '../util';

const router = express.Router();

router.post('/signin', async (req,res) =>{
   
   const signinUser = await User.findOne({
      email: req.body.email,
      password: req.body.password
   });
   if(signinUser){
      res.send({
         id : signinUser.id,
         name: signinUser.name,
         email: signinUser.email,
         isAdmin: signinUser.isAdmin,
         token: getToken(signinUser)
      })
   } else{
      res.status(401).send({msg:"Invalid Email or Password"});
   }
   
})

router.post('/register', async (req,res) =>{
   
const user = new User({
   name: req.body.name,
   email:req.body.email,
   password:req.body.password

}); 
const registerUser = await user.save();
if(registerUser){
   res.send({
      id : registerUser.id,
      name: registerUser.name,
      email: registerUser.email,
      isAdmin: registerUser.isAdmin,
      token: getToken(registerUser)
   
   })
   }else{
      res.status(401).send({msg:"Invalid User Details"});
   }
   
})


router.get("/createadmin", async(req,res)=>{
try {
    const user = new User({
        name:"Ram" ,
        email:"rambaburam418@gmail.com",
        password:"ram1234",
        isAdmin: true
   });

   const newUser = await user.save();
   res.send(newUser)
} catch (error) {
   res.send({msg:error.message});
}
    
})

export default router