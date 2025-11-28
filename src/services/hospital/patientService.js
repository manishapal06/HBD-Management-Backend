const Patient = require('../../models/tenant/Patient');

exports.createPatient = async (data) => {
    return await Patient.create(data);
};
