const mongoose = require('mongoose');

const medicalRecordSchema = new mongoose.Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    recordType: String,
    details: mongoose.Schema.Types.Mixed
}, { timestamps: true });

module.exports = mongoose.model('MedicalRecord', medicalRecordSchema);
