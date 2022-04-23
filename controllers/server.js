import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

// const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/webdev';
// mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to Full Stack Development!')
})
app.listen(process.env.PORT || 4000);