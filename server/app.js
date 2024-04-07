/*const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users', usersRouter);

dotenv.config();

mongoose.connect(process.env.DB_URL).then(() => {
  console.log('Connected to MongoDB database');
});

module.exports = app; */


const express = require('express');
require('dotenv').config();

const app = express();

//routes
app.get('/', (req, res) => {
  res.json({message: "welcome to the app"});
});

//listen for requests
app.listen(process.env.PORT, () => {
    console.log("listening on port 4000");
});