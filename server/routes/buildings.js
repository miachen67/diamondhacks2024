const express = require('express');
const Buildings = require('.../models/Buildings')
const router = express.Router();

/* GET all buildings. */
router.get('/', (req, res) => {
  res.json({mssg: "Get all workouts"});
});

//GET a single building
router.get('/:id', (req, res) => {
  res.json({mssg: "GET a single workout"});
});

//POST a new building
router.post('/', async (req, res) => {
  const{building, address, accesssibility} = req.body

  try{
    const building = await Buildings.create()
    res.status(200).json(workout)
  }catch(error){
    req.status(400).json ({error: error.message})
  }
  // res.json({mssg: "POST a new workout"})
});

//delete a building
router.delete('/:id', (req, res) => {
  res.json({mssg: "DELETE a new workout"})
});

//update a building
router.patch('/:id', (req, res) => {
  res.json({mssg: "UPDATE a workout"})
});

module.exports = router;
