const Buildings = require('.../models/Buildings')

//get all buildings
const getBuildings = async (req,res) => {
    const buildings = await Buildings.find({}).sort({createdAt: -1})

    res.status(200).json(buildings)
}

//get a single building
const getBuilding = async(req,res) =>{
    const {id} = req.params

    const building = await Buildings.findById(id)

    if (!building) {
        return res.status(404).json({error:'No such building'})
    }
    res.status(200).json(building)
}


//create a new building
const createBuilding = async (req,res) => {
    const{building, address, accesssibility} = req.body

  try{
    const building = await Buildings.create()
    res.status(200).json(workout)
  }catch(error){
    req.status(400).json ({error: error.message})
  }
}

//delete a building


//update a building


module.export = {
    getBuildings,
    getBuilding,
    createBuilding
}