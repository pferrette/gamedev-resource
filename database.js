require("dotenv").config();

const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.PGHOST,
  port: "5432",
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  ssl: {
    rejectUnauthorized: false,
  },
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

async function updateVideoQuery() {
  console.log("chamando função update");
  //const text = `UPDATE Videos SET Tags = $1, Comments = $2, WHERE ID=$3;`;
  //const finalVideos = JSON.parse(localStorage.getItem("12345"));
  //const values = [finalVideos.Tags, finalVideos.Comments, finalVideos.ID];
  //const res = await pool.query(text, values)
  //await pool.end();
}

module.exports = { queryVideos, queryArticles, updateVideoQuery };

/*
const text = 'INSERT INTO users(name, email) VALUES($1, $2) RETURNING *'
const values = ['brianc', 'brian.m.carlson@gmail.com']
 
console.log(res.rows[0])
 */
