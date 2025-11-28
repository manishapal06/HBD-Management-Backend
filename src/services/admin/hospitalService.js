const Hospital = require('../../models/master/Hospital');

exports.createHospital = async (data) => {
    return await Hospital.create(data);
};
