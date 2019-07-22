import keys from './keys';

const pgp = require('pg-promise')();
const db = pgp(keys.database);

export default db;
