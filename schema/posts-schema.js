import mongoose from 'mongoose';
const schema = mongoose.Schema({
    _id: String,
    textContent: String,
    user: String,
    datePosted: Date,
    forecastId: String,
    postType: Boolean,
    reposts: Number,
    reposters: Array
}, {collection: 'posts'});

export default schema;