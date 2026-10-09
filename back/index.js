const express = require("express");
const app = express()
const port = 4001

app.get("/", (req,res)=>{
    res.send('salut othman')
})

app.get("/login", (req,res)=>{
    res.send('salut login')
})


app.get("/signup", (req,res)=>{
    res.send('salut signup')
})


app.listen(port, () => {
 console.log("Server running on port " + port);
 });
