const express = require('express');

const{
  getBuilding,
  getBuildings,
  createBuilding,
  deleteBuilding,
  updateBuilding
} = require('../controllers/buildingControllers')

const router = express.Router();

/* GET all buildings. */
router.get('/', getBuildings);

//GET a single building
router.get('/:id', getBuilding);

//POST a new building
router.post('/', createBuilding);

//delete a building
router.delete('/:id', deleteBuilding);

//update a building
router.patch('/:id', updateBuilding);

module.exports = router;
