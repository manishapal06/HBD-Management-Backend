const Appointment = require('../../models/tenant/Appointment');

exports.createAppointment = async (data) => {
    return await Appointment.create(data);
};
