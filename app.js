const express = require('express')
const app = express() 
const port =4000
const web = require('./routes/web')

app.use(express.static('public'))


app.set('view engine' , 'ejs')

app.use('/',web)

app.listen(port,()=>console.log("Server is Running localhost:4000"))