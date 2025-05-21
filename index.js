// app.js
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const connectToDB = require("./config/db");

connectToDB()
// Middleware
app.use(cors());
app.use(express.json());
app.use('/remainder', require("./routes/remainderRoutes"))

app.listen(process.env.PORT, (error)=>{
    if(error){
        console.log(error);
    }else{
        console.log(`Server has started at PORT:${process.env.PORT}`);
    }
})


