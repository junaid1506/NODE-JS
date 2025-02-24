const express =  require("express")
const colors = require("colors")
const app = express()
const port = 7000;


app.use(express.json())



app.get('/',(req,res)=>{
    res.send(`<h1>Hello</h1>`)
})

app.post('/page',(req,res)=>{
    const {input1,input2} = req.body;
    res.json({
        message : true,
        data :`Hello ${input1} ${input2}`
    })
})

app.listen(port,()=>console.log(`localhost:${port}` .bgYellow .white))