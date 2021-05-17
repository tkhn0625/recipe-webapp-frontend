import * as dotenv from 'dotenv';

const envFound = dotenv.config();
if (!envFound) {
    // Throw generic error
    throw new Error("Couldn't find .env file");
}

export default {
    /**
     *  Application port.
     */
    port: process.env.REACT_APP_PORT,

    apiUrl: process.env.REACT_APP_API_URL,
};
