// const express = require("express");
// const app = express();
// const port = 3000;

// app.get('/',(req,res)=>{
//     res.send("Hello Express")
// })

// app.listen(port , ()=>{console.log(`localhost:${port}`)})






const express = require('express');
const fs = require('fs')
const app = express();
const port = 4000;

app.get('/',(req,res)=>{
    res.send(fs.readFileSync('home.html','utf8'))
})
app.get('/about',(req,res)=>{
    res.send(fs.readFileSync('about.html','utf8'))
})
app.get('/login',(req,res)=>{
    res.send(fs.readFileSync('login.html','utf8'))
})
app.get('/logout',(req,res)=>{
    res.send(fs.readFileSync('logout.html',"utf8"))
})

app.listen(port,()=>{console.log(`localhost:${port}`)})
