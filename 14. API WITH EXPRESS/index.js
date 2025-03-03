const express = require("express")
const app = express()
const port = 4000
app.use(express.json())

app.get('/',(req,res)=>{
    res.send([
        {id:1,msg:"This is first"},
        {id:2,msg:"This is Second"},
        {id:3,msg:"This is third"},
        {id:4,msg:"This is fourth"}
    ])
})
// Body
app.post('/login',(req,res)=>{
    console.log(req.body)
    res.send({id:1,msg:"This is image" ,data:req.body})
})
//Query
app.post('/query',(req,res)=>{
    console.log(req.body)
    res.send({id:1,msg:"This is image" ,data:req.body,query:req.query})
})
//Params 
app.get('/params/:id',(req,res)=>{
    let dataId = req.params.id
    console.log(dataId)
    res.send(dataId)
})

app.listen(port,()=>console.log(`http://localhost:${port}`))