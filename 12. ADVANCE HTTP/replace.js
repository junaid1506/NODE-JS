const http = require('http')
const fs= require("fs")
const server = http.createServer((req,res)=>{
    const name = "JUNAID ANSARI"
    res.writeHead(200,{"Content-type":"text/html"})
    let data = fs.readFileSync("./template.html","utf-8")
    data = data.replace("{{name}}",name)
    res.end(data)
})

server.listen(7000, ()=>console.log("server is run"))