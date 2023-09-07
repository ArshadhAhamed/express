const express= require('express')
const app =express()
const port=8000
const userRoute=require('./routes/users')
app.use(express.json())
app.get('/',(req,res)=>{
    res.send(`<h1>Welcome to Express js installed successfully</h1>`)
})
app.use('/users',userRoute)
app.listen(port,()=>console.log(" port is running " ))