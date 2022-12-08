const express = require('express')
const ProfileController = require('../controllers/profileController')
const router = express.Router()

router.get('/', (req,res) => {
    res.render('HomePage')
})












module.exports = router