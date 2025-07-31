const express = require("express");
const cors = require("cors");
const pool = require("./db"); 

const app = express();

const corsOptions = {
  origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Server is running" });
});

app.post("/api/restaurants/search", async (req, res) => {
  const { keywords, sortOption = "match", location } = req.body;

  if (!Array.isArray(keywords) || keywords.length === 0) {
    return res.status(400).json({ error: "No keywords provided" });
  }

  try {
    const conditions = [];
const scoreFragments = [];
const values = [];

let paramIndex = 1;

keywords.forEach((word) => {
  const val = `%${word}%`;

  
  values.push(val); 
  conditions.push(`cuisine_type ILIKE $${paramIndex}`);
  scoreFragments.push(`CASE WHEN cuisine_type ILIKE $${paramIndex} THEN 1 ELSE 0 END`);
  paramIndex++;

  values.push(val); 
  conditions.push(`specialties ILIKE $${paramIndex}`);
  scoreFragments.push(`CASE WHEN specialties ILIKE $${paramIndex} THEN 1 ELSE 0 END`);
  paramIndex++;

  values.push(val); 
  conditions.push(`address ILIKE $${paramIndex}`);
  scoreFragments.push(`CASE WHEN address ILIKE $${paramIndex} THEN 1 ELSE 0 END`);
  paramIndex++;

  values.push(val); 
  conditions.push(`name ILIKE $${paramIndex}`);
  scoreFragments.push(`CASE WHEN name ILIKE $${paramIndex} THEN 1 ELSE 0 END`);
  paramIndex++;
});

    const whereClause = conditions.join(" OR ");
    const scoreExpression = scoreFragments.join(" + ");
    let query = "";
    let orderBy = "match_score DESC";
    let selectDistance = "";
    let havingLocation = false;
    
    if (sortOption === "distance" && location?.lat && location?.lng) {
      havingLocation = true;
      values.push(location.lat); 
      const latParam = `$${paramIndex++}`;
      values.push(location.lng); 
      const lngParam = `$${paramIndex++}`;

      selectDistance = `, (
        6371 * acos(
          cos(radians(${latParam})) *
          cos(radians(latitude)) *
          cos(radians(longitude) - radians(${lngParam})) +
          sin(radians(${latParam})) *
          sin(radians(latitude))
        )
      ) AS distance`;

      orderBy = "distance ASC";
    }

    query = `
      SELECT *, (${scoreExpression}) AS match_score
      ${selectDistance}
      FROM restaurants
      WHERE ${whereClause}
      ORDER BY ${orderBy}
      LIMIT 30;
    `;

    console.log("SQL:", query);
    console.log("Values:", values);

    const { rows } = await pool.query(query, values);
    res.json(rows);
  } catch (err) {
    console.error("Query error:", err.message);
    res.status(500).json({ error: "Server error" });
  }
});
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
