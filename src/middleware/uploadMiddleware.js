const multer = require('../config/multer');

exports.uploadSingle = (fieldName) => multer.single(fieldName);
exports.uploadArray = (fieldName, maxCount) => multer.array(fieldName, maxCount);
