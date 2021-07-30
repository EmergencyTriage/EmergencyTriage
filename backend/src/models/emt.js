// Modeling for DB
/**
 * Make EMT be able to fill a form through UUID
 */
const mongoose = require('mongoose');
const {v4: UUIDv4} = require('uuid');

const Schema = mongoose.Schema;

const EMTSchema = new Schema ({
    id: UUIDv4(),
    name: String,
    hospital: String,
    vehicleNumber: Number,

    // Only EMT can access form to create Patient
    isPatient: false,
    isOccupied: {
        type: Boolean,
        default: false
    },
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

module.exports = mongoose.model("EMT", EMTSchema);