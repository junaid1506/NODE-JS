const http = require('http')
const fs= require("fs")
const server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html"})
    const data = fs.readFileSync("./template.html","utf-8")
    res.end(data)
})

server.listen(7000, ()=>console.log("server is run"))