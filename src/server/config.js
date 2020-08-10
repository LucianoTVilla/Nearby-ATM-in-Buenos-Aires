const mysql = require('mysql');
require('dotenv').config()

const db = mysql.createConnection({
	host:"localhost",
	user:"root",
	password: process.env.DB_PASSWORD,
	database:"cajeros",
	multipleStatements: true
});

db.connect((err) => {
	if (err) {
		return console.log(err)
	}
	console.log('Database connected');
});

module.exports = db;