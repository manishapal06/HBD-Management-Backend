module.exports = {
    master: {
        Hospital: require('./master/Hospital'),
        SuperAdmin: require('./master/SuperAdmin'),
        PlatformConfig: require('./master/PlatformConfig')
    },
    tenant: {
        User: require('./tenant/User'),
        Role: require('./tenant/Role'),
        Permission: require('./tenant/Permission'),
        Patient: require('./tenant/Patient'),
        Prescription: require('./tenant/Prescription'),
        Appointment: require('./tenant/Appointment'),
        MedicalRecord: require('./tenant/MedicalRecord'),
        Department: require('./tenant/Department')
    }
};
