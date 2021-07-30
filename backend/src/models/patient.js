// Modeling for DB
const mongoose = require('mongoose');
const {v4: UUIDv4} = require('uuid');

const Schema = mongoose.Schema;


const PatientSchema = new Schema ({
    id: UUIDv4(),
    name: String,
    address: String,
    insurance: String,
    birthDate: String,
    bloodType: String,
    injury: String,
    triage: {
        type: [String],
    },
    status: {
        type: String
    },
    
    // Only EMT can access form to create Patient
    isPatient: true,
    /**
     * Geo location for GeoJSON format
     */
    // location: {
    //     type: { type: String },
    //     coordinates: [Number]
    // }
});

module.exports = mongoose.model("Patient", PatientSchema);