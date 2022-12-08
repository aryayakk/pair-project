const { Post, Profiles, User } = require('../models')
const {formatDate} = require('../helpers')

class AdminController {
    static readAll(req,res){
        Post.findAll({include: Profiles})
        .then((data) => {
            // res.send(data)
            res.render('AdminHomePage', {data})
        })
        .catch((err) => {
            res.send(err)
        })
    }

    static detail(req,res){
        const id = +req.params.id
        console.log(id);
        Profiles.findByPk(id,{
            include: Post
        })
        .then((data) => {
            // res.send(data)
            res.render('AdminDetailPost', {data, formatDate})
        })

        .catch((err) => {
            res.send(err)
        })
    }

}

module.exports = AdminController