const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8000;
const routes = require('../routes/routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);

 
app.listen(PORT, ()=> console.log(`Cajeros API running on port  ${PORT}`));

module.exports = app