const express = require('express');

const{
  getBuilding,
  getBuildings,
  createBuilding
} = require('../controllers/buildingControllers')
const router = express.Router();

/* GET all buildings. */
router.get('/', getBuildings);

//GET a single building
router.get('/:id', getBuilding);

//POST a new building
router.post('/', createBuilding);

//delete a building
router.delete('/:id', (req, res) => {
  res.json({mssg: "DELETE a new workout"})
});

//update a building
router.patch('/:id', (req, res) => {
  res.json({mssg: "UPDATE a workout"})
});

module.exports = router;
