const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

app.get('/',(req,res)=>{
    res.send(fs.readFileSync('home.txt','utf8'))
})
app.get('/page1',(req,res)=>{
    res.send(fs.readFileSync('page1.txt','utf8'))
})
app.get('/page2',(req,res)=>{
    res.send(fs.readFileSync('page2.txt','utf8'))
})
app.get('/page3',(req,res)=>{
    res.send(fs.readFileSync('page3.txt','utf8'))
})
app.get('/page4',(req,res)=>{
    res.send(fs.readFileSync('page4.txt','utf8'))
})
app.listen(port,()=>{console.log(`Our app is now live at localhost:${port}`)})