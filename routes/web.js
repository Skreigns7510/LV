const express = require('express')
const FrontController = require('../Controllers/FrontController')
const route = express.Router()

route.get('/',FrontController.home)
route.get('/home',FrontController.home)
route.get('/contact',FrontController.contact)
route.get('/aboutus',FrontController.about)
route.get('/portfolio',FrontController.portfolio)
// services section
route.get('/SoftwareDev',FrontController.SoftwareDev)
route.get('/CybersecuritySol',FrontController.CybersecuritySol)
route.get('/DataAnalytics',FrontController.DataAnalytics)
route.get('/CloudComputing',FrontController.CloudComputing)
route.get('/ITConsulting',FrontController.ITConsulting)
route.get('/ManagedITServices',FrontController.ManagedITServices)
route.get('/DigitalTransformation',FrontController.DigitalTransformation)
route.get('/TrainingandWorkshops',FrontController.TrainingandWorkshops)
//end 


module.exports=route