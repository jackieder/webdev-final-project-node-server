import mongoose from 'mongoose';

const schema = mongoose.Schema({
    _id: String,
    name : {
        first: String,
        last: String
    },
    bday: Date,
    joined: Date,
    profilePic: String,
    profileBanner: String,
    username: String,
    password: String,
    userType: String,
    affiliation: String,
    followers: Array,
    following: Array,
    locaton: String

}, {collection: 'users'});

export default schema;