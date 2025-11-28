require('dotenv').config();
const app = require('./app');
const { connectMasterDb } = require('./database/connections/masterDb');
const logger = require('./utils/logger/appLogger');

const PORT = process.env.PORT || 3000;

async function startServer() {
    try {
        await connectMasterDb();
        app.listen(PORT, () => {
            logger.info(`Server running on port ${PORT}`);
        });
    } catch (error) {
        logger.error('Failed to start server', error);
        process.exit(1);
    }
}

startServer();
