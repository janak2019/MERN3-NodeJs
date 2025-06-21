
require('dotenv').config()
const express = require('express')
const connectToDatabase = require('./database')
const app = express()
app.use(express.json())

connectToDatabase()


app.get("/",(req,res)=>{
     res.status(200).json({
       hello: "This is Home page"
    })

})
app.post("/blog",(req,res)=>{
    console.log(req.body)   
    res.status(200).json({
       hello: "Blog Api Hit success"
    })
        
})

app.listen(process.env.PORT,()=>{
    console.log('Nodejs project has started')
})
