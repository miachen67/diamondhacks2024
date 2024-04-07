const Buildings = require('../models/Buildings')
const mongoose = require('mongoose')

//get all buildings
const getBuildings = async (req,res) => {
    const buildings = await Buildings.find({}).sort({createdAt: -1})

    res.status(200).json(buildings)
}

//get a single building
const getBuilding = async(req,res) =>{
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No building"})
    }

    const building = await Buildings.findById(id)

    if (!building) {
        return res.status(404).json({error:'No such building'})
    }
    res.status(200).json(building)
}


//create a new building
const createBuilding = async (req,res) => {
    const{buildingName, address, accessibility} = req.body

  try{
    const newBuilding = await Buildings.create({buildingName,address,accessibility})
    res.status(200).json(newBuilding)
  }catch(error){
    res.status(400).json ({error: error.message})
  }
}

//delete a building
const deleteBuilding = async (req, res) => {
    const {id}= req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No building"})
    }

    const building = await Buildings.findOneAndDelete({_id: id})

    if (!building) {
        return res.status(400).json({error:'No such building'})
    }

    res.status(200).json(building)
}

//update a building
const updateBuilding = async (req, res) =>{
    const {id}= req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No building"})
    }

    const building = await Buildings.findOneAndUpdate({_id:id},{
        ...req.body
    })

    if (!building) {
        return res.status(400).json({error:'No such building'})
    }

    res.status(200).json(building)
}

module.exports = {
    getBuildings,
    getBuilding,
    createBuilding,
    deleteBuilding,
    updateBuilding
}