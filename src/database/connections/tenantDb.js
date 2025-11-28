const mongoose = require('mongoose');

exports.connectTenantDb = async (tenantId) => {
    // Logic to connect to tenant DB
    console.log(`Connected to Tenant DB: ${tenantId}`);
};
