const userModel = require('../model/users-model')

const findAllUsers = () => {
    return userModel.find()
}
const findUserById = (id) => {
    return userModel.findById(id)
}
const findUserByEmail = (email) =>
    userModel.findOne({email})


const findUserByCredentials = (email, password) =>
    userModel.findOne({email, password})
const createUser = (user) =>
    userModel.create(user)
const updateUser = (id, user) =>
    userModel.updateOne(
        {_id: id},
        { $set: user}
    )
const deleteUser = (id) =>
    userModel.deleteOne({_id: id})

module.exports = {
    findUserByEmail, findAllUsers, findUserByCredentials,
    findUserById, createUser, deleteUser, updateUser
}