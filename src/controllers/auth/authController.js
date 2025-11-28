exports.login = async (req, res, next) => {
    try {
        res.json({ message: 'Login successful', token: 'mock-token' });
    } catch (error) {
        next(error);
    }
};

exports.register = async (req, res, next) => {
    try {
        res.status(201).json({ message: 'Registration successful' });
    } catch (error) {
        next(error);
    }
};
