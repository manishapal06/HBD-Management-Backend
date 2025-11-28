const mongoose = require('mongoose');
const config = require('../../config/database');

exports.connectMasterDb = async () => {
    try {
        await mongoose.connect(config.master.uri, config.master.options);
        console.log('Connected to Master DB');
    } catch (error) {
        console.error('Master DB connection error:', error);
        process.exit(1);
    }
};
