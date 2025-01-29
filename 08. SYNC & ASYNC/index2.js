// const http = require('http')
// const fs = require('fs')

// const asyncServer = http.createServer((req,res)=>{
//     if(req.url==='/'){
//         fs.readFile('example.txt','utf8',(err,data)=>{
//             if(err){
//                 res.statusCode=500;
//                 return res.end('Error for reading file')
//             }
//             res.end(data)
//         })
//     }
   
// })
// asyncServer.listen(7000,()=>{console.log('server start')})




















const http = require('http')
const fs = require('fs')

const sync = http.createServer((req,res)=>{
    if(req.url === '/')
    {
        const data = fs.readFile('example.txt','utf8',(err,data)=>{
            if(err){
                res.statusCode =500
                return  res.end('Error aaya hai')
            }
             res.end(data)
        })
    }
})
sync.listen(8000,()=>{console.log("localhost:8000")})