const db = require('./config');
const fs = require('fs');

const sql = fs.readFileSync('../sql/cajeros-automaticos.sql').toString();

db.query(sql, function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});