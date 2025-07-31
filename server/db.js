const { Pool } = require("pg");

const pool = new Pool({
  user: "anir2212", 
  host: "nextbite-db.cz4gkwiwyu58.ap-southeast-2.rds.amazonaws.com",  
  database: "NextBite", 
  password: "#ilovefood123#",
  port: 5432,
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = pool;