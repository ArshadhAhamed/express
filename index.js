const dotenv=require('dotenv')
dotenv.config()
const express= require('express')
const app =express()
const PORT=process.env.PORT
const userRoute=require('./routes/users')
app.use(express.json())
app.get('/',(req,res)=>{
    res.send(`<h1>Welcome to Express js installed successfully</h1>`)
})
app.use('/users',userRoute)
app.listen(PORT, ()=>console.log(`App is running in port ${PORT}`))