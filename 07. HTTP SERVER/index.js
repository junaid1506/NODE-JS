const http = require("http")


const myServer = http.createServer((req,res)=>{
    console.log("hello Junaid")
    res.end("Hello Server")
});

myServer.listen(8000,()=>console.log("Server Start"))