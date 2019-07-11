
const { users: User } = require("../models/index");

const createUser = (req, res, next) => {

    // it's best to do some kind of validation here or in an outside middleware
    // EX: if user already exists or for malformed input before trying to insert into DB;

    // this is an async function; will end immediately unless we return and wait;

    return User.create({ ...req.body })
        .then(response => {

            return res.json({
                success: true
            });
        })
        .catch(err => {
            
            console.log(err);

            return res.json({
                success: false
            });
        });
}

const getAllUsers = (req, res, next) => {
    
    return User.findAll()
        .then(users => {

            return res.json({
                users: users
            });
        })
        .catch(err => {
            
            console.log(err);

            return res.json({
                users: null
            });

        });
}

const getUserById = (req, res, next) => {
    
    const { id } = req.params;

    return User.findOne({
        where: {
            u_id: id
        }
    })
    .then(user => {

        return res.json({
            user: user
        });
    })
    .catch(err => {
        
        console.log(err);

        return res.json({
            user: null
        });

    });
}

const updateUser = (req, res, next) => {
    
    const allowedUpdates = ["email", "password"];

    const updates = Object.keys(req.body);

    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        
        return res.status(400).json({
            error: "Unauthorized Action!"
        });
    }

    const { id } = req.params;

    return User.update({ ...req.body }, {
        where: {
            u_id: id
        }
    })
        .then(response => {
            
            return res.json({
                success: true
            });
        })
        .catch(err => {

            console.log(err);

            return res.json({
                success: false
            });
        });
}

const deleteUser = (req, res, next) => {
    
    const { id } = req.params;

    return User.destroy({
        where: {
            u_id: id
        }
    })
        .then(response => {
                
            return res.json({
                success: true
            });
        })
        .catch(err => {

            console.log(err);

            return res.json({
                success: false
            });
        });
}

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
}