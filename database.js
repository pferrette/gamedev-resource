const Database = require("better-sqlite3");
const db = new Database("gamedev-res.db");

const getArticles = db.prepare("SELECT * FROM Articles");
const getVideos = db.prepare("SELECT * FROM Videos");

const randomArticle = db.exec(
  `SELECT * FROM Articles ORDER BY RANDOM() LIMIT 1 isRead = false;`,
);
const articleName = JSON.stringify(randomArticle.name);
const articleLink = JSON.stringify(randomArticle.link);

//--------------------------------------------------
const randomVideo = db.exec(
  `SELECT * FROM Videos ORDER BY RANDOM() LIMIT 1 WHERE isRead = false;`,
);
const videoName = JSON.stringify(randomVideo.name);
const videoLink = JSON.stringify(randomVideo.link);

module.exports = db;
