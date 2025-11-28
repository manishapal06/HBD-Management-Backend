exports.createRole = async (req, res, next) => {
    try {
        res.status(201).json({ message: 'Role created' });
    } catch (error) {
        next(error);
    }
};

exports.getRoles = async (req, res, next) => {
    try {
        res.json({ data: [] });
    } catch (error) {
        next(error);
    }
};
