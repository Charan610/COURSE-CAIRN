import {readFile} from 'node:fs/promises';
import {database,closeDatabase} from '../lib/database.mjs';
const client=await database().connect();
try{await client.query('BEGIN');await client.query("SELECT pg_advisory_xact_lock(4202501)");await client.query(await readFile(new URL('../migrations/001_accounts.sql',import.meta.url),'utf8'));await client.query('COMMIT');console.log('Account database migration applied.')}catch(e){await client.query('ROLLBACK');throw e}finally{client.release();await closeDatabase()}
