const http = require('http')
const server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html"})
    res.end("<h1>Hello</h1><h6>hello</h6>")
})

server.listen(7000, ()=>console.log("server is run"))