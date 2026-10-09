const express = require("express");
const dotenv = require('dotenv')
const app = express()
dotenv.config()
const port = process.env.PORT || 4000

app.get("/", (req,res)=>{
    res.send('Bienvenue dans mon back end ')
})

app.get("/login", (req,res)=>{
    res.send('Bienvenue dans la route login')
})


app.get("/signup", (req,res)=>{
    res.send('bienvenue dans la route d inscription')
})


app.listen(port, () => {
 console.log("Server running on port " + port);
 });
