const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    tenantId: { type: String, required: true, unique: true },
    isActive: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Hospital', hospitalSchema);
