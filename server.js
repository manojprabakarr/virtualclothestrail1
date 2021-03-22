const express = require('express')
const morgan = require('morgan')
const bodyparser=require('body-parser')

//connectdb
const connectdb=require('./helpers/db')



// Config dotenv file
require('dotenv').config({
    path: './config/config.env'
})



const app = express();


app.use(express.json())
app.use(morgan('dev'))



//database connection
connectdb();

//load routes
const Authuser=require('./Routes/authuser')


//Routes
app.use('/api',Authuser);

app.use((req, res) => {
    res.status(404).json({
        success: false,
        msg: "Page not founded"
    })
})

const PORT = process.env.PORT || 18000

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});