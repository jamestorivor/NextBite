const { Pool } = require("pg");

const pool = new Pool({
  user: "manirudh",
  host: "localhost",
  database: "NextBite",
  password: "dragonm221203",
  port: 5432,
});

module.exports = pool;

//export default pool;