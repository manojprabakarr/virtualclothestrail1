const express = require('express')
const path=require('path')
const app = express();
const connectdb=require('./helpers/db')


app.use(express.static(__dirname+'/client'));

// Config dotenv file
require('dotenv').config({
    path: './config/config.env'
})


app.use(express.json())
connectdb()



app.get('/',(req,res)=>{
    res.sendFile(path.join__dirname+"index.html")
})

app.get('/',(req,res)=>{
    res.sendFile(path.join__dirname+"Shop.html")

})
app.get('/',(req,res)=>{
    res.sendFile(path.join__dirname+"try1.html")
})
app.get('/',(req,res)=>{
    res.sendFile(path.join__dirname+"try2.html")
})

app.get('/',(req,res)=>{
    res.sendFile(path.join__dirname+"try3.html")
})

app.get('/',(req,res)=>{
    res.sendFile(path.join__dirname+"try4.html")
})



const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`App listening on port `);
});
