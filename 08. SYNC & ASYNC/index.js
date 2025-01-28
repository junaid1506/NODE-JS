const http = require('http')
const fs = require('fs')
const { createServer } = require('http')

const myServer = http.createServer((req,res)=>{
    if(req.url==='/'){
        const data = fs.readFileSync('example.txt','utf8')
        res.end(data)
    }
    else if(req.url==='/home'){
        const data = fs.readFileSync('home.txt','utf8')
        res.end(data)
    }
    else if(req.url==='/product'){
        const data = fs.readFileSync('product.txt','utf8')
        res.end(data)
    }
    else if(req.url==='/about'){
        const data = fs.readFileSync('about.txt','utf8')
        res.end(data)
    }
})

myServer.listen(8000,()=>{console.log('Your server is start : localhost:8000')})