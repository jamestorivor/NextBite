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
  const { keywords } = req.body;

  if (!Array.isArray(keywords) || keywords.length === 0) {
    return res.status(400).json({ error: "No keywords provided" });
  }

  try {
    const conditions = [];
    const values = [];

    keywords.forEach((word, index) => {
      const placeholder1 = `$${values.length + 1}`;
      const placeholder2 = `$${values.length + 2}`;
      conditions.push(`cuisine_type ILIKE ${placeholder1}`);
      conditions.push(`specialties ILIKE ${placeholder2}`);
      values.push(`%${word}%`, `%${word}%`);
    });

    const whereClause = conditions.join(" OR ");
    const query = `SELECT * FROM restaurants WHERE ${whereClause};`;

    console.log("🧪 Final SQL:", query);
    console.log("📦 Values:", values);

    const { rows } = await pool.query(query, values);

    res.json(rows);
  } catch (err) {
    console.error("💥 Query error:", err.message);
    res.status(500).json({ error: "Server error" });
  }
});
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
