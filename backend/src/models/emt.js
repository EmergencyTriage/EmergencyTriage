// Modeling for DB
/**
 * Make EMT be able to fill a form through UUID
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Patient = require('./patient');


const EMTSchema = new Schema ({
    name: String,
    hospital: String,
    vehicleNumber: Number,

    // Only EMT can access form to create Patient
    isPatient: false,
    isOccupied: {
        type: Boolean,
        default: false
    },
    patientCreation: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Patient'
        }
    ]
    /**
     * Geo location for GeoJSON format
     * https://mongoosejs.com/docs/geojson.html reference for more info
     * 
     */
    // location: {coordinates: {
    //   type: [Number],
    //   required: true
    // },

});

const createPatientSchema = new Schema({

}) ;

module.exports = mongoose.model("EMT", EMTSchema);