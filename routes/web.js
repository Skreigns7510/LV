const express = require('express')
const FrontController = require('../Controllers/FrontController')
const route = express.Router()

route.get('/',FrontController.home)
route.get('/home.ejs',FrontController.home)
route.get('/contact.ejs',FrontController.contact)
route.get('/aboutus.ejs',FrontController.about)
// services section
route.get('/SoftwareDev.ejs',FrontController.SoftwareDev)
route.get('/CybersecuritySol.ejs',FrontController.CybersecuritySol)
route.get('/DataAnalytics.ejs',FrontController.DataAnalytics)
route.get('/CloudComputing.ejs',FrontController.CloudComputing)
route.get('/ITConsulting.ejs',FrontController.ITConsulting)
route.get('/ManagedITServices.ejs',FrontController.ManagedITServices)
route.get('/DigitalTransformation.ejs',FrontController.DigitalTransformation)
route.get('/TrainingandWorkshops.ejs',FrontController.TrainingandWorkshops)
//end 


module.exports=route