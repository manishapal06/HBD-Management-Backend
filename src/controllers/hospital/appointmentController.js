exports.createAppointment = async (req, res, next) => {
    try {
        res.status(201).json({ message: 'Appointment scheduled' });
    } catch (error) {
        next(error);
    }
};

exports.getAppointments = async (req, res, next) => {
    try {
        res.json({ data: [] });
    } catch (error) {
        next(error);
    }
};
