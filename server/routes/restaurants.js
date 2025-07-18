const express = require("express");
const router = express.Router();
const pool = require("../db");

router.post("/search", async (req, res) => {
  const { keywords } = req.body;

  if (!Array.isArray(keywords) || keywords.length === 0) {
    return res.status(400).json({ error: "No keywords provided" });
  }

  try {
    const conditions = keywords
      .map((_, i) => `(cuisine_type ILIKE $${i + 1} OR specialties ILIKE $${i + 1})`)
      .join(" OR ");
    const values = keywords.map(k => `%${k}%`);

    const sql = `SELECT name FROM restaurants WHERE ${conditions};`;
    const { rows } = await pool.query(sql, values);

    res.json(rows.map(row => row.name));
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
