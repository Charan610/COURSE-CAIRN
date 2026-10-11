import pg from 'pg';
let pool;
export function database(){
 if(!process.env.DATABASE_URL)throw Object.assign(new Error('Database is not configured.'),{status:503});
 pool??=new pg.Pool({connectionString:process.env.DATABASE_URL,max:4,idleTimeoutMillis:10000,connectionTimeoutMillis:5000,allowExitOnIdle:true});
 return pool;
}
export async function closeDatabase(){if(pool){await pool.end();pool=undefined}}
