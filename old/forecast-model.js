import mongoose from 'mongoose';
import feedSchema from '../schema/posts-schema.js'
const feedModel = mongoose.model('FeedModel', feedSchema);
export default feedModel;