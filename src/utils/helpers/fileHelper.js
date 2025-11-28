const fs = require('fs');

exports.deleteFile = (path) => {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
};
