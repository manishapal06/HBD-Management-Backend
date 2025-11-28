const Prescription = require('../../models/tenant/Prescription');

exports.createPrescription = async (data) => {
    return await Prescription.create(data);
};
