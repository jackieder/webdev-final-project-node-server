import userModel from '../model/user-model.js';
export const findAllUsers = () => userModel.find();
export const createUser = (tuit) => userModel.create(tuit);
export const deleteUser = (tid) => userModel.deleteOne({_id: tid});
export const updateUser = (tid, tuit) => userModel.updateOne({_id: tid}, {$set: tuit})

export default {findAllUsers, createUser, deleteUser, updateUser}