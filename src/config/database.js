module.exports = {
    master: {
        uri: process.env.MONGODB_URI,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    }
};
