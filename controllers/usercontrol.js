
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt=require('jsonwebtoken')





//register
exports.Usercontrollers= async(req, res) => {
    

    const { username, email, password } = req.body;
   
  
    try {
      let user = await User.findOne({email});
      if (user) return res.status(400).json({ msg: "email already exists" });

      user = new User({
        username,
        email,
        password,
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      let data= await user.save();
     console.log(data)
      res.status(200).json({msg:"signup success"})
      
    } catch (err) {
     
      res.status(500).json({ msg: "Internal Server Error" });
    }
  }
  

  //login
  exports.postLogin=async(req,res)=> {
    const{username,email,password}=req.body
   
     try {
       let user = await User.findOne({email}||{username});
   
       if (!user) {
         return res.status(400).json({ msg: "Invalid Credentials" });
       }
   
       const isMatch = await bcrypt.compare(password, user.password);
       if (!isMatch) {
         return res.status(400).json({ msg: "Invalid Credentials" });
       }
       const token = jwt.sign(
         {
           _id: user._id
         },
         process.env.JWT_SECRET,
         {
           expiresIn: '7d'
         }
       );
       const { _id,} = user;
   
       return res.json({
         token,
         user: {
           _id,
          email,
          username
         }
       });
   
   
     } catch (err) {
       console.error(err.message);
       return res.status(500).send("Internal Server Error");
     }
   }

