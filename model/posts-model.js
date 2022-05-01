const mongoose = require('mongoose');
const postsSchema = require('../schema/posts-schema.js');
const postsModel = mongoose.model('PostModel', postsSchema);
module.exports = postsModel;