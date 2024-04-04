const express = require('express')
const FrontController = require('../Controllers/FrontController')
const route = express.Router()

route.get('/',FrontController.home)
route.get('/home',FrontController.home)
route.get('/contact',FrontController.contact)
route.get('/careers',FrontController.careers)

// company section
route.get('/aboutus',FrontController.about)
route.get('/ResearchAndInnovatiion',FrontController.ResearchAndInnovatiion)
route.get('/NewsAndEvents',FrontController.NewsAndEvents)
route.get('/PrivacyAndPolicy',FrontController.PrivacyAndPolicy)
// end

route.get('/portfolio',FrontController.portfolio)
// services section
route.get('/SoftwareDev',FrontController.SoftwareDev)
route.get('/CybersecuritySol',FrontController.CybersecuritySol)
route.get('/DataAnalytics',FrontController.DataAnalytics)
route.get('/CloudComputing',FrontController.CloudComputing)
route.get('/ITConsulting',FrontController.ITConsulting)
route.get('/ManageITServices',FrontController.ManageITServices)
route.get('/DigitalTransformation',FrontController.DigitalTransformation)
route.get('/TrainingandWorkshops',FrontController.TrainingandWorkshops)
//end 


module.exports=route