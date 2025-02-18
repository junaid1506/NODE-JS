const http = require('http')
const server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/plain"})
    res.end("Hello")
})

server.listen(7000, ()=>console.log("server is run"))