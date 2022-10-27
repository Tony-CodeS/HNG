const express = require('express')
const router = require('./src/router/datarouter') 
const app = express()

app.use(express.json())

app.get('/', (req, res)=>{
    res.send("Hello World")
})

app.use('/user', router)

app.listen(5000, ()=>{
    console.log('server running')
})