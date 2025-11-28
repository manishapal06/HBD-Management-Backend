const tenantContext = (req, res, next) => {
    const tenantId = req.headers['x-tenant-id'];
    if (tenantId) {
        req.tenantId = tenantId;
    }
    next();
};

module.exports = tenantContext;
