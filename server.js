const mongoose = require('mongoose');
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const app = express();

//process.env.DB_CONNECTION_STRING ||
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/webdev';
mongoose.connect(CONNECTION_STRING);
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));
app.use(session({
    secret: 'SECRETO',
    cookie: {secure: false}
}));

app.use(express.json());
require('./controllers/posts-controller')(app);
require("./controllers/users-controller")(app);
require("./controllers/authorization-controller")(app);
app.get('/', (req, res) => {
    res.send('Welcome to Full Stack Development!')
})
app.listen(process.env.PORT || 4000);



