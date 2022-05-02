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

const updateUser = async (id, user) => {
    const res = await userModel.updateOne(
        {_id: id},
        {$set: {"email": user.email, "password": user.password}}
    );
    return res
}
const deleteUser = (id) =>
    userModel.deleteOne({_id: id})

module.exports = {
    findUserByEmail, findAllUsers, findUserByCredentials,
    findUserById, createUser, deleteUser, updateUser
}