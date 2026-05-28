const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  port: "5432",
  user: "postgres",
  password: "1234",
  database: "gamedev-res",
});

async function queryVideos() {
  const res = await pool.query(
    `SELECT * FROM "Videos" WHERE "isRead" = '0' ORDER BY RANDOM() LIMIT 1;`,
  );
  return res.rows[0];
  await pool.end();
}

async function queryArticles() {
  const res = await pool.query(
    `SELECT * FROM "Articles" WHERE "isRead" = '0' ORDER BY RANDOM() LIMIT 1;`,
  );
  return res.rows[0];
  await pool.end();
}

module.exports = { queryVideos, queryArticles };
