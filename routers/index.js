const express = require('express')
const router = express.Router()
const landing = require('./landing')
const profile = require('./profile')
const post = require('./post')

router.get('/', landing)
router.use ('/profile', profile)
router.use('/post', post)

module.exports = router