exports.createPrescription = async (req, res, next) => {
    try {
        res.status(201).json({ message: 'Prescription created' });
    } catch (error) {
        next(error);
    }
};

exports.getPrescriptions = async (req, res, next) => {
    try {
        res.json({ data: [] });
    } catch (error) {
        next(error);
    }
};
