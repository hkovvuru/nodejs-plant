import redis from 'redis';
import logger from './pinoLogger';

const redisClient = redis.createClient({
    port: 3000,
    host: 'localhost'
});

redisClient.addListener('connect', ()=> {
    logger.logInfo('Successfully connected to the redis client');
});

redisClient.addListener('close', () => {
    logger.logErr('Error while esablishing connection to redis client');
});

redisClient.quit()

export default redisClient;
