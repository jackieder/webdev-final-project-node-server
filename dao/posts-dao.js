import postsModel from '../model/posts-model.js';
export const findAllPosts = () => {return postsModel.find();}
export const createPost = (post) => postsModel.create(post);
export const deletePost = (post_id) => postsModel.deleteOne({_id: post_id});
export const updatePost = (post_id, post) => postsModel.updateOne({_id: post_id}, {$set: post})

export default {findAllPosts, createPost, deletePost, updatePost}