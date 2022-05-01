const mongoose = require('mongoose');
const postsSchema = mongoose.Schema({
    text: String,
    user: String,
    datePosted: {type: Date, default: Date.now},
    movie: String,
    postType: Boolean,
    reposts: Number,
    reposters: Array
}, {collection: 'posts'});

module.exports = postsSchema;