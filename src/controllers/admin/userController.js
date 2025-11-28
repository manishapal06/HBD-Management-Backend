exports.createUser = async (req, res, next) => {
    try {
        res.status(201).json({ message: 'User created' });
    } catch (error) {
        next(error);
    }
};

exports.getUsers = async (req, res, next) => {
    try {
        res.json({ data: [] });
    } catch (error) {
        next(error);
    }
};
