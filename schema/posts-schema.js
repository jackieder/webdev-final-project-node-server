const mongoose = require('mongoose');
const postsSchema = mongoose.Schema({
    text: String,
    user: String,
    datePosted: {type: Date, default: Date.now},
    movie: String,
    upvote: {type: Number, default: 0}
}, {collection: 'posts'});

module.exports = postsSchema;