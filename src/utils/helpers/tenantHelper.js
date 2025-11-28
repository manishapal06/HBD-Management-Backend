exports.getTenantId = (req) => {
    return req.headers['x-tenant-id'];
};
