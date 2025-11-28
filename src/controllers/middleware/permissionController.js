exports.checkPermission = (permission) => {
    return (req, res, next) => {
        // Logic to check permission
        next();
    };
};
