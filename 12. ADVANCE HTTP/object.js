const http = require('http')
const server = http.createServer((req,res)=>{

    const obj = {
        M:"mongoDB",
        E:"expressJS",
        R:"reactJS",
        N:"nodeJS"
    }

    res.writeHead(200,{"Content-type":"application/json"})
    res.end(JSON.stringify(obj))
})

server.listen(7000, ()=>console.log("server is run"))