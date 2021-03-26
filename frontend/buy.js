const nodemailer=require('nodemailer')

const router =require('express').Router();
const path=require('path')




router.get('/buynow',(req,res)=>{
  res.sendFile(path.join(__dirname+"/buy.html"))
})

router.post('/buynow',(req,res)=> {

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    host: 'smtp.gmail.com',
    user: 'testmail.reference@gmail.com',
    pass: 'manoj@feb19',
    
  }
});

var email=req.body.email;
var name=req.body.custiomername;
var phno=req.body.phno;
var address=req.body.address;
var productname=req.body.productname;
var content=`name: ${name} \n phno: ${phno} \n address: ${address} \n prodct:${productname}`

var mailOptions = {
  from:email,
  to: 'manojprabakarmp1@gmail.com',
  subject: 'customer from ar fashion',
  text: {content}
 
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
    alert("successs")
  }
})
})

module.exports =router;