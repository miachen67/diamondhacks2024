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
const mongoose = require('mongoose');

require('dotenv').config();

//express app
const app = express();
const buildingRoutes = require('./routes/buildings');

//middleware
app.use(express.json()); //attaches json to req object

//grabs all different routes on router and uses them on app
app.use('/api/buildings', buildingRoutes);

//connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    //listen for requests only after connected to database
    app.listen(process.env.PORT, () => {
      console.log("listening on port " + process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  })

