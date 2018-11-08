/**
 * @author Hussain Kovvuru
 */
import express from 'express';
import { logger, redisClient } from './utills';
import shutdown from '../lib';

// initiating istance 
const app = express();

// creating servers
const server = app.listen(3000, () => {
    logger.logInfo('Server is listening at https://localhost:3000', app.listen, 'Server Details');
});

/**
 * @argument SIGINT This will stop the server accepting signals
 * @argument SIGTERM This will terminate the server 
 * @argument SIGUSR2 This is for use anothe signal
 */
const signals = [SIGINT, SIGTERM, SIGUSR2];


// shut down the server gracefully
const shutdownServices = async () => {
    await server.close(() => {
        logger.logInfo('server closed gracefully');
    });
}

shutdown({ signals, shutdownServices });


/* process.on('SIGTERM', () => {
    logger.logInfo('SIGTERM signal received.');
    logger.logErr('Closing http server.');
    server.close(() => {
        logger.logInfo('Http server closed.');
        // boolean means [force], see in mongoose doc
        mongoose.connection.close(false, () => {
            logger.logInfo('MongoDb connection closed.');
            process.exit(0);
        });
    });
}); */

// exporting server 
export default server;