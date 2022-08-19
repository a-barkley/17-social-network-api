const { User } = require('../models')

module.exports = {
    getAllUsers( req, res ) {
        User.find().then((users) => res.json(users))
    },
    getUserById( req, res ) {
        User.findOne({ _id: req.params.id }, (err, docs) => {
            if (err) {
                console.log(err)
            } else {
                res.json(docs)
            }
        })
    }
}