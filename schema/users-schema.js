const mongoose = require('mongoose')
const usersSchema = mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    userType: String
}, {collection: 'users'});
module.exports = usersSchema;