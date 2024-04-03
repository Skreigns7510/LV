const express = require('express')
const FrontController = require('../Controllers/FrontController')
const route = express.Router()

route.get('/',FrontController.home)
route.get('/home.ejs',FrontController.home)
route.get('/contact.ejs',FrontController.contact)
route.get('/aboutus.ejs',FrontController.about)
route.get('/SoftwareDev.ejs',FrontController.SoftwareDev)
route.get('/CybersecuritySol.ejs',FrontController.CybersecuritySol)


module.exports=route