const express = require("express")
const app =  express()
const port = 7000
const colors = require("colors")
app.use(express.json())

app.post("/",(req,res)=>{
    const {name,email,pass}= req.body;
    res.json({
        msg : true,
        name:name,
        email:email,
        pass:pass
    })
})

app.listen(port,()=>console.log(`localhost:${port}` .bgGreen))