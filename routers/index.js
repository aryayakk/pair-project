const express = require('express')
const router = express.Router()
const profile = require('./profile')
const post = require('./post')
const UserController = require('../controllers/userController')
const AdminController = require('../controllers/adminController')




//GET REGISTER 
router.get('/register',UserController.registerForm)
router.post('/register',UserController.postRegisterForm)
//LOGIN

// router.get(
//     '/login',
//     (req, res) => {
//         if (req.session) {
//             req.session.role === 'admin'? 
//                 res.redirect(`/admin`) 
//             : 
//                 res.redirect(`/profile`)
//         }
//     },
//     UserController.loginForm)
router.get('/login', UserController.loginForm)
router.post('/login',UserController.postLogin)

router.use((req, res, next) => {
    if(!req.session.userId){
        const error = "Please Login First"
        res.redirect(`/login?error=${error}`)
    }else{
        next()
    }
  })
 
router.use ('/profile', profile)
router.use('/post', post)

router.use((req, res, next) => {
        if(req.session.userId && req.session.role !== 'admin'){
            const error = 'You Have No Access'
            res.redirect(`/login?error=${error}`)
    
        }else{
            next()
        }
    })


router.get ('/admin', AdminController.readAll)
router.get('/admin/:id/detail', AdminController.detail)



module.exports = router