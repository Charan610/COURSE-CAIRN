import {randomBytes,scrypt as scryptCallback,timingSafeEqual,createHash} from 'node:crypto';
import {promisify} from 'node:util';
const scrypt=promisify(scryptCallback);
export const randomToken=()=>randomBytes(32).toString('base64url');
export const hashToken=value=>createHash('sha256').update(value).digest('hex');
export async function hashPassword(password){const salt=randomBytes(16).toString('hex');const key=await scrypt(password,salt,64,{N:32768,r:8,p:3,maxmem:128*1024*1024});return `${salt}:${key.toString('hex')}`;}
export async function verifyPassword(password,encoded){const [salt,hash]=encoded.split(':');const key=await scrypt(password,salt,64,{N:32768,r:8,p:3,maxmem:128*1024*1024});const expected=Buffer.from(hash,'hex');return expected.length===key.length&&timingSafeEqual(expected,key);}
export function checkPassword(value){if(typeof value!=='string'||value.length<4||value.length>128)throw Object.assign(new Error('Use a password with 4–128 characters (digits, letters, or symbols).'),{status:400});return value}
export function checkUsername(value){if(typeof value!=='string'||! /^[a-zA-Z0-9_]{3,24}$/.test(value))throw Object.assign(new Error('Username must be 3–24 letters, numbers, or underscores.'),{status:400});return value.toLowerCase()}
export function checkName(value){if(typeof value!=='string'||!value.trim()||value.trim().length>48)throw Object.assign(new Error('Display name must be 1–48 characters.'),{status:400});return value.trim()}
