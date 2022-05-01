import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postsController from "./controllers/posts-controller.js";
import userController from "./controllers/user-controller.js";
import forecastController from "./controllers/forecast-controller.js";

//process.env.DB_CONNECTION_STRING ||
const CONNECTION_STRING = 'mongodb://localhost:27017/webdev';
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(cors());
app.use(express.json());
postsController(app);
userController(app)
forecastController(app);
app.get('/', (req, res) => {
    res.send('Welcome to Full Stack Development!')
})
app.listen(process.env.PORT || 4000);