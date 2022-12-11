const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const route = require('./routes');
const database = require('./configs/database');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3002;

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); //Setting Static file
database.connectDatabase();

route(app);

app.listen(port, () => {
  console.log(`⚡Server is running on ${port} ${process.env.HOST}:${port}`);
});
