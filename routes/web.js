const express = require('express')
const FrontController = require('../Controllers/FrontController')
const route = express.Router()

route.get('/',FrontController.home)


module.exports=route