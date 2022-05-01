const postsModel = require('../model/posts-model.js');
const findAllPosts = () => postsModel.find().sort({_id: 1});
const createPost = (post) => postsModel.create(post);
const deletePost = (post_id) => postsModel.deleteOne({_id: post_id});
const updatePost = (post_id, post) => postsModel.updateOne({_id: post_id}, {$set: post})

module.exports = {findAllPosts, createPost, deletePost, updatePost}