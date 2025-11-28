const User = require('../../models/tenant/User');

exports.createUser = async (data) => {
    return await User.create(data);
};
