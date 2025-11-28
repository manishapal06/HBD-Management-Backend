const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, required: true },
    status: { type: String, enum: ['SCHEDULED', 'COMPLETED', 'CANCELLED'], default: 'SCHEDULED' }
}, { timestamps: true });

module.exports = mongoose.model('Appointment', appointmentSchema);
