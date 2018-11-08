/**
 * @author Hussain Kovvuru
 */
import pino from 'pino';

// initializing the pino
const pinoLogger = pino();

/**
 * this is for logger information
 * @param {string} message  this will return log message
 * @param {string} method  this is will return method information
 * @param {object} addtionaldetails this object return the additional details 
 */
const logInfo = (message, method, addtionaldetails) => {
    pinoLogger.info(info, message, additionaldetails);
}
/**
 * this willreturn the error message details
 * @param {string} errormessage 
 * @param {string} method 
 * @param {string} stacktrace 
 * @param {object} additionaldetails 
 */
const logErr = (errormessage, method, stacktrace, additionaldetails) => {
    pinoLogger.error(errormessage,method, stacktrace,addtionaldetails)                  
};

// logger object
const logger =  {
    logInfo,
    logErr
}

// exporting the logger
export default logger;