exports.createHospital = async (req, res, next) => {
    try {
        res.status(201).json({ message: 'Hospital created' });
    } catch (error) {
        next(error);
    }
};

exports.getHospitals = async (req, res, next) => {
    try {
        res.json({ data: [] });
    } catch (error) {
        next(error);
    }
};
