const express = require('express')
const router = express.Router()
const profileController = require('../controllers/landingController')

router.get('/', profileController.renderLandingPage)

module.exports = router