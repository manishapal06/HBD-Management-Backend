const express = require('express');
const router = express.Router();

const authRoutes = require('./auth/authRoutes');
const oauthRoutes = require('./auth/oauthRoutes');
const passwordRoutes = require('./auth/passwordRoutes');
const hospitalRoutes = require('./admin/hospitalRoutes');
const userRoutes = require('./admin/userRoutes');
const roleRoutes = require('./admin/roleRoutes');
const dashboardRoutes = require('./admin/dashboardRoutes');
const patientRoutes = require('./hospital/patientRoutes');
const prescriptionRoutes = require('./hospital/prescriptionRoutes');
const appointmentRoutes = require('./hospital/appointmentRoutes');
const reportRoutes = require('./hospital/reportRoutes');

router.use('/auth', authRoutes);
router.use('/auth/oauth', oauthRoutes);
router.use('/auth/password', passwordRoutes);

router.use('/admin/hospitals', hospitalRoutes);
router.use('/admin/users', userRoutes);
router.use('/admin/roles', roleRoutes);
router.use('/admin/dashboard', dashboardRoutes);

router.use('/hospital/patients', patientRoutes);
router.use('/hospital/prescriptions', prescriptionRoutes);
router.use('/hospital/appointments', appointmentRoutes);
router.use('/hospital/reports', reportRoutes);

module.exports = router;
