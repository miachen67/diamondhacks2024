const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const buildingSchema = new Schema({
    building:{
        type: String,
        required: true
    },
    address:{
        type: String, 
        required: true
    },
    accessibility:{
        type: Number,
        required: true
    }
}, {timestamps:true});

module.exports=mongoose.model('Building', buildingSchema)
