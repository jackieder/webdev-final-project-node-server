const postsModel = require('../model/posts-model.js');
const userModel = require('../model/users-model')
const findPostsByUser = (userId) => postsModel.find({filter: { user: userId} });
const findAllPosts = () => postsModel.find().sort({_id: 1});
const findMoviePosts = (movieTitle) => postsModel.find({movie: movieTitle});
const createPost = (post, movieId, userId) => postsModel.create({
    text: post,
    user: userId,
    movie: movieId
});
const deletePost = (post_id) => postsModel.deleteOne({_id: post_id});
const updatePost = (post_id, post) => postsModel.updateOne({_id: post_id}, {$set: post})

module.exports = {findAllPosts, createPost, deletePost, updatePost, findMoviePosts, findPostsByUser}