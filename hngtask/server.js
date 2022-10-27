const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const router = require('./src/router/datarouter') 
const app = express()

app.use(express.json())

// app.get('/', (req, res)=>{
//     res.send("Hello World")
// })

app.use('/user', router)

app.listen(process.env.PORT || 5000, ()=>{
    console.log('server running')
})