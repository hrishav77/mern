require('dotenv').config()
const express=require('express')
const app=express()
const mongoose=require('mongoose')
const goalRoutes=require('./routes/goals')


app.get("/",(req,res)=>{
res.json({mssg:"welcome to the server"})
})

app.use('/api/goals',goalRoutes)

//connect to db
mongoose.connect(process.env.MONG_URL).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(" connected to db and server running on ",process.env.PORT)
    })
}).catch((err)=>{
    console.log(err)
})
