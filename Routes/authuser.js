 
const express=require ('express');
const router=express.Router()
const {Usercontrollers,postLogin}=require('../controllers/usercontrol')

router.post('/register',Usercontrollers)
router.post('/login',postLogin)

    

module.exports=router