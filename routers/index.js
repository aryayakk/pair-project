const express = require('express')
const router = express.Roouter()
const profile = require('./profile')
const post = require('./post')


router.use ('/profile', profile)
router.use('/post', post)


module.exports = router