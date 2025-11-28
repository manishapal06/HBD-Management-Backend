const Role = require('../../models/tenant/Role');

exports.createRole = async (data) => {
    return await Role.create(data);
};
