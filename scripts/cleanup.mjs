import {database,closeDatabase} from '../lib/database.mjs';
try{await database().query('DELETE FROM sessions WHERE expires_at<now()');await database().query('DELETE FROM rate_limits WHERE expires_at<now()');console.log('Expired sessions and rate limits removed.')}finally{await closeDatabase()}
