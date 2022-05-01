import mongoose from 'mongoose';
const schema = mongoose.Schema({
    _id: String,
    
}, {collection: 'forecasts'});

export default schema;