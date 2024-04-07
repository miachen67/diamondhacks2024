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
      console.log("listening on port 4000 " + process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  })

