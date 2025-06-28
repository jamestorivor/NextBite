const { Pool } = require('pg');

const pool = new Pool({
  user: 'manirudh',
  host: 'localhost',
  database: 'NextBite',
  password: 'your_password',
  port: 5432,
});

module.exports = pool;