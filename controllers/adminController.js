const { Post, Profiles } = require('../models')

class AdminController {
    static readAll(req,res){
        Post.findAll({include: Profiles})
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.send(err)
        })
    }

}

module.exports = AdminController