const { User, Profiles} = require('../models')
const bcrypt = require('bcryptjs');

class UserController {
    static loginForm(req,res){
        const {error} = req.query
        res.render('login-form', {error})
    }

    static registerForm(req,res){
        res.render('register-form')
    }

    static postRegisterForm(req,res){
        const { username, password, email , fullName, profilePicture, gender} = req.body
        // console.log(req.body);
        let temp
        User.create({ username, password, email })
        .then((newUser) => {
            // console.log(newUser);
             temp = newUser
            
             
             return Profiles.create({fullName,profilePicture,gender,UserId : temp.id})
        })
        // console.log(temp, "<<<<");
        .then((data) => {
             res.redirect('/login')
        })
        .catch((err) => {
            res.send(err)
        })

    }

    static postLogin(req,res){
        const { username, password } = req.body
        console.log(req.body);
        User.findOne({where: { username }})
        .then((user) => {
            if(user){
                console.log("userya ada", user);
                const isValidPassword = bcrypt.compareSync(password, user.password)

                if(isValidPassword){
                    req.session.userId = user.id
                    req.session.role = user.role
                    if(req.session.role === 'admin'){
                        return res.redirect('/admin')
                    }else{

                        return res.redirect('/profile')
                    }

                }else{
                    const error = "invalid username/password"
                    return res.redirect(`/login?error=${error}`)
                }

            }else{

                // console.log("Masuk ke else");
                const error = "invalid username/password"
                return res.redirect(`/login?error=${error}`)
            }
        })
        .catch((err) => {
            // console.log(" <<<" , err);
            res.send(err)
        })
    }
}

module.exports = UserController