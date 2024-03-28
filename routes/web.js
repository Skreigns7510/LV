const express = require('express')
const FrontController = require('../Controllers/FrontController')
const route = express.Router()

route.get('/',FrontController.home)
route.get('/home.ejs',FrontController.home)
route.get('/contact.ejs',FrontController.contact)
route.get('/aboutus.ejs',FrontController.about)


module.exports=route