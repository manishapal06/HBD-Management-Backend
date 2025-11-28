exports.createPatient = async (req, res, next) => {
    try {
        res.status(201).json({ message: 'Patient created' });
    } catch (error) {
        next(error);
    }
};

exports.getPatients = async (req, res, next) => {
    try {
        res.json({ data: [] });
    } catch (error) {
        next(error);
    }
};
