import postsModel from '../model/posts-model.js';
export const findAllPosts = () => postsModel.find();
export const createPost = (tuit) => postsModel.create(tuit);
export const deletePost = (tid) => postsModel.deleteOne({_id: tid});
export const updatePost = (tid, tuit) => postsModel.updateOne({_id: tid}, {$set: tuit})

export default {findAllPosts, createPost, deletePost, updatePost}