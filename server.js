const express = require('express')
const path=require('path')
const app = express();

const buy =require('./frontend/buy')



app.use(express.static(__dirname+'/frontend'));

// Config dotenv file
require('dotenv').config({
    path: './config/config.env'
})


app.use(express.json())

app.use('/api',buy)




app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+"/frontend/index.html"))
})

app.get('/shop',(req,res)=>{
    res.sendFile(path.join(__dirname+"/frontend/Shop.html"))

})
app.get('/trail',(req,res)=>{
    res.sendFile(path.join(__dirname+"/frontend/try1.html"))
})
app.get('/trail2',(req,res)=>{
    res.sendFile(path.join(__dirname+"/frontend/try2.html"))
})

app.get('/trail3',(req,res)=>{
    res.sendFile(path.join(__dirname+"/frontend/try3.html"))
})

app.get('/trail4',(req,res)=>{
    res.sendFile(path.join(__dirname+"/frontend/try4.html"))
})

app.get('/buy',(req,res)=>{
    res.sendFile(path.join(__dirname+"/frontend/buy.html"))
})


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`App listening on port `);
});
