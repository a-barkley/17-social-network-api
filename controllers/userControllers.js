const { User } = require('../models')

module.exports = {
    getAllUsers( req, res ) {
        User.find().then((users) => res.json(users))
    },
}